use wasm_bindgen::prelude::wasm_bindgen;

/// Models a struct with integer arrays as members.
#[wasm_bindgen(getter_with_clone)]
pub struct NumericArrays {
  /// In TS, it's typed as `Int32Array`.
  pub int32: Vec<i32>,

  /// In TS, it's typed as `Uint32Array`.
  pub uint32: Vec<u32>,

  /// In TS, it's typed as `BigUint64Array`.
  pub uint64: Vec<u64>,

  /// In TS, it's typed as `BigInt64Array`.
  pub int64: Vec<i64>,

  /// In TS, it's typed as `Float32Array`.
  pub float: Vec<f32>,

  /// In TS, it's typed as `Float64Array`.
  pub double: Vec<f64>,
}
