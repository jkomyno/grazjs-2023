use serde::{Deserialize, Serialize};

/// Models a struct with scalar members.
#[derive(Deserialize, Serialize)]
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
