use std::str::FromStr;
use wasm_bindgen::prelude::wasm_bindgen;

/// Models a closed set of database providers as a C-style enum.
/// In TS, the Rust C-style `enum` is typed as `enum`.
#[derive(PartialEq, Debug)]
#[wasm_bindgen]
pub enum Provider {
  Postgres,
  MySQL,
  SQLite,
}

impl FromStr for Provider {
  type Err = String;

  fn from_str(s: &str) -> Result<Self, Self::Err> {
    match s.to_lowercase().as_str() {
      "postgres" => Ok(Provider::Postgres),
      "mysql" => Ok(Provider::MySQL),
      "sqlite" => Ok(Provider::SQLite),
      _ => Err(format!("Unknown provider: {}", s)),
    }
  }
}
