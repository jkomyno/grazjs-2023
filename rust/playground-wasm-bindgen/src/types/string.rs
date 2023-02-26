use wasm_bindgen::prelude::wasm_bindgen;

/// Models a struct with a String member.
#[wasm_bindgen(getter_with_clone)]
pub struct StringParams {
  /// In TS, the Rust `String` is typed as `string`.
  pub id: String,
}
