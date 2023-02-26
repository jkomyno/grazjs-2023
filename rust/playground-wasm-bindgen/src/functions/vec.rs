use wasm_bindgen::prelude::wasm_bindgen;

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
