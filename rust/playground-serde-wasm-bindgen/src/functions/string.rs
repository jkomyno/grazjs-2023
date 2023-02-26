use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;
use crate::types::string::StringParams;

mod internal {
  use super::*;

  pub fn get_string_length_from_params(x: StringParams) -> usize {
    x.id.len()
  }
}

/// Given a string, return its length.
/// In TS, the Rust `String` is typed as `string`.
#[wasm_bindgen]
pub fn get_string_length_from_params(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: StringParams = utils::from_js(x)?;
  let result = internal::get_string_length_from_params(x);
  utils::to_js(&result)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn get_string_length_from_params_example() {
    let result = internal::get_string_length_from_params(StringParams { id: "".to_owned() });
    assert_eq!(result, 0);

    let result =
      internal::get_string_length_from_params(StringParams { id: "Node congress".to_owned() });
    assert_eq!(result, 13);
  }
}
