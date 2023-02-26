use wasm_bindgen::prelude::wasm_bindgen;

/// Given a Vec<u32> vector, return its length.
/// In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
#[wasm_bindgen]
pub fn inc_or_fail(x: Option<i32>) -> Result<i32, String> {
  match x {
    Some(v) => Ok(v + 1),
    None => Err("No value!".to_string()),
  }
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn inc_or_fail_some() {
    let ok = inc_or_fail(Some(1)).unwrap();
    assert_eq!(ok, 2);
  }

  #[test]
  fn inc_or_fail_none() {
    let err = inc_or_fail(None).unwrap_err();
    assert_eq!(err, "No value!".to_string());
  }
}
