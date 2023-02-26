use wasm_bindgen::prelude::wasm_bindgen;

/// Models a struct with scalar members.
#[wasm_bindgen]
pub struct Scalars {
  /// In TS, the Rust `u32` is typed as `number`.
  pub n: u32,

  /// In TS, the Rust `u64` is typed as `number`.
  pub id: u64,

  /// In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
  pub letter: char,

  /// In TS, the Rust `bool` is typed as `boolean`.
  pub toggle: bool,
}

#[wasm_bindgen]
impl Scalars {
  /// Creates a new `Scalars` instance.
  /// In TS, this becomes the constructor of the `Scalars` class.
  /// Defining this constructor is necessary if you want to pass a `Scalars` instance to a Rust function
  /// without throwing a `null pointer passed to rust` error.
  #[wasm_bindgen(constructor)]
  pub fn new(n: u32, id: u64, letter: char, toggle: bool) -> Self {
    Self { n, id, letter, toggle }
  }
}
