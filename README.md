# Type-safe bindings for Node.js with Rust and WebAssembly

> Accompanying code for the talk I presented at Node Congress 2023 in Berlin, Germany

<p>
  <a href="https://github.com/jkomyno/node-congress-2023/actions/workflows/ci.yml">
    <img alt="Github Actions" src="https://github.com/jkomyno/node-congress-2023/actions/workflows/pipeline.yml/badge.svg?branch=main" target="_blank" />
  </a>

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

With Docker:

  - Build and run the local Docker image:

    ```sh
    ./build.sh
    ```

Without Docker:

  - Run Rust unit tests and build the WebAssembly artifacts:

    ```sh
    pnpm build:wasm
    ```

  - Run Node.js unit tests:

    ```sh
    pnpm test:ci
    ```

## Demos

### `playground-wasm-bindgen`

The local [`playground-wasm-bindgen`](./rust/playground-wasm-bindgen/src/lib.rs) crate demonstrates how to use `wasm-bindgen` to export Rust functions and types (in the form of structs / enums) to TypeScript.

The [`functions::unsupported`](./rust/playground-wasm-bindgen/src/functions/unsupported.rs) module (respectively, the [`types::unsupported`](./rust/playground-wasm-bindgen/src/types/unsupported.rs) module) contains a set of functions (respectively, types) that are not supported by `wasm-bindgen` by default, with comments showing the compilation errors that are thrown when trying to export them.

For instance, trying to compile the [following code](https://github.com/jkomyno/node-congress-2023/blob/4495d5315d19d321841b2f6aec47464f0a1e5951/rust/playground-wasm-bindgen/src/functions/unsupported.rs#L4-L30)

```rust
/// Given a Vec<Vec<i32>> vector, return its length.
#[wasm_bindgen]
pub fn get_nested_array_length(x: Vec<Vec<i32>>) -> usize {
  x.iter().flatten().count()
}
```

would result in a compilation error like the following:

```console
error[E0277]: the trait bound `Vec<i32>: JsObject` is not satisfied
  --> wasm-bindgen-playground/src/functions/unsupported.rs:27:1
   |
27 | #[wasm_bindgen]
   | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `Vec<i32>`
   |
   = help: the following other types implement trait `FromWasmAbi`:
             Box<[JsValue]>
             Box<[T]>
             Box<[f32]>
             Box<[f64]>
             Box<[i16]>
             Box<[i32]>
             Box<[i64]>
             Box<[i8]>
           and 6 others
   = note: required for `Box<[Vec<i32>]>` to implement `FromWasmAbi`
   = note: this error originates in the attribute macro `wasm_bindgen`
```

- You can find the TypeScript tests for the `playground-wasm-bindgen` crate in [`./nodejs/demo/__tests__playground-wasm-bindgen.test.ts`](./nodejs/demo/__tests__/playground-wasm-bindgen.test.ts) and [`./nodejs/demo/__tests__/playground-wasm-bindgen.test-d.ts`](./nodejs/demo/__tests__/playground-wasm-bindgen.test-d.ts)
- You can find the TypeScript bindings for the `playground-wasm-bindgen` crate in [`./nodejs/demo/wasm/playground_wasm_bindgen.d.ts`](./nodejs/demo/wasm/playground_wasm_bindgen.d.ts)

### `playground-serde-wasm-bindgen`

The local [`playground-serde-wasm-bindgen`](./rust/playground-serde-wasm-bindgen/src/lib.rs) crate demonstrates how to use `wasm-bindgen` combined with `serde` and `serde-wasm-bindgen` to export Rust functions and types to TypeScript. This allows you to deal with complex types both in Wasm arguments and return types, at the cost of loosing strongly typed TypeScript bindings.

- You can find the TypeScript tests for the `playground-serde-wasm-bindgen` crate in [`./nodejs/demo/__tests__/playground-serde-wasm-bindgen.test.ts`](./nodejs/demo/__tests__/playground-serde-wasm-bindgen.test.ts)
- You can find the TypeScript bindings for the `playground-serde-wasm-bindgen` crate in [`./nodejs/demo/wasm/playground_serde_wasm_bindgen.d.ts`](./nodejs/demo/wasm/playground_serde_wasm_bindgen.d.ts)

### `playground-wasm-tsify`

The local [`playground-wasm-tsify`](./rust/playground-wasm-tsify/src/lib.rs) crate demonstrates how to use `wasm-bindgen` combined with `serde` and `tsify` to export Rust functions and types to TypeScript. This allows you to deal with complex types both in Wasm arguments and return types, as well as obtaining strongly typed and idiomatic TypeScript bindings.

- You can find the TypeScript tests for the `playground-wasm-tsify` crate in [`./nodejs/demo/__tests__/playground-wasm-tsify.test.ts`](./nodejs/demo/__tests__/playground-wasm-tsify.test.ts)
- You can find the TypeScript bindings for the `playground-wasm-tsify` crate in [`./nodejs/demo/wasm/tsify.d.ts`](./nodejs/demo/wasm/playground_wasm_tsify.d.ts)

## Main Dependencies

Please consider starring, supporting, and contributing to the following projects:

- [`wasm-bindgen`](https://github.com/rustwasm/wasm-bindgen)
- [`serde`](https://github.com/serde-rs/serde)
- [`serde-wasm-bindgen`](https://github.com/cloudflare/serde-wasm-bindgen)
- [`tsify`](https://github.com/madonoharu/tsify)

## 👤 Author

**Alberto Schiabel**

* Twitter: [@jkomyno](https://twitter.com/jkomyno)
* Github: [@jkomyno](https://github.com/jkomyno)

## 📝 License

Built with ❤️ by [Alberto Schiabel](https://github.com/jkomyno).
This project is [MIT](https://github.com/jkomyno/node-congress-2023/blob/main/LICENSE) licensed.
