let imports = {};
imports['__wbindgen_placeholder__'] = module.exports;
let wasm;
const { TextDecoder, TextEncoder } = require(`util`);

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });

cachedTextDecoder.decode();

let cachedUint8Memory0 = null;

function getUint8Memory0() {
    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {
        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}

const heap = new Array(128).fill(undefined);

heap.push(undefined, null, true, false);

let heap_next = heap.length;

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

function _assertClass(instance, klass) {
    if (!(instance instanceof klass)) {
        throw new Error(`expected instance of ${klass.name}`);
    }
    return instance.ptr;
}
/**
* Given a `Scalars` instance, return its `letter` member.
* In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
* @param {Scalars} params
* @returns {string}
*/
module.exports.get_letter = function(params) {
    _assertClass(params, Scalars);
    var ptr0 = params.__destroy_into_raw();
    const ret = wasm.get_letter(ptr0);
    return String.fromCodePoint(ret);
};

/**
* Given a `Scalars` instance, return the number of its members.
* @param {Scalars} params
* @returns {number}
*/
module.exports.get_key_length = function(params) {
    _assertClass(params, Scalars);
    var ptr0 = params.__destroy_into_raw();
    const ret = wasm.get_key_length(ptr0);
    return ret >>> 0;
};

function isLikeNone(x) {
    return x === undefined || x === null;
}

let cachedInt32Memory0 = null;

function getInt32Memory0() {
    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {
        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);
    }
    return cachedInt32Memory0;
}

function getObject(idx) { return heap[idx]; }

function dropObject(idx) {
    if (idx < 132) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}
/**
* Given a Vec<u32> vector, return its length.
* In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
* @param {number | undefined} x
* @returns {number}
*/
module.exports.inc_or_fail = function(x) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.inc_or_fail(retptr, !isLikeNone(x), isLikeNone(x) ? 0 : x);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

/**
* Given a `Provider` C-style enum instance, return its human-friendly label.
* @param {number} provider
* @returns {string}
*/
module.exports.enum_to_string = function(provider) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.enum_to_string(retptr, provider);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
};

let WASM_VECTOR_LEN = 0;

let cachedTextEncoder = new TextEncoder('utf-8');

const encodeString = (typeof cachedTextEncoder.encodeInto === 'function'
    ? function (arg, view) {
    return cachedTextEncoder.encodeInto(arg, view);
}
    : function (arg, view) {
    const buf = cachedTextEncoder.encode(arg);
    view.set(buf);
    return {
        read: arg.length,
        written: buf.length
    };
});

function passStringToWasm0(arg, malloc, realloc) {

    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length);
        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len);

    const mem = getUint8Memory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }

    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3);
        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);
        const ret = encodeString(arg, view);

        offset += ret.written;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}
