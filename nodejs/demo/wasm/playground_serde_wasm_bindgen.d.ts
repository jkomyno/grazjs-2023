/* tslint:disable */
/* eslint-disable */
/**
* Given a Vec<u32> vector, return its length.
* @param {any} x
* @returns {any}
*/
export function get_u32_array_length(x: any): any;
/**
* Given a Vec<i32> vector, return its length.
* @param {any} x
* @returns {any}
*/
export function get_i32_array_length(x: any): any;
/**
* Given a Vec<String> vector, return its length.
* @param {any} x
* @returns {any}
*/
export function get_nested_array_length(x: any): any;
/**
* Given a Vec<String> vector, return its length.
* @param {any} x
* @returns {any}
*/
export function get_string_array_length(x: any): any;
/**
* Given a `Scalars` instance, return the labels of its keys.
* @param {any} params
* @returns {any}
*/
export function get_keys(params: any): any;
/**
* Given a Vec<bool> vector, return a copy of itself.
* @param {any} x
* @returns {any}
*/
export function id_vec_bool(x: any): any;
/**
* Given a Vec<char> vector, return a copy of itself.
* @param {any} x
* @returns {any}
*/
export function id_vec_char(x: any): any;
/**
* Given a `NumericArrays` instance, return a copy of itself.
* @param {any} x
* @returns {any}
*/
export function id_numeric_arrays(x: any): any;
/**
* Given a `Scalars` instance, return its `letter` member.
* @param {any} params
* @returns {any}
*/
export function get_letter(params: any): any;
/**
* Given a `Scalars` instance, return the number of its members.
* @param {any} params
* @returns {any}
*/
export function get_key_length(params: any): any;
/**
* Given a string, return its length.
* In TS, the Rust `String` is typed as `string`.
* @param {any} x
* @returns {any}
*/
export function get_string_length_from_params(x: any): any;
/**
* Given a `Provider` C-style enum instance, return its human-friendly label.
* @param {any} either_js
* @returns {any}
*/
export function either_to_string(either_js: any): any;
/**
* Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
* @param {any} ok_js
* @returns {any}
*/
export function either_from_ok(ok_js: any): any;
/**
* @param {any} err_js
* @returns {any}
*/
export function either_from_err(err_js: any): any;
/**
* Given an unsigned 64-bit number, return the number multiplied by two.
* In TS, the Rust `u64` is typed as `bigint`.
* @param {any} x
* @returns {any}
*/
export function duplicate_biguint(x: any): any;
/**
* Given a signed 64-bit number, return the number multiplied by two.
* In TS, the Rust `i64` is typed as `bigint`.
* @param {any} x
* @returns {any}
*/
export function duplicate_bigint(x: any): any;
/**
* Given an unsigned 32-bit number, return the number multiplied by two.
* In TS, the Rust `u32` is typed as `bigint`.
* @param {any} x
* @returns {any}
*/
export function duplicate_uint(x: any): any;
/**
* Given a signed 32-bit number, return the number multiplied by two.
* In TS, the Rust `i32` is typed as `bigint`.
* @param {any} x
* @returns {any}
*/
export function duplicate_int(x: any): any;
/**
* Given a double number, return the number multiplied by two.
* In TS, the Rust `f64` is typed as `number`.
* @param {any} x
* @returns {any}
*/
export function duplicate_f64(x: any): any;
/**
* Given a float number, return the number multiplied by two.
* In TS, the Rust `f32` is typed as `number`.
* @param {any} x
* @returns {any}
*/
export function duplicate_f32(x: any): any;
/**
* Given a BTreeMap<i32, i32>, return its keys separated by a comma.
* @param {any} x
* @returns {any}
*/
export function object_keys_as_string(x: any): any;
/**
* Given an `OptionalParams` instance, return its `int32` member incremented by 1, or None.
* @param {any} x
* @returns {any}
*/
export function maybe_inc(x: any): any;
/**
* Given an optional integer, increment it or throw.
* @param {any} x
* @returns {any}
*/
export function inc_or_fail(x: any): any;
