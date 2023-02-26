use serde::Serialize;
use wasm_bindgen::JsValue;

pub fn to_js<T>(value: &T) -> Result<JsValue, serde_wasm_bindgen::Error>
where
  T: Serialize + ?Sized,
{
  serde_wasm_bindgen::to_value(&value)
}

pub fn from_js<T: serde::de::DeserializeOwned>(
  value: JsValue,
) -> Result<T, serde_wasm_bindgen::Error> {
  serde_wasm_bindgen::from_value(value)
}
