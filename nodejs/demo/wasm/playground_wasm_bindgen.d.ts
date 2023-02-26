/* tslint:disable */
/* eslint-disable */
/**
* Given a `Scalars` instance, return its `letter` member.
* In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
* @param {Scalars} params
* @returns {string}
*/
export function get_letter(params: Scalars): string;
/**
* Given a `Scalars` instance, return the number of its members.
* @param {Scalars} params
* @returns {number}
*/
export function get_key_length(params: Scalars): number;
/**
* Given a Vec<u32> vector, return its length.
* In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
* @param {number | undefined} x
* @returns {number}
*/
export function inc_or_fail(x?: number): number;
/**
* Given a `Provider` C-style enum instance, return its human-friendly label.
* @param {number} provider
* @returns {string}
*/
export function enum_to_string(provider: number): string;
/**
* Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
* @param {string} label
* @returns {number}
*/
export function enum_from_string(label: string): number;
/**
* Given an `OptionalParams` instance, return its `int32` member incremented by 1, or None.
* In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
* @param {number | undefined} x
* @returns {number | undefined}
*/
export function maybe_inc(x?: number): number | undefined;
/**
* Given a Vec<u32> vector, return its length.
* In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
* @param {Uint32Array} x
* @returns {number}
*/
export function get_u32_array_length(x: Uint32Array): number;
/**
* Given a Vec<i32> vector, return its length.
* In TS, the Rust `Vec<i32>` is typed as `Int32Array`.
* @param {Int32Array} x
* @returns {number}
*/
export function get_i32_array_length(x: Int32Array): number;
/**
* Given an unsigned 64-bit number, return the number multiplied by two.
* In TS, the Rust `u64` is typed as `bigint`.
* @param {bigint} x
* @returns {bigint}
*/
export function duplicate_biguint(x: bigint): bigint;
/**
* Given a signed 64-bit number, return the number multiplied by two.
* In TS, the Rust `i64` is typed as `bigint`.
* @param {bigint} x
* @returns {bigint}
*/
export function duplicate_bigint(x: bigint): bigint;
/**
* Given an unsigned 32-bit number, return the number multiplied by two.
* In TS, the Rust `u32` is typed as `bigint`.
* @param {number} x
* @returns {number}
*/
export function duplicate_uint(x: number): number;
/**
* Given a signed 32-bit number, return the number multiplied by two.
* In TS, the Rust `i32` is typed as `bigint`.
* @param {number} x
* @returns {number}
*/
export function duplicate_int(x: number): number;
/**
* Given a double number, return the number multiplied by two.
* In TS, the Rust `f64` is typed as `number`.
* @param {number} x
* @returns {number}
*/
export function duplicate_f64(x: number): number;
/**
* Given a float number, return the number multiplied by two.
* In TS, the Rust `f32` is typed as `number`.
* @param {number} x
* @returns {number}
*/
export function duplicate_f32(x: number): number;
/**
* Given a string, return its length.
* In TS, the Rust `String` is typed as `string`.
* @param {string} x
* @returns {number}
*/
export function get_string_length(x: string): number;
/**
* Given a string, return its length.
* In TS, the Rust `String` is typed as `string`.
* @param {StringParams} x
* @returns {number}
*/
export function get_string_length_from_params(x: StringParams): number;
/**
* Given a string, return the same string in uppercase.
* In TS, the Rust `String` is typed as `string`.
* @param {string} x
* @returns {string}
*/
export function to_uppercase(x: string): string;
/**
* Models a closed set of database providers as a C-style enum.
* In TS, the Rust C-style `enum` is typed as `enum`.
*/
export enum Provider {
  Postgres = 0,
  MySQL = 1,
  SQLite = 2,
}
/**
* Models a struct with integer arrays as members.
*/
export class NumericArrays {
  free(): void;
/**
* In TS, it's typed as `Float64Array`.
*/
  double: Float64Array;
/**
* In TS, it's typed as `Float32Array`.
*/
  float: Float32Array;
/**
* In TS, it's typed as `Int32Array`.
*/
  int32: Int32Array;
/**
* In TS, it's typed as `BigInt64Array`.
*/
  int64: BigInt64Array;
/**
* In TS, it's typed as `Uint32Array`.
*/
  uint32: Uint32Array;
/**
* In TS, it's typed as `BigUint64Array`.
*/
  uint64: BigUint64Array;
}
/**
* Models an object with an optional numeric field.
*/
export class OptionalParams {
  free(): void;
/**
* Creates a new `OptionalParams` instance.
* In TS, this becomes the constructor of the `OptionalParams` class.
* Defining this constructor is necessary if you want to pass a `OptionalParams` instance to a Rust function
* without throwing a `null pointer passed to rust` error.
* @param {number | undefined} int32
*/
  constructor(int32?: number);
/**
* In TS, the Rust `Option<i32>` is typed as `number | undefined`.
*/
  int32?: number;
}
/**
* Models a struct with scalar members.
*/
export class Scalars {
  free(): void;
/**
* Creates a new `Scalars` instance.
* In TS, this becomes the constructor of the `Scalars` class.
* Defining this constructor is necessary if you want to pass a `Scalars` instance to a Rust function
* without throwing a `null pointer passed to rust` error.
* @param {number} n
* @param {bigint} id
* @param {string} letter
* @param {boolean} toggle
*/
  constructor(n: number, id: bigint, letter: string, toggle: boolean);
/**
* In TS, the Rust `u64` is typed as `number`.
*/
  id: bigint;
/**
* In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
*/
  letter: string;
/**
* In TS, the Rust `u32` is typed as `number`.
*/
  n: number;
/**
* In TS, the Rust `bool` is typed as `boolean`.
*/
  toggle: boolean;
}
/**
* Models a struct with a String member.
*/
export class StringParams {
  free(): void;
/**
* In TS, the Rust `String` is typed as `string`.
*/
  id: string;
}
