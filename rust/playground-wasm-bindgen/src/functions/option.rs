use wasm_bindgen::prelude::wasm_bindgen;

/// Given an `OptionalParams` instance, return its `int32` member incremented by 1, or None.
/// In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
#[wasm_bindgen]
pub fn maybe_inc(x: Option<i32>) -> Option<i32> {
  x.map(|v| v + 1)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn maybe_inc_some() {
    let result = maybe_inc(Some(1));
    assert_eq!(result, Some(2));
  }

  #[test]
  fn maybe_inc_none() {
    let result = maybe_inc(None);
    assert_eq!(result, None);
  }
}
