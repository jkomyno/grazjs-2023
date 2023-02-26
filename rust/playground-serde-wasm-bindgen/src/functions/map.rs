use std::collections::BTreeMap;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;

mod internal {

  pub use super::*;

  pub fn object_keys_as_string(x: BTreeMap<i32, i32>) -> String {
    x.keys().map(|key| format!("{}", key)).collect::<Vec<String>>().join(", ")
  }
}

/// Given a BTreeMap<i32, i32>, return its keys separated by a comma.
#[wasm_bindgen]
pub fn object_keys_as_string(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: BTreeMap<i32, i32> = utils::from_js(x)?;
  let result = internal::object_keys_as_string(x);
  utils::to_js(&result)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn test_object_keys_as_string() {
    let mut map = BTreeMap::new();
    map.insert(1, 2);
    map.insert(3, 4);
    map.insert(5, 6);
    let result = internal::object_keys_as_string(map);
    assert_eq!(result, "1, 3, 5");
  }
}
