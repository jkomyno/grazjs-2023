# Type-safe bindings for Node.js with Rust and WebAssembly

> Accompanying code for the talk I presented at Node Congress 2023 in Berlin, Germany

<p>
  <a href="https://github.com/jkomyno/node-congress-2023/blob/main/LICENSE">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" target="_blank" />
  </a>
</p>

Slides for this talk are also available [here](http://jkomyno-nodecongress-2023.vercel.app/).

## Abstract

This talk will teach you how to write performance-critical Node.js modules without the burden of distributing platform-dependent artifacts and using the C/C++ toolchain. You will discover how to smoothly integrate Rust code into your Node.js + TypeScript application using WebAssembly. You will also learn how to avoid the typical WebAssembly serialization issues, and understand when other alternatives like Neon or Napi.rs are preferable. Together, we will cross the language bridge between Rust and Node.js while preserving the familiar DX you're used to.

## Get Started

### Requirements

- [`nodejs@18.12.1`](https://nodejs.org/en/download/) or superior*
- [`pnpm@7.20.0`](https://pnpm.io/installation) or superior*

(*) These are the versions used to develop this repository. Older versions might work as well, but they haven't been tested.

### Install Dependencies

- Install dependencies:
  ```sh
  pnpm i
  ```

In [`./rust`](./rust):

- Install the Rust toolchain via [Rustup](https://rustup.rs/):
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

- Add suppport for the `wasm32-unknown-unknown` compilation target for Rust:
  ```sh
  rustup target add wasm32-unknown-unknown
  ```

- Install `wasm-bindgen`:
  ```sh
  cargo install -f wasm-bindgen-cli@0.2.84
  ```
  
  (the specific version is important, as `wasm-bindgen-cli` doesn't yet follow semantic versioning. This version needs to match the version of the `wasm-bindgen` dependency in the `Cargo.toml` files of the Rust crates)

### Build & Test

- Run Rust unit tests and build the WebAssembly artifacts:

  ```sh
  pnpm build:wasm
  ```

- Run Node.js unit tests:

  ```sh
  pnpm test:ci
  ```

## 👤 Author

**Alberto Schiabel**

* Twitter: [@jkomyno](https://twitter.com/jkomyno)
* Github: [@jkomyno](https://github.com/jkomyno)

## 📝 License

Built with ❤️ by [Alberto Schiabel](https://github.com/jkomyno).
This project is [MIT](https://github.com/jkomyno/node-congress-2023/blob/main/LICENSE) licensed.
