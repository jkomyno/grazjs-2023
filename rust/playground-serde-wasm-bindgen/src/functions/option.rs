use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;

mod internal {
  pub fn maybe_inc(x: Option<i32>) -> Option<i32> {
    x.map(|v| v + 1)
  }
}

/// Given an `OptionalParams` instance, return its `int32` member incremented by 1, or None.
#[wasm_bindgen]
pub fn maybe_inc(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Option<i32> = utils::from_js(x)?;
  let result = internal::maybe_inc(x);
  utils::to_js(&result)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn maybe_inc_some() {
    let result = internal::maybe_inc(Some(1));
    assert_eq!(result, Some(2));
  }

  #[test]
  fn maybe_inc_none() {
    let result = internal::maybe_inc(None);
    assert_eq!(result, None);
  }
}
