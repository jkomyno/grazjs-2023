use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;

mod internal {
  pub fn inc_or_fail(x: Option<i32>) -> Result<i32, String> {
    match x {
      Some(v) => Ok(v + 1),
      None => Err("No value!".to_string()),
    }
  }
}

/// Given an optional integer, increment it or throw.
#[wasm_bindgen]
pub fn inc_or_fail(x: JsValue) -> Result<JsValue, JsValue> {
  let x: Option<i32> = utils::from_js(x)?;
  let result = internal::inc_or_fail(x);
  result.map(|v| utils::to_js(&v).unwrap()).map_err(|err| utils::to_js(&err).unwrap())
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn inc_or_fail_some() {
    let ok = internal::inc_or_fail(Some(1)).unwrap();
    assert_eq!(ok, 2);
  }

  #[test]
  fn inc_or_fail_none() {
    let err = internal::inc_or_fail(None).unwrap_err();
    assert_eq!(err, "No value!".to_string());
  }
}
