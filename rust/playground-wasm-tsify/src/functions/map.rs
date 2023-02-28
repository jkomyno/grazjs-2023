use serde::{Deserialize, Serialize};
use std::collections::BTreeMap;
use tsify::Tsify;
use wasm_bindgen::prelude::wasm_bindgen;

#[derive(Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct I32TreeMap {
  pub data: BTreeMap<i32, i32>,
}

/// Given a wrapped BTreeMap<i32, i32>, return its keys separated by a comma.
#[wasm_bindgen]
pub fn object_keys_as_string(x: I32TreeMap) -> String {
  x.data.keys().map(|key| format!("{}", key)).collect::<Vec<String>>().join(", ")
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
    let result = object_keys_as_string(I32TreeMap { data: map });
    assert_eq!(result, "1, 3, 5");
  }
}
