/* tslint:disable */
/* eslint-disable */
/**
* Given a Vec<u32> vector, return its length.
* In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
* @param {number | undefined} x
* @returns {number}
*/
export function inc_or_fail(x?: number): number;
/**
* Given a `Provider` C-style enum instance, return its human-friendly label.
* @param {Provider} provider
* @returns {string}
*/
export function enum_to_string(provider: Provider): string;
/**
* Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
* @param {string} label
* @returns {Provider}
*/
export function enum_from_string(label: string): Provider;
/**
* Given an `Either` ADT enum instance, return its human-friendly label.
* @param {Either} either
* @returns {string}
*/
export function either_to_string(either: Either): string;
/**
* Given an `Either` "ok" branch, construct its relative `Either` ADT enum instance.
* @param {number} ok
* @returns {Either}
*/
export function either_from_ok(ok: number): Either;
/**
* Given an `Either` "err" branch, construct its relative `Either` ADT enum instance.
* @param {string} err
* @returns {Either}
*/
export function either_from_err(err: string): Either;
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
* Given a `Scalars` instance, return the labels of its keys.
* @param {Scalars} _params
* @returns {VecData}
*/
export function get_keys(_params: Scalars): VecData;
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
* Given a wrapper over a Vec<Vec<i32>> vector, return its length.
* @param {MatrixDataI32} x
* @returns {number}
*/
export function get_nested_array_length(x: MatrixDataI32): number;
/**
* Given a wrapper over a Vec<String> vector, return its length.
* @param {VecString} x
* @returns {number}
*/
export function get_string_array_length(x: VecString): number;
/**
* Given a wrapped BTreeMap<i32, i32>, return its keys separated by a comma.
* @param {I32TreeMap} x
* @returns {string}
*/
export function object_keys_as_string(x: I32TreeMap): string;
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
export type Provider = "postgres" | "mysql" | "sqlite";

export interface OptionalParams {
    int32: number | undefined;
}

export type MatrixDataI32 = MatrixData<number>;

export interface MatrixData<T> {
    data: T[][];
}

export type VecBool = VecData<boolean>;

export type VecString = VecData<string>;

export interface VecData<T> {
    data: T[];
}

export interface NumericArrays {
    int32: number[];
    uint32: number[];
    uint64: number[];
    int64: number[];
    float: number[];
    double: number[];
}

export interface StringParams {
    id: string;
}

export interface Scalars {
    n: number;
    id: number;
    letter: string;
    toggle: boolean;
}

export interface VecString {
    data: string[];
}

export interface MatrixDataI32 {
    data: number[][];
}

export type Either = { _tag: "ok"; value: number } | { _tag: "err"; value: string };

export interface I32TreeMap {
    data: Map<number, number>;
}

