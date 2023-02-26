use serde::{Deserialize, Serialize};

/// Models a struct with integer arrays as members.
#[derive(Debug, PartialEq, Deserialize, Serialize)]
pub struct NumericArrays {
  pub i32: Vec<i32>,
  pub i64: Vec<i64>,
  pub f64: Vec<f64>,
  pub u128: Vec<u128>,
}
