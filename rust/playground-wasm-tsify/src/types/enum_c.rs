use serde::{Deserialize, Serialize};
use std::str::FromStr;
use tsify::Tsify;

/// Models a closed set of database providers as a C-style enum.
/// In TS, the Rust C-style `enum` is typed as `enum`.
#[derive(Debug, PartialEq, Serialize, Deserialize, Tsify)]
#[serde(rename_all = "lowercase")]
#[tsify(into_wasm_abi, from_wasm_abi)]
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
