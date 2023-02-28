use serde::{Deserialize, Serialize};
use tsify::Tsify;

/// Models a struct with a String member.
#[derive(Serialize, Deserialize, Tsify)]
#[serde(rename_all = "camelCase")]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct StringParams {
  /// In TS, the Rust `String` is typed as `string`.
  pub id: String,
}
