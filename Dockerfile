# syntax=docker/dockerfile:1

ARG RUST_VERSION="1.66.1"
ARG ALPINE_VERSION="3.17.0"

FROM rust:slim@sha256:b0018e8d49d9f7656b53176df89f8ff7c218c98bc07af90d28f0e44834827c9c as builder

ARG WASM_BINDGEN_VERSION="0.2.84"
ARG PNPM_VERSION="7.20.0"

COPY --from=rust rust-toolchain.toml /opt/app/rust/
WORKDIR /opt/app/rust

# Install Node.js
RUN apt-get update -y \
  && apt-get install -y curl libssl-dev pkg-config \
  && curl -fsSL https://deb.nodesource.com/setup_18.x | bash - \
  && apt-get install -y nodejs \
  && node --version

# Add WebAssembly support
RUN rustup show \
  && cargo install -f wasm-bindgen-cli@${WASM_BINDGEN_VERSION}

# Import the Rust project
COPY --from=rust . /opt/app/rust

# Run unit tests (and cache dependencies)
RUN --mount=type=cache,target=/home/rust/.cargo/git \
    --mount=type=cache,target=/home/rust/.cargo/registry \
    --mount=type=cache,sharing=private,target=/home/rust/src/target \
    cargo test

# Import the Node.js project
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml /opt/app/
COPY --from=nodejs . /opt/app/nodejs
WORKDIR /opt/app

# Install pnpm
RUN --mount=type=cache,id=pnpm-store,target=/root/.pnpm-store \
  npm i -g pnpm@${PNPM_VERSION} \
  && pnpm fetch

# Install dependencies
RUN pnpm i --frozen-lockfile --offline --unsafe-perm

# Build the Wasm artifacts
ENTRYPOINT [ "pnpm" ]
CMD [ "build:wasm" ]
