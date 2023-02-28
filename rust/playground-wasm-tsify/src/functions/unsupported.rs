use crate::types::scalars::Scalars;
use wasm_bindgen::prelude::wasm_bindgen;

/// Given a Vec<Vec<i32>> vector, return its length.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `Vec<i32>: JsObject` is not satisfied
///   --> wasm-bindgen-playground/src/functions/unsupported.rs:27:1
///    |
/// 27 | #[wasm_bindgen]
///    | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `Vec<i32>`
///    |
///    = help: the following other types implement trait `FromWasmAbi`:
///              Box<[JsValue]>
///              Box<[T]>
///              Box<[f32]>
///              Box<[f64]>
///              Box<[i16]>
///              Box<[i32]>
///              Box<[i64]>
///              Box<[i8]>
///            and 6 others
///    = note: required for `Box<[Vec<i32>]>` to implement `FromWasmAbi`
///    = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn get_nested_array_length(x: Vec<Vec<i32>>) -> usize {
  x.iter().flatten().count()
}

/// Given a Vec<String> vector, return its length.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `String: JsObject` is not satisfied
///   --> wasm-bindgen-playground/src/functions/unsupported.rs:55:1
///    |
/// 55 | #[wasm_bindgen]
///    | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `String`
///    |
///    = help: the following other types implement trait `FromWasmAbi`:
///              Box<[JsValue]>
///              Box<[T]>
///              Box<[f32]>
///              Box<[f64]>
///              Box<[i16]>
///              Box<[i32]>
///              Box<[i64]>
///              Box<[i8]>
///            and 6 others
///    = note: required for `Box<[String]>` to implement `FromWasmAbi`
///    = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn get_string_array_length(x: Vec<String>) -> usize {
  x.len()
}

/// Given a `Scalars` instance, return the labels of its keys.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `String: JsObject` is not satisfied
///   --> wasm-bindgen-playground/src/functions/unsupported.rs:83:1
///    |
/// 93 | #[wasm_bindgen]
///    | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `String`
///    |
///    = help: the following other types implement trait `IntoWasmAbi`:
///              Box<[JsValue]>
///              Box<[T]>
///              Box<[f32]>
///              Box<[f64]>
///              Box<[i16]>
///              Box<[i32]>
///              Box<[i64]>
///              Box<[i8]>
///            and 6 others
///    = note: required for `Box<[String]>` to implement `IntoWasmAbi`
///    = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn get_keys(_params: Scalars) -> Vec<String> {
  vec!["n", "id", "letter", "toggle"].into_iter().map(|x| x.to_owned()).collect()
}

/// Given a Vec<bool> vector, return itself.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `bool: JsObject` is not satisfied
///    --> playground-wasm-bindgen/src/functions/unsupported.rs:111:1
///     |
/// 111 | #[wasm_bindgen]
///     | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `bool`
///     |
///     = help: the following other types implement trait `FromWasmAbi`:
///               Box<[JsValue]>
///               Box<[T]>
///               Box<[f32]>
///               Box<[f64]>
///               Box<[i16]>
///               Box<[i32]>
///               Box<[i64]>
///               Box<[i8]>
///             and 6 others
///     = note: required for `Box<[bool]>` to implement `FromWasmAbi`
///     = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn id_vec_bool(x: Vec<bool>) -> Vec<bool> {
  x
}

/// Given a Vec<char> vector, return itself.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `char: JsObject` is not satisfied
///    --> playground-wasm-bindgen/src/functions/unsupported.rs:139:1
///     |
/// 139 | #[wasm_bindgen]
///     | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `char`
///     |
///     = help: the following other types implement trait `FromWasmAbi`:
///               Box<[JsValue]>
///               Box<[T]>
///               Box<[f32]>
///               Box<[f64]>
///               Box<[i16]>
///               Box<[i32]>
///               Box<[i64]>
///               Box<[i8]>
///             and 6 others
///     = note: required for `Box<[char]>` to implement `FromWasmAbi`
///     = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn id_vec_char(x: Vec<char>) -> Vec<char> {
  x
}

/// Given a wrapper over a Vec<char> vector, return itself.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `char: JsObject` is not satisfied
///    --> playground-wasm-tsify/src/functions/unsupported.rs:167:1
///     |
/// 167 | #[wasm_bindgen]
///     | ^^^^^^^^^^^^^^^ the trait `JsObject` is not implemented for `char`
///     |
///     = help: the following other types implement trait `JsObject`:
///               js_sys::Array
///               js_sys::ArrayBuffer
///               js_sys::AsyncIterator
///               js_sys::BigInt
///               js_sys::BigInt64Array
///               js_sys::BigUint64Array
///               js_sys::Boolean
///               js_sys::DataView
///             and 54 others
///     = note: required for `Box<[char]>` to implement `IntoWasmAbi`
///     = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn id_vec_char(x: VecData<char>) -> Vec<char> {
  x
}

/// Given a BTreeMap<i32, i32>, return its keys separated by a comma.
/// Fails with:
///
/// ```console
/// error[E0277]: the trait bound `BTreeMap<i32, i32>: FromWasmAbi` is not satisfied
///    --> playground-wasm-tsify/src/functions/unsupported.rs:194:1
///     |
/// 194 | #[wasm_bindgen]
///     | ^^^^^^^^^^^^^^^ the trait `FromWasmAbi` is not implemented for `BTreeMap<i32, i32>`
///     |
///     = help: the following other types implement trait `FromWasmAbi`:
///               *const T
///               *mut T
///               Box<[JsValue]>
///               Box<[T]>
///               Box<[f32]>
///               Box<[f64]>
///               Box<[i16]>
///               Box<[i32]>
///             and 105 others
///     = note: this error originates in the attribute macro `wasm_bindgen`
/// ```
#[wasm_bindgen]
pub fn object_keys_as_string(x: std::collections::BTreeMap<i32, i32>) -> String {
  x.keys().map(|key| format!("{}", key)).collect::<Vec<String>>().join(", ")
}
