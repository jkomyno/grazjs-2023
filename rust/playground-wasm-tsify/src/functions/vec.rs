use serde::{Deserialize, Serialize};
use tsify::Tsify;
use wasm_bindgen::prelude::wasm_bindgen;

#[derive(Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct VecString {
  pub data: Vec<String>,
}

#[derive(Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MatrixDataI32 {
  pub data: Vec<Vec<i32>>,
}

/// Given a Vec<u32> vector, return its length.
/// In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
#[wasm_bindgen]
pub fn get_u32_array_length(x: Vec<u32>) -> usize {
  x.len()
}

/// Given a Vec<i32> vector, return its length.
/// In TS, the Rust `Vec<i32>` is typed as `Int32Array`.
#[wasm_bindgen]
pub fn get_i32_array_length(x: Vec<i32>) -> usize {
  x.len()
}

/// Given a wrapper over a Vec<Vec<i32>> vector, return its length.
#[wasm_bindgen]
pub fn get_nested_array_length(x: MatrixDataI32) -> usize {
  x.data.iter().flatten().count()
}

/// Given a wrapper over a Vec<String> vector, return its length.
#[wasm_bindgen]
pub fn get_string_array_length(x: VecString) -> usize {
  x.data.len()
}
