use serde::{Deserialize, Serialize};

/// Models a closed set of database providers as a C-style enum.
/// In TS, the Rust C-style `enum` is typed as `enum`.
#[derive(PartialEq, Debug, Deserialize, Serialize)]
#[serde(tag = "_tag", content = "value", rename_all = "camelCase")]
pub enum Either {
  Ok(i32),
  Err(String),
}
