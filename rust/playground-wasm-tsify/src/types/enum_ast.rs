use serde::{Deserialize, Serialize};
use tsify::Tsify;

/// Models a closed set of database providers as a C-style enum.
/// In TS, the Rust C-style `enum` is typed as `enum`.
#[derive(Debug, PartialEq, Serialize, Deserialize, Tsify)]
#[serde(tag = "_tag", content = "value", rename_all = "camelCase")]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub enum Either {
  Ok(i32),
  Err(String),
}
