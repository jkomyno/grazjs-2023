use wasm_bindgen::prelude::wasm_bindgen;

use crate::types::string::StringParams;

/// Given a string, return its length.
/// In TS, the Rust `String` is typed as `string`.
#[wasm_bindgen]
pub fn get_string_length(x: String) -> usize {
  x.len()
}

/// Given a string, return its length.
/// In TS, the Rust `String` is typed as `string`.
#[wasm_bindgen]
pub fn get_string_length_from_params(x: StringParams) -> usize {
  x.id.len()
}

/// Given a string, return the same string in uppercase.
/// In TS, the Rust `String` is typed as `string`.
#[wasm_bindgen]
pub fn to_uppercase(x: String) -> String {
  x.to_uppercase()
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn get_string_length_example() {
    let result = get_string_length("".to_owned());
    assert_eq!(result, 0);

    let result = get_string_length("Graz.js".to_owned());
    assert_eq!(result, 7);
  }

  #[test]
  fn get_string_length_from_params_example() {
    let result = get_string_length_from_params(StringParams { id: "".to_owned() });
    assert_eq!(result, 0);

    let result = get_string_length_from_params(StringParams { id: "Graz.js".to_owned() });
    assert_eq!(result, 7);
  }

  #[test]
  fn to_uppercase_example() {
    let result = to_uppercase("".to_owned());
    assert_eq!(result, "".to_owned());

    let result = to_uppercase("Graz.js".to_owned());
    assert_eq!(result, "GRAZ.JS".to_owned());
  }
}
