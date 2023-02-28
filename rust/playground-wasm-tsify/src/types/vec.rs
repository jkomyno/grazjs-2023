use serde::{Deserialize, Serialize};
use tsify::{declare, Tsify};

/// Models a struct with integer arrays as members.
#[derive(Serialize, Deserialize, Tsify)]
#[serde(rename_all = "camelCase")]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct NumericArrays {
  /// In TS, it's typed as `number[]`.
  pub int32: Vec<i32>,

  /// In TS, it's typed as `number[]`.
  pub uint32: Vec<u32>,

  /// In TS, it's typed as `number[]`.
  pub uint64: Vec<u64>,

  /// In TS, it's typed as `number[]`.
  pub int64: Vec<i64>,

  /// In TS, it's typed as `number[]`.
  pub float: Vec<f32>,

  /// In TS, it's typed as `number[]`.
  pub double: Vec<f64>,
}

#[derive(Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct VecData<T> {
  pub data: Vec<T>,
}

#[declare]
pub type VecString = VecData<String>;

#[declare]
pub type VecBool = VecData<bool>;

#[derive(Serialize, Deserialize, Tsify)]
#[tsify(into_wasm_abi, from_wasm_abi)]
pub struct MatrixData<T> {
  pub data: Vec<Vec<T>>,
}

#[declare]
pub type MatrixDataI32 = MatrixData<i32>;
