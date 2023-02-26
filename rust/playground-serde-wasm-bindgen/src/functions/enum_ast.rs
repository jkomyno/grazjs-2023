use crate::types::enum_ast::Either;
use wasm_bindgen::{prelude::wasm_bindgen, JsValue};

use super::utils;

mod internal {
  use super::*;

  pub fn either_to_string(either: Either) -> String {
    match either {
      Either::Ok(ok) => format!("Ok({})", ok),
      Either::Err(err) => format!("Err({})", err),
    }
  }

  pub fn either_from_ok(ok: i32) -> Either {
    Either::Ok(ok)
  }

  pub fn either_from_err(err: String) -> Either {
    Either::Err(err)
  }
}

/// Given a `Provider` C-style enum instance, return its human-friendly label.
#[wasm_bindgen]
pub fn either_to_string(either_js: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let either: Either = utils::from_js(either_js)?;
  let result = internal::either_to_string(either);
  utils::to_js(&result)
}

/// Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
#[wasm_bindgen]
pub fn either_from_ok(ok_js: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let ok: i32 = utils::from_js(ok_js)?;
  let result = internal::either_from_ok(ok);
  utils::to_js(&result)
}

#[wasm_bindgen]
pub fn either_from_err(err_js: JsValue) -> Result<JsValue, serde_wasm_bindgen::Error> {
  let err: String = utils::from_js(err_js)?;
  let result = internal::either_from_err(err);
  utils::to_js(&result)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn either_to_string_example() {
    let result = internal::either_to_string(Either::Ok(1));
    assert_eq!(result, "Ok(1)");

    let result = internal::either_to_string(Either::Err("empty".to_owned()));
    assert_eq!(result, "Err(empty)");
  }

  #[test]
  fn either_from_ok_example() {
    let result = internal::either_from_ok(1);
    assert_eq!(result, Either::Ok(1));

    let result = internal::either_from_err("empty".to_owned());
    assert_eq!(result, Either::Err("empty".to_owned()));
  }
}
