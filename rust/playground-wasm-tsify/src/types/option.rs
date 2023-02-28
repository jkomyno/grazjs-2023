use serde::{Deserialize, Serialize};
use tsify::Tsify;

/// Models an object with an optional numeric field.
#[derive(Serialize, Deserialize, Tsify)]
#[serde(rename_all = "camelCase")]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct OptionalParams {
  /// In TS, the Rust `Option<i32>` is typed as `number | undefined`.
  pub int32: Option<i32>,
}
