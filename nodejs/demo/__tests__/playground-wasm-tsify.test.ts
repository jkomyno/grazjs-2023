import { expect, describe, test } from 'vitest'
import * as wasm from '../wasm/playground_wasm_tsify'
import { toPromise } from './utils'

describe('playground-wasm-bindgen', () => {
  describe('functions', () => {
    test('u64 in Rust is bigint in TS', () => {
      expect(wasm.duplicate_biguint(1n)).toEqual(2n)

      // outside of the range of unsigned BigInt, but no error
      expect(wasm.duplicate_biguint(-1n)).toEqual(18446744073709551614n)
    })

    test('i64 in Rust is bigint in TS', () => {
      expect(wasm.duplicate_bigint(-1n)).toEqual(-2n)
    })

    test('u32 in Rust is number in TS', () => {
      expect(wasm.duplicate_uint(2)).toEqual(4)

      // outside of the range of unsigned 32-bit number, but no error
      expect(wasm.duplicate_uint(-2)).toEqual(4294967292)
    })

    test('i32 in Rust is number in TS', () => {
      expect(wasm.duplicate_int(-1)).toEqual(-2)
    })

    test('f64 in Rust is number in TS', () => {
      expect(wasm.duplicate_f64(-1.5)).toEqual(-3)
    })

    test('f32 in Rust is number in TS', () => {
      expect(wasm.duplicate_f32(-1.5)).toEqual(-3)
    })

    describe('C-style enum in Rust is enum in TS', () => {
      test('enum_to_string', () => {
        expect(wasm.enum_to_string('postgres')).toEqual('postgres')
        expect(wasm.enum_to_string('mysql')).toEqual('mysql')
        expect(wasm.enum_to_string('sqlite')).toEqual('sqlite')
      })

      test('enum_from_string', () => {
        expect(wasm.enum_from_string('postgres')).toEqual('postgres')
        expect(wasm.enum_from_string('mysql')).toEqual('mysql')
        expect(wasm.enum_from_string('sqlite')).toEqual('sqlite')
      })
    })

    describe('ADT-style enum in Rust is discrimated union in TS', () => {
      test('either_to_string', () => {
        expect(wasm.either_to_string({ _tag: 'ok', value: 1 })).toEqual('Ok(1)')
        expect(wasm.either_to_string({ _tag: 'err', value: 'empty' })).toEqual('Err(empty)')
      })

      test('either_to_string_with_invalid_input', () => {
        // @ts-expect-error
        expect(() => wasm.either_to_string('ok')).toThrow('`unwrap_throw` failed')
      })

      test('either_from_ok', () => {
        expect(wasm.either_from_ok(1)).toEqual({ _tag: 'ok', value: 1 })
      })

      test('either_from_err', () => {
        expect(wasm.either_from_err('empty')).toEqual({ _tag: 'err', value: 'empty' })
      })
    })

    describe('String (utf-8) in Rust is string (utf-16) in TS', () => {
      test('get_string_length', () => {
        expect(wasm.get_string_length('')).toEqual(0)
        expect(wasm.get_string_length('Node Congress')).toEqual(13)
  
        const stringWithEmoji = 'lol🚀'
        expect(wasm.get_string_length(stringWithEmoji)).toEqual(7)
        expect(stringWithEmoji.length).toEqual(5)
      })

      test('to_uppercase', () => {
        expect(wasm.to_uppercase('Node Congress')).toEqual('NODE CONGRESS')
      })
    })

    test('Option<i32> in Rust is number | undefined in TS', () => {
      expect(wasm.maybe_inc()).toEqual(undefined)
      expect(wasm.maybe_inc(undefined)).toEqual(undefined)
      expect(wasm.maybe_inc(1)).toEqual(2)
    })

    test('Result<i32, String> in Rust returns a number or throws a string in TS', async () => {
      expect(wasm.inc_or_fail(1)).toEqual(2)

      await expect(toPromise(() => wasm.inc_or_fail()))
        .rejects.toThrow('No value!')

      try {
        wasm.inc_or_fail()
      } catch (e) {
        expect(typeof(e)).toEqual('string') // not Error
      }
    })

    describe('scalars', () => {
      test('get_letter', () => {
        const scalars: wasm.Scalars = {
          n: 1,
          id: 1,
          letter: 'a',
          toggle: true,
        }
        expect(wasm.get_letter(scalars)).toEqual('a')
      })

      test('get_key_length', () => {
        const scalars: wasm.Scalars = {
          n: 1,
          id: 1,
          letter: 'a',
          toggle: true,
        }
        expect(wasm.get_key_length(scalars)).toEqual(4)
      })
    })

    test('BTreeMap<i32, i32> in Rust is Map<number, number> in TS', () => {
      expect(wasm.object_keys_as_string({ data: new Map([[1, 10], [5, 0]]) })).toEqual('1, 5')
    })

    describe('Vec<T> in Rust is T[] or byte array in TS', () => {
      test('get_u32_array_length', async () => {
        expect(wasm.get_u32_array_length(Uint32Array.from([1, 2, 3]))).toEqual(3)
        expect(wasm.get_u32_array_length(Uint32Array.from([-1]))).toEqual(1)
      })

      test('get_i32_array_length', () => {
        expect(wasm.get_i32_array_length(Int32Array.from([1, 2, 3]))).toEqual(3)
      })

      test('get_nested_array_length', () => {
        expect(wasm.get_nested_array_length({ data: [[1, 2], [3, 4]] })).toEqual(4)
      })
    })
  })
})