/**
* Given a `Provider` enum label, construct its relative `Provider` C-style enum instance.
* @param {string} label
* @returns {number}
*/
module.exports.enum_from_string = function(label) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(label, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.enum_from_string(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        var r2 = getInt32Memory0()[retptr / 4 + 2];
        if (r2) {
            throw takeObject(r1);
        }
        return r0 >>> 0;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

/**
* Given an `OptionalParams` instance, return its `int32` member incremented by 1, or None.
* In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
* @param {number | undefined} x
* @returns {number | undefined}
*/
module.exports.maybe_inc = function(x) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.maybe_inc(retptr, !isLikeNone(x), isLikeNone(x) ? 0 : x);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return r0 === 0 ? undefined : r1;
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
};

let cachedUint32Memory0 = null;

function getUint32Memory0() {
    if (cachedUint32Memory0 === null || cachedUint32Memory0.byteLength === 0) {
        cachedUint32Memory0 = new Uint32Array(wasm.memory.buffer);
    }
    return cachedUint32Memory0;
}

function passArray32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getUint32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* Given a Vec<u32> vector, return its length.
* In TS, the Rust `Vec<u32>` is typed as `Uint32Array`.
* @param {Uint32Array} x
* @returns {number}
*/
module.exports.get_u32_array_length = function(x) {
    const ptr0 = passArray32ToWasm0(x, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.get_i32_array_length(ptr0, len0);
    return ret >>> 0;
};

/**
* Given a Vec<i32> vector, return its length.
* In TS, the Rust `Vec<i32>` is typed as `Int32Array`.
* @param {Int32Array} x
* @returns {number}
*/
module.exports.get_i32_array_length = function(x) {
    const ptr0 = passArray32ToWasm0(x, wasm.__wbindgen_malloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.get_i32_array_length(ptr0, len0);
    return ret >>> 0;
};

function getArrayI32FromWasm0(ptr, len) {
    return getInt32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function getArrayU32FromWasm0(ptr, len) {
    return getUint32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

let cachedBigUint64Memory0 = null;

function getBigUint64Memory0() {
    if (cachedBigUint64Memory0 === null || cachedBigUint64Memory0.byteLength === 0) {
        cachedBigUint64Memory0 = new BigUint64Array(wasm.memory.buffer);
    }
    return cachedBigUint64Memory0;
}

function getArrayU64FromWasm0(ptr, len) {
    return getBigUint64Memory0().subarray(ptr / 8, ptr / 8 + len);
}

function passArray64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8);
    getBigUint64Memory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedBigInt64Memory0 = null;

function getBigInt64Memory0() {
    if (cachedBigInt64Memory0 === null || cachedBigInt64Memory0.byteLength === 0) {
        cachedBigInt64Memory0 = new BigInt64Array(wasm.memory.buffer);
    }
    return cachedBigInt64Memory0;
}

function getArrayI64FromWasm0(ptr, len) {
    return getBigInt64Memory0().subarray(ptr / 8, ptr / 8 + len);
}

let cachedFloat32Memory0 = null;

function getFloat32Memory0() {
    if (cachedFloat32Memory0 === null || cachedFloat32Memory0.byteLength === 0) {
        cachedFloat32Memory0 = new Float32Array(wasm.memory.buffer);
    }
    return cachedFloat32Memory0;
}

function getArrayF32FromWasm0(ptr, len) {
    return getFloat32Memory0().subarray(ptr / 4, ptr / 4 + len);
}

function passArrayF32ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 4);
    getFloat32Memory0().set(arg, ptr / 4);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}

let cachedFloat64Memory0 = null;

function getFloat64Memory0() {
    if (cachedFloat64Memory0 === null || cachedFloat64Memory0.byteLength === 0) {
        cachedFloat64Memory0 = new Float64Array(wasm.memory.buffer);
    }
    return cachedFloat64Memory0;
}

function getArrayF64FromWasm0(ptr, len) {
    return getFloat64Memory0().subarray(ptr / 8, ptr / 8 + len);
}

function passArrayF64ToWasm0(arg, malloc) {
    const ptr = malloc(arg.length * 8);
    getFloat64Memory0().set(arg, ptr / 8);
    WASM_VECTOR_LEN = arg.length;
    return ptr;
}
/**
* Given an unsigned 64-bit number, return the number multiplied by two.
* In TS, the Rust `u64` is typed as `bigint`.
* @param {bigint} x
* @returns {bigint}
*/
module.exports.duplicate_biguint = function(x) {
    const ret = wasm.duplicate_bigint(x);
    return BigInt.asUintN(64, ret);
};

/**
* Given a signed 64-bit number, return the number multiplied by two.
* In TS, the Rust `i64` is typed as `bigint`.
* @param {bigint} x
* @returns {bigint}
*/
module.exports.duplicate_bigint = function(x) {
    const ret = wasm.duplicate_bigint(x);
    return ret;
};

/**
* Given an unsigned 32-bit number, return the number multiplied by two.
* In TS, the Rust `u32` is typed as `bigint`.
* @param {number} x
* @returns {number}
*/
module.exports.duplicate_uint = function(x) {
    const ret = wasm.duplicate_int(x);
    return ret >>> 0;
};

/**
* Given a signed 32-bit number, return the number multiplied by two.
* In TS, the Rust `i32` is typed as `bigint`.
* @param {number} x
* @returns {number}
*/
module.exports.duplicate_int = function(x) {
    const ret = wasm.duplicate_int(x);
    return ret;
};

/**
* Given a double number, return the number multiplied by two.
* In TS, the Rust `f64` is typed as `number`.
* @param {number} x
* @returns {number}
*/
module.exports.duplicate_f64 = function(x) {
    const ret = wasm.duplicate_f64(x);
    return ret;
};

/**
* Given a float number, return the number multiplied by two.
* In TS, the Rust `f32` is typed as `number`.
* @param {number} x
* @returns {number}
*/
module.exports.duplicate_f32 = function(x) {
    const ret = wasm.duplicate_f32(x);
    return ret;
};

/**
* Given a string, return its length.
* In TS, the Rust `String` is typed as `string`.
* @param {string} x
* @returns {number}
*/
module.exports.get_string_length = function(x) {
    const ptr0 = passStringToWasm0(x, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
    const len0 = WASM_VECTOR_LEN;
    const ret = wasm.get_string_length(ptr0, len0);
    return ret >>> 0;
};

/**
* Given a string, return its length.
* In TS, the Rust `String` is typed as `string`.
* @param {StringParams} x
* @returns {number}
*/
module.exports.get_string_length_from_params = function(x) {
    _assertClass(x, StringParams);
    var ptr0 = x.__destroy_into_raw();
    const ret = wasm.get_string_length_from_params(ptr0);
    return ret >>> 0;
};

/**
* Given a string, return the same string in uppercase.
* In TS, the Rust `String` is typed as `string`.
* @param {string} x
* @returns {string}
*/
module.exports.to_uppercase = function(x) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        const ptr0 = passStringToWasm0(x, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.to_uppercase(retptr, ptr0, len0);
        var r0 = getInt32Memory0()[retptr / 4 + 0];
        var r1 = getInt32Memory0()[retptr / 4 + 1];
        return getStringFromWasm0(r0, r1);
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
        wasm.__wbindgen_free(r0, r1);
    }
};

/**
* Models a closed set of database providers as a C-style enum.
* In TS, the Rust C-style `enum` is typed as `enum`.
*/
module.exports.Provider = Object.freeze({ Postgres:0,"0":"Postgres",MySQL:1,"1":"MySQL",SQLite:2,"2":"SQLite", });
/**
* Models a struct with integer arrays as members.
*/
class NumericArrays {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_numericarrays_free(ptr);
    }
    /**
    * In TS, it's typed as `Int32Array`.
    * @returns {Int32Array}
    */
    get int32() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_int32(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayI32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `Int32Array`.
    * @param {Int32Array} arg0
    */
    set int32(arg0) {
        const ptr0 = passArray32ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_int32(this.ptr, ptr0, len0);
    }
    /**
    * In TS, it's typed as `Uint32Array`.
    * @returns {Uint32Array}
    */
    get uint32() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_uint32(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `Uint32Array`.
    * @param {Uint32Array} arg0
    */
    set uint32(arg0) {
        const ptr0 = passArray32ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_uint32(this.ptr, ptr0, len0);
    }
    /**
    * In TS, it's typed as `BigUint64Array`.
    * @returns {BigUint64Array}
    */
    get uint64() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_uint64(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayU64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `BigUint64Array`.
    * @param {BigUint64Array} arg0
    */
    set uint64(arg0) {
        const ptr0 = passArray64ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_uint64(this.ptr, ptr0, len0);
    }
    /**
    * In TS, it's typed as `BigInt64Array`.
    * @returns {BigInt64Array}
    */
    get int64() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_int64(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayI64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `BigInt64Array`.
    * @param {BigInt64Array} arg0
    */
    set int64(arg0) {
        const ptr0 = passArray64ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_int64(this.ptr, ptr0, len0);
    }
    /**
    * In TS, it's typed as `Float32Array`.
    * @returns {Float32Array}
    */
    get float() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_float(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF32FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 4);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `Float32Array`.
    * @param {Float32Array} arg0
    */
    set float(arg0) {
        const ptr0 = passArrayF32ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_float(this.ptr, ptr0, len0);
    }
    /**
    * In TS, it's typed as `Float64Array`.
    * @returns {Float64Array}
    */
    get double() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_numericarrays_double(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            var v0 = getArrayF64FromWasm0(r0, r1).slice();
            wasm.__wbindgen_free(r0, r1 * 8);
            return v0;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, it's typed as `Float64Array`.
    * @param {Float64Array} arg0
    */
    set double(arg0) {
        const ptr0 = passArrayF64ToWasm0(arg0, wasm.__wbindgen_malloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_numericarrays_double(this.ptr, ptr0, len0);
    }
}
module.exports.NumericArrays = NumericArrays;
/**
* Models an object with an optional numeric field.
*/
class OptionalParams {

    static __wrap(ptr) {
        const obj = Object.create(OptionalParams.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_optionalparams_free(ptr);
    }
    /**
    * In TS, the Rust `Option<i32>` is typed as `number | undefined`.
    * @returns {number | undefined}
    */
    get int32() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_optionalparams_int32(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return r0 === 0 ? undefined : r1;
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
        }
    }
    /**
    * In TS, the Rust `Option<i32>` is typed as `number | undefined`.
    * @param {number | undefined} arg0
    */
    set int32(arg0) {
        wasm.__wbg_set_optionalparams_int32(this.ptr, !isLikeNone(arg0), isLikeNone(arg0) ? 0 : arg0);
    }
    /**
    * Creates a new `OptionalParams` instance.
    * In TS, this becomes the constructor of the `OptionalParams` class.
    * Defining this constructor is necessary if you want to pass a `OptionalParams` instance to a Rust function
    * without throwing a `null pointer passed to rust` error.
    * @param {number | undefined} int32
    */
    constructor(int32) {
        const ret = wasm.optionalparams_new(!isLikeNone(int32), isLikeNone(int32) ? 0 : int32);
        return OptionalParams.__wrap(ret);
    }
}
module.exports.OptionalParams = OptionalParams;
/**
* Models a struct with scalar members.
*/
class Scalars {

    static __wrap(ptr) {
        const obj = Object.create(Scalars.prototype);
        obj.ptr = ptr;

        return obj;
    }

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_scalars_free(ptr);
    }
    /**
    * In TS, the Rust `u32` is typed as `number`.
    * @returns {number}
    */
    get n() {
        const ret = wasm.__wbg_get_scalars_n(this.ptr);
        return ret >>> 0;
    }
    /**
    * In TS, the Rust `u32` is typed as `number`.
    * @param {number} arg0
    */
    set n(arg0) {
        wasm.__wbg_set_scalars_n(this.ptr, arg0);
    }
    /**
    * In TS, the Rust `u64` is typed as `number`.
    * @returns {bigint}
    */
    get id() {
        const ret = wasm.__wbg_get_scalars_id(this.ptr);
        return BigInt.asUintN(64, ret);
    }
    /**
    * In TS, the Rust `u64` is typed as `number`.
    * @param {bigint} arg0
    */
    set id(arg0) {
        wasm.__wbg_set_scalars_id(this.ptr, arg0);
    }
    /**
    * In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
    * @returns {string}
    */
    get letter() {
        const ret = wasm.__wbg_get_scalars_letter(this.ptr);
        return String.fromCodePoint(ret);
    }
    /**
    * In TS, the Rust `char` is typed as `string`, and every character after the first one is truncated.
    * @param {string} arg0
    */
    set letter(arg0) {
        wasm.__wbg_set_scalars_letter(this.ptr, arg0.codePointAt(0));
    }
    /**
    * In TS, the Rust `bool` is typed as `boolean`.
    * @returns {boolean}
    */
    get toggle() {
        const ret = wasm.__wbg_get_scalars_toggle(this.ptr);
        return ret !== 0;
    }
    /**
    * In TS, the Rust `bool` is typed as `boolean`.
    * @param {boolean} arg0
    */
    set toggle(arg0) {
        wasm.__wbg_set_scalars_toggle(this.ptr, arg0);
    }
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
    constructor(n, id, letter, toggle) {
        const ret = wasm.scalars_new(n, id, letter.codePointAt(0), toggle);
        return Scalars.__wrap(ret);
    }
}
module.exports.Scalars = Scalars;
/**
* Models a struct with a String member.
*/
class StringParams {

    __destroy_into_raw() {
        const ptr = this.ptr;
        this.ptr = 0;

        return ptr;
    }

    free() {
        const ptr = this.__destroy_into_raw();
        wasm.__wbg_stringparams_free(ptr);
    }
    /**
    * In TS, the Rust `String` is typed as `string`.
    * @returns {string}
    */
    get id() {
        try {
            const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
            wasm.__wbg_get_stringparams_id(retptr, this.ptr);
            var r0 = getInt32Memory0()[retptr / 4 + 0];
            var r1 = getInt32Memory0()[retptr / 4 + 1];
            return getStringFromWasm0(r0, r1);
        } finally {
            wasm.__wbindgen_add_to_stack_pointer(16);
            wasm.__wbindgen_free(r0, r1);
        }
    }
    /**
    * In TS, the Rust `String` is typed as `string`.
    * @param {string} arg0
    */
    set id(arg0) {
        const ptr0 = passStringToWasm0(arg0, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);
        const len0 = WASM_VECTOR_LEN;
        wasm.__wbg_set_stringparams_id(this.ptr, ptr0, len0);
    }
}
module.exports.StringParams = StringParams;

module.exports.__wbindgen_string_new = function(arg0, arg1) {
    const ret = getStringFromWasm0(arg0, arg1);
    return addHeapObject(ret);
};

module.exports.__wbindgen_throw = function(arg0, arg1) {
    throw new Error(getStringFromWasm0(arg0, arg1));
};

const path = require('path').join(__dirname, 'playground_wasm_bindgen_bg.wasm');
const bytes = require('fs').readFileSync(path);

const wasmModule = new WebAssembly.Module(bytes);
const wasmInstance = new WebAssembly.Instance(wasmModule, imports);
wasm = wasmInstance.exports;
module.exports.__wasm = wasm;

