use crate::types::enum_ast::Either;
use wasm_bindgen::prelude::wasm_bindgen;

/// Given an `Either` ADT enum instance, return its human-friendly label.
#[wasm_bindgen]
pub fn either_to_string(either: Either) -> String {
  match either {
    Either::Ok(ok) => format!("Ok({})", ok),
    Either::Err(err) => format!("Err({})", err),
  }
}

/// Given an `Either` "ok" branch, construct its relative `Either` ADT enum instance.
#[wasm_bindgen]
pub fn either_from_ok(ok: i32) -> Either {
  Either::Ok(ok)
}

/// Given an `Either` "err" branch, construct its relative `Either` ADT enum instance.
#[wasm_bindgen]
pub fn either_from_err(err: String) -> Either {
  Either::Err(err)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn either_to_string_example() {
    let result = either_to_string(Either::Ok(1));
    assert_eq!(result, "Ok(1)");

    let result = either_to_string(Either::Err("empty".to_owned()));
    assert_eq!(result, "Err(empty)");
  }

  #[test]
  fn either_from_ok_example() {
    let result = either_from_ok(1);
    assert_eq!(result, Either::Ok(1));

    let result = either_from_err("empty".to_owned());
    assert_eq!(result, Either::Err("empty".to_owned()));
  }
}
