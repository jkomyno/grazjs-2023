use wasm_bindgen::prelude::wasm_bindgen;

/// Models an object with an optional numeric field.
#[wasm_bindgen]
pub struct OptionalParams {
  /// In TS, the Rust `Option<i32>` is typed as `number | undefined`.
  pub int32: Option<i32>,
}

#[wasm_bindgen]
impl OptionalParams {
  /// Creates a new `OptionalParams` instance.
  /// In TS, this becomes the constructor of the `OptionalParams` class.
  /// Defining this constructor is necessary if you want to pass a `OptionalParams` instance to a Rust function
  /// without throwing a `null pointer passed to rust` error.
  #[wasm_bindgen(constructor)]
  pub fn new(int32: Option<i32>) -> Self {
    Self { int32 }
  }
}
