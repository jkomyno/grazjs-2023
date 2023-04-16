use crate::types::scalars::Scalars;
use serde_wasm_bindgen::Error as WasmError;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;

mod internal {
  pub use super::*;

  pub fn get_letter(params: Scalars) -> char {
    params.letter
  }

  pub fn get_key_length(_: Scalars) -> usize {
    4
  }
}

/// Given a `Scalars` instance, return its `letter` member.
#[wasm_bindgen]
pub fn get_letter(params: JsValue) -> Result<JsValue, WasmError> {
  let params: Scalars = utils::from_js(params)?;
  let result = internal::get_letter(params);
  utils::to_js(&result)
}

/// Given a `Scalars` instance, return the number of its members.
#[wasm_bindgen]
pub fn get_key_length(params: JsValue) -> Result<JsValue, WasmError> {
  let params: Scalars = utils::from_js(params)?;
  let result = internal::get_key_length(params);
  utils::to_js(&result)
}
