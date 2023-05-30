import { expect, describe, test } from 'vitest'
import * as wasm from '../wasm/playground_wasm_bindgen'
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
        expect(wasm.enum_to_string(wasm.Provider.Postgres)).toEqual('postgres')
        expect(wasm.enum_to_string(wasm.Provider.MySQL)).toEqual('mysql')
        expect(wasm.enum_to_string(wasm.Provider.SQLite)).toEqual('sqlite')
      })

      test('enum_from_string', () => {
        expect(wasm.enum_from_string('postgres')).toEqual(wasm.Provider.Postgres)
        expect(wasm.enum_from_string('mysql')).toEqual(wasm.Provider.MySQL)
        expect(wasm.enum_from_string('sqlite')).toEqual(wasm.Provider.SQLite)
      })
    })

    describe('String (utf-8) in Rust is string (utf-16) in TS', () => {
      test('get_string_length', () => {
        expect(wasm.get_string_length('')).toEqual(0)
        expect(wasm.get_string_length('Graz.js')).toEqual(7)
  
        const stringWithEmoji = 'lol🚀'
        expect(wasm.get_string_length(stringWithEmoji)).toEqual(7)
        expect(stringWithEmoji.length).toEqual(5)
      })

      test('to_uppercase', () => {
        expect(wasm.toUpperCase('Graz.js')).toEqual('GRAZ.JS')
      })

      test('n_to_string', async () => {
        expect(wasm.n_to_string(256n)).toEqual('256')

        await expect(toPromise(() => wasm.n_to_string('a' as unknown as bigint)))
          .rejects.toThrow('Cannot convert a to a BigInt')
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
      test('it needs a class instance', async () => {
        const scalars: wasm.Scalars = {
          free: () => {},
          n: 1,
          id: 1n,
          letter: 'a',
          toggle: true,
        }

        await expect(toPromise(() => wasm.get_letter(scalars)))
          .rejects.toThrow('expected instance of Scalars')
      })

      test('get_letter', () => {
        const scalars = new wasm.Scalars(/* n */ 1, /* id */ 1n, /* letter */ 'asd', /* toggle */ true)
        expect(wasm.get_letter(scalars)).toEqual('a')
      })

      test('get_key_length', () => {
        const scalars = new wasm.Scalars(/* n */ 1, /* id */ 1n, /* letter */ 'asd', /* toggle */ true)
        expect(wasm.get_key_length(scalars)).toEqual(4)
      })
    })
  })
})
