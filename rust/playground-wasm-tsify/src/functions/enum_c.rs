use std::str::FromStr;

use crate::types::enum_c::Provider;
use wasm_bindgen::prelude::wasm_bindgen;

/// Given a `Provider` C-style enum instance, return its human-friendly label.
#[wasm_bindgen]
pub fn enum_to_string(provider: Provider) -> String {
  match provider {
    Provider::Postgres => "postgres",
    Provider::MySQL => "mysql",
    Provider::SQLite => "sqlite",
  }
  .to_owned()
}

/// Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
#[wasm_bindgen]
pub fn enum_from_string(label: String) -> Result<Provider, String> {
  Provider::from_str(&label)
}

#[cfg(test)]
mod tests {
  use super::*;

  #[test]
  fn enum_to_string_example() {
    let result = enum_to_string(Provider::Postgres);
    assert_eq!(result, "postgres");

    let result = enum_to_string(Provider::MySQL);
    assert_eq!(result, "mysql");

    let result = enum_to_string(Provider::SQLite);
    assert_eq!(result, "sqlite");
  }

  #[test]
  fn enum_from_string_example() {
    let result = enum_from_string("postgres".to_owned());
    assert_eq!(result.unwrap(), Provider::Postgres);

    let result = enum_from_string("mysql".to_owned());
    assert_eq!(result.unwrap(), Provider::MySQL);

    let result = enum_from_string("sqlite".to_owned());
    assert_eq!(result.unwrap(), Provider::SQLite);

    let result = enum_from_string("lmao".to_owned());
    assert_eq!(result.unwrap_err(), "Unknown provider: lmao".to_owned());
  }
}
