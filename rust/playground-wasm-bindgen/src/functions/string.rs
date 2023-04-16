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
#[wasm_bindgen(js_name = toUpperCase)]
pub fn to_uppercase(x: String) -> String {
  x.to_uppercase()
}

#[wasm_bindgen]
pub fn n_to_string(n: i64) -> String {
  n.to_string()
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn get_string_length_example() {
    let result = get_string_length("".to_owned());
    assert_eq!(result, 0);

    let result = get_string_length("Node congress".to_owned());
    assert_eq!(result, 13);
  }

  #[test]
  fn get_string_length_from_params_example() {
    let result = get_string_length_from_params(StringParams { id: "".to_owned() });
    assert_eq!(result, 0);

    let result = get_string_length_from_params(StringParams { id: "Node congress".to_owned() });
    assert_eq!(result, 13);
  }

  #[test]
  fn to_uppercase_example() {
    let result = to_uppercase("".to_owned());
    assert_eq!(result, "".to_owned());

    let result = to_uppercase("Node Congress".to_owned());
    assert_eq!(result, "NODE CONGRESS".to_owned());
  }

  #[test]
  fn n_to_string_example() {
    let result = n_to_string(0);
    assert_eq!(result, "0".to_owned());

    let result = n_to_string(123456789);
    assert_eq!(result, "123456789".to_owned());
  }
}
