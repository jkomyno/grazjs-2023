use crate::types::{scalars::Scalars, vec::VecData};
use serde::{Deserialize, Serialize};
use std::any::Any;
use tsify::Tsify;
use wasm_bindgen::prelude::wasm_bindgen;

/// Given a `Scalars` instance, return its `letter` member.
/// In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
#[wasm_bindgen]
pub fn get_letter(params: Scalars) -> char {
  params.letter
}

/// Given a `Scalars` instance, return the number of its members.
#[wasm_bindgen]
pub fn get_key_length(params: Scalars) -> usize {
  let keys: Vec<Box<dyn Any>> = vec![
    params.n.to_boxed_any(),
    params.id.to_boxed_any(),
    params.letter.to_boxed_any(),
    params.toggle.to_boxed_any(),
  ];
  keys.len()
}

/// Given a `Scalars` instance, return the labels of its keys.
#[wasm_bindgen]
pub fn get_keys(_params: Scalars) -> VecData<String> {
  VecData { data: vec!["n", "id", "letter", "toggle"].into_iter().map(|x| x.to_owned()).collect() }
}

trait AnyValue: Any + Sized {
  fn to_boxed_any(self) -> Box<dyn Any> {
    Box::new(self)
  }
}

impl AnyValue for u32 {}
impl AnyValue for u64 {}
impl AnyValue for char {}
impl AnyValue for bool {}
