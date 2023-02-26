use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;
use crate::types::{scalars::Scalars, vec::NumericArrays};

mod internal {

  pub use super::*;

  pub fn get_u32_array_length(x: Vec<u32>) -> usize {
    x.len()
  }

  pub fn get_i32_array_length(x: Vec<i32>) -> usize {
    x.len()
  }

  pub fn get_nested_array_length(x: Vec<Vec<i32>>) -> usize {
    x.iter().flatten().count()
  }

  pub fn get_string_array_length(x: Vec<String>) -> usize {
    x.len()
  }

  pub fn get_keys(_params: Scalars) -> Vec<String> {
    vec!["n", "id", "letter", "toggle"].into_iter().map(|x| x.to_owned()).collect()
  }

  pub fn id_vec_bool(x: Vec<bool>) -> Vec<bool> {
    x
  }

  pub fn id_vec_char(x: Vec<char>) -> Vec<char> {
    x
  }

  pub fn id_numeric_arrays(x: NumericArrays) -> NumericArrays {
    x
  }
}

/// Given a Vec<u32> vector, return its length.
#[wasm_bindgen]
pub fn get_u32_array_length(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<u32> = utils::from_js(x)?;
  let result = internal::get_u32_array_length(x);
  utils::to_js(&result)
}

/// Given a Vec<i32> vector, return its length.
#[wasm_bindgen]
pub fn get_i32_array_length(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<i32> = utils::from_js(x)?;
  let result = internal::get_i32_array_length(x);
  utils::to_js(&result)
}

/// Given a Vec<String> vector, return its length.
#[wasm_bindgen]
pub fn get_nested_array_length(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<Vec<i32>> = utils::from_js(x)?;
  let result = internal::get_nested_array_length(x);
  utils::to_js(&result)
}

/// Given a Vec<String> vector, return its length.
#[wasm_bindgen]
pub fn get_string_array_length(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<String> = utils::from_js(x)?;
  let result = internal::get_string_array_length(x);
  utils::to_js(&result)
}

/// Given a `Scalars` instance, return the labels of its keys.
#[wasm_bindgen]
pub fn get_keys(params: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let params: Scalars = utils::from_js(params)?;
  let result = internal::get_keys(params);
  utils::to_js(&result)
}

/// Given a Vec<bool> vector, return a copy of itself.
#[wasm_bindgen]
pub fn id_vec_bool(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<bool> = utils::from_js(x)?;
  let result = internal::id_vec_bool(x);
  utils::to_js(&result)
}

/// Given a Vec<char> vector, return a copy of itself.
#[wasm_bindgen]
pub fn id_vec_char(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: Vec<char> = utils::from_js(x)?;
  let result = internal::id_vec_char(x);
  utils::to_js(&result)
}

/// Given a `NumericArrays` instance, return a copy of itself.
#[wasm_bindgen]
pub fn id_numeric_arrays(x: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let x: NumericArrays = utils::from_js(x)?;
  let result = internal::id_numeric_arrays(x);
  utils::to_js(&result)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn get_u32_array_length_example() {
    let result = internal::get_u32_array_length(vec![]);
    assert_eq!(result, 0);

    let result = internal::get_u32_array_length(vec![1, 2, 3]);
    assert_eq!(result, 3);
  }

  #[test]
  fn get_i32_array_length_example() {
    let result = internal::get_i32_array_length(vec![]);
    assert_eq!(result, 0);

    let result = internal::get_i32_array_length(vec![1, 2, 3]);
    assert_eq!(result, 3);
  }

  #[test]
  fn get_nested_array_length_example() {
    let result = internal::get_nested_array_length(vec![]);
    assert_eq!(result, 0);

    let result = internal::get_nested_array_length(vec![vec![1, 2, 3], vec![4, 5]]);
    assert_eq!(result, 5);
  }

  #[test]
  fn get_string_array_length_example() {
    let result = internal::get_string_array_length(vec![]);
    assert_eq!(result, 0);

    let result =
      internal::get_string_array_length(vec!["a".to_string(), "b".to_string(), "c".to_string()]);
    assert_eq!(result, 3);
  }

  #[test]
  fn get_keys_example() {
    let result = internal::get_keys(Scalars { n: 1, id: 2, letter: 'a', toggle: true });
    assert_eq!(result, vec!["n", "id", "letter", "toggle"]);
  }

  #[test]
  fn id_vec_bool_example() {
    let result = internal::id_vec_bool(vec![]);
    assert_eq!(result, vec![]);

    let result = internal::id_vec_bool(vec![true, false, true]);
    assert_eq!(result, vec![true, false, true]);
  }

  #[test]
  fn id_vec_char_example() {
    let result = internal::id_vec_char(vec![]);
    assert_eq!(result, vec![]);

    let result = internal::id_vec_char(vec!['a', 'b', 'c']);
    assert_eq!(result, vec!['a', 'b', 'c']);
  }

  #[test]
  fn id_numeric_arrays_example() {
    let result = internal::id_numeric_arrays(NumericArrays {
      i32: vec![],
      i64: vec![],
      f64: vec![],
      u128: vec![],
    });
    assert_eq!(result, NumericArrays { i32: vec![], i64: vec![], f64: vec![], u128: vec![] });

    let result = internal::id_numeric_arrays(NumericArrays {
      i32: vec![1, 2, 3],
      i64: vec![4, 5, 6],
      f64: vec![7.0, 8.0, 9.0],
      u128: vec![10, 11, 12],
    });
    assert_eq!(
      result,
      NumericArrays {
        i32: vec![1, 2, 3],
        i64: vec![4, 5, 6],
        f64: vec![7.0, 8.0, 9.0],
        u128: vec![10, 11, 12],
      }
    );
  }
}
