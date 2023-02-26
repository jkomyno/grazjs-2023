use wasm_bindgen::prelude::wasm_bindgen;

/// Given an unsigned 64-bit number, return the number multiplied by two.
/// In TS, the Rust `u64` is typed as `bigint`.
#[wasm_bindgen]
pub fn duplicate_biguint(x: u64) -> u64 {
  x * 2
}

/// Given a signed 64-bit number, return the number multiplied by two.
/// In TS, the Rust `i64` is typed as `bigint`.
#[wasm_bindgen]
pub fn duplicate_bigint(x: i64) -> i64 {
  x * 2
}

/// Given an unsigned 32-bit number, return the number multiplied by two.
/// In TS, the Rust `u32` is typed as `bigint`.
#[wasm_bindgen]
pub fn duplicate_uint(x: u32) -> u32 {
  x * 2
}

/// Given a signed 32-bit number, return the number multiplied by two.
/// In TS, the Rust `i32` is typed as `bigint`.
#[wasm_bindgen]
pub fn duplicate_int(x: i32) -> i32 {
  x * 2
}

/// Given a double number, return the number multiplied by two.
/// In TS, the Rust `f64` is typed as `number`.
#[wasm_bindgen]
pub fn duplicate_f64(x: f64) -> f64 {
  x * 2.0
}

/// Given a float number, return the number multiplied by two.
/// In TS, the Rust `f32` is typed as `number`.
#[wasm_bindgen]
pub fn duplicate_f32(x: f32) -> f32 {
  x * 2.0
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn duplicate_biguint_example() {
    let result = duplicate_biguint(u64::pow(2, 40));
    assert_eq!(result, u64::pow(2, 41));
  }

  #[test]
  fn duplicate_bigint_example() {
    let result = duplicate_bigint(-i64::pow(2, 40));
    assert_eq!(result, -i64::pow(2, 41));
  }

  #[test]
  fn duplicate_uint_example() {
    let result = duplicate_uint(u32::pow(2, 12));
    assert_eq!(result, u32::pow(2, 13));
  }

  #[test]
  fn duplicate_int_example() {
    let result = duplicate_int(-i32::pow(2, 12));
    assert_eq!(result, -i32::pow(2, 13));
  }

  #[test]
  fn duplicate_f64_example() {
    let result = duplicate_f64(1.0);
    assert_eq!(result, 2.0);
  }

  #[test]
  fn duplicate_f32_example() {
    let result = duplicate_f32(1.0);
    assert_eq!(result, 2.0);
  }
}
