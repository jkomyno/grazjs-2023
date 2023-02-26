import { describe, test, expect, assertType, expectTypeOf } from 'vitest'
import * as wasm from '../wasm/playground_wasm_bindgen'

describe('playground-wasm-bindgen types', () => {
  test('scalars - as object', () => {
    const scalars: wasm.Scalars = {
      free: () => {},
      n: 1,
      id: 1n,
      letter: 'a',
      toggle: true,
    }

    assertType(scalars)
  })

  test('scalars - as class', () => {
    const scalars = new wasm.Scalars(/* n */ 1, /* id */ 1n, /* letter */ 'a', /* toggle */ true)

    assertType(scalars)
  })

  test('string', () => {
    const stringParams: wasm.StringParams = {
      free: () => {},
      id: 'some-id',
    }

    assertType(stringParams)
  })

  test('option', () => {
    const optionalParamsUndefined: wasm.OptionalParams = {
      free: () => {},
    }
    assertType(optionalParamsUndefined)

    const optionalParams: wasm.OptionalParams = {
      free: () => {},
      int32: 1
    }
    assertType(optionalParams)
  })

  test('enums (C style)', () => {
    expectTypeOf(wasm.Provider.Postgres).toMatchTypeOf(0)
    expect(wasm.Provider.Postgres).toEqual(0)
  })
})
