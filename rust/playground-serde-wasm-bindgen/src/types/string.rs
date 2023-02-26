use serde::{Deserialize, Serialize};

/// Models a struct with a String member.
#[derive(Deserialize, Serialize)]
pub struct StringParams {
  pub id: String,
}
