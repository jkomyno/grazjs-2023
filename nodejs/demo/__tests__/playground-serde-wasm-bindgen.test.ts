import { expect, describe, test } from 'vitest'
import * as wasm from '../wasm/playground_serde_wasm_bindgen'
import { toPromise } from './utils'

/**
 * With serde-wasm-bindgen, every Wasm function leaks `any`s, and it thus not type-safe.
 */
describe('playground-serde-wasm-bindgen', () => {
  describe('functions', () => {
    test('u64 in Rust is bigint in TS', async () => {
      expect(wasm.duplicate_biguint(1n)).toEqual(2)

      await expect(toPromise(() => wasm.duplicate_biguint(-1n)))
        .rejects.toThrow(`Couldn't deserialize u64 from a BigInt outside u64::MIN..u64::MAX bounds`)

      await expect(toPromise(() => wasm.duplicate_biguint(-1)))
        .rejects.toThrow('invalid type: floating point `-1`, expected u64')
    })

    test('i64 in Rust is bigint in TS', () => {
      expect(wasm.duplicate_bigint(-1)).toEqual(-2)
    })

    test('u32 in Rust is number in TS', async () => {
      expect(wasm.duplicate_uint(2)).toEqual(4)

      await expect(toPromise(() => wasm.duplicate_uint(-2)))
        .rejects.toThrow('invalid type: floating point `-2`, expected u32')
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

    describe('ADT-style enum in Rust is discrimated union in TS', () => {
      test('either_to_string', () => {
        expect(wasm.either_to_string({ _tag: 'ok', value: 1 })).toEqual('Ok(1)')
        expect(wasm.either_to_string({ _tag: 'err', value: 'empty' })).toEqual('Err(empty)')
      })

      test('either_from_ok', () => {
        expect(wasm.either_from_ok(1)).toEqual({ _tag: 'ok', value: 1 })
      })

      test('either_from_err', () => {
        expect(wasm.either_from_err('empty')).toEqual({ _tag: 'err', value: 'empty' })
      })
    })

    describe('String (utf-8) in Rust is string (utf-16) in TS', () => {
      test('get_string_length_from_params', () => {
        expect(wasm.get_string_length_from_params({ id: '' })).toEqual(0)
        expect(wasm.get_string_length_from_params({ id: 'Graz.js' })).toEqual(7)
  
        const stringWithEmoji = 'lol🚀'
        expect(wasm.get_string_length_from_params({ id: stringWithEmoji })).toEqual(7)
        expect(stringWithEmoji.length).toEqual(5)
      })
    })

    test('Option<i32> in Rust is number | undefined in TS', () => {
      expect(wasm.maybe_inc(undefined)).toEqual(undefined)
      expect(wasm.maybe_inc(1)).toEqual(2)
    })

    test('Result<i32, String> in Rust returns a number or throws a string in TS', async () => {
      expect(wasm.inc_or_fail(1)).toEqual(2)

      await expect(toPromise(() => wasm.inc_or_fail(undefined)))
        .rejects.toThrow('No value!')

      try {
        wasm.inc_or_fail(undefined)
      } catch (e) {
        expect(typeof(e)).toEqual('string') // not Error
      }
    })

    test('BTreeMap<i32, i32> in Rust is Map<number, number> in TS', () => {
      expect(wasm.object_keys_as_string(new Map([[1, 10], [5, 0]]))).toEqual('1, 5')
    })

    describe('scalars', () => {
      const scalars = {
        n: 1,
        id: 1n,
        letter: 'a',
        toggle: true,
      }

      test('get_letter', () => {
        expect(wasm.get_letter(scalars)).toEqual('a')
      })

      test('get_key_length', () => {
        expect(wasm.get_key_length(scalars)).toEqual(4)
      })
    })

    describe('Vec<T> in Rust is T[] in TS', () => {
      test('get_u32_array_length', async () => {
        expect(wasm.get_u32_array_length([1, 2, 3])).toEqual(3)

        await expect(toPromise(() => wasm.get_u32_array_length([-1])))
          .rejects.toThrow('invalid type: floating point `-1`, expected u32')
      })

      test('get_i32_array_length', () => {
        expect(wasm.get_i32_array_length([1, 2, 3])).toEqual(3)
      })

      test('get_nested_array_length', () => {
        expect(wasm.get_nested_array_length([[1, 2], [3, 4]])).toEqual(4)
      })
    })
  })
})
