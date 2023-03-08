// Auto-generated from bytecode.md; do not edit.

export enum Op {
    STMT1_CALL0 = 2, // CALL func()
    STMT2_CALL1 = 3, // CALL func(v0)
    STMT3_CALL2 = 4, // CALL func(v0, v1)
    STMT4_CALL3 = 5, // CALL func(v0, v1, v2)
    STMT5_CALL4 = 6, // CALL func(v0, v1, v2, v3)
    STMT6_CALL5 = 7, // CALL func(v0, v1, v2, v3, v4)
    STMT7_CALL6 = 8, // CALL func(v0, v1, v2, v3, v4, v5)
    STMT8_CALL7 = 9, // CALL func(v0, v1, v2, v3, v4, v5, v6)
    STMT9_CALL8 = 10, // CALL func(v0, v1, v2, v3, v4, v5, v6, v7)
    STMT2_CALL_ARRAY = 79, // CALL func(...args)
    STMT1_RETURN = 12, // value
    STMTx_JMP = 13, // JMP jmpoffset
    STMTx1_JMP_Z = 14, // JMP jmpoffset IF NOT x
    STMTx_TRY = 80, // TRY jmpoffset
    STMTx_END_TRY = 81, // *jmpoffset
    STMT0_CATCH = 82,
    STMT0_FINALLY = 83,
    STMT1_THROW = 84, // value
    STMT1_RE_THROW = 85, // value
    STMTx1_THROW_JMP = 86, // *jmpoffset, level
    STMT0_DEBUGGER = 87,
    STMTx1_STORE_LOCAL = 17, // local_idx := value
    STMTx1_STORE_GLOBAL = 18, // global_idx := value
    STMT4_STORE_BUFFER = 19, // buffer, numfmt, offset, value
    EXPRx_LOAD_LOCAL = 21, // *local_idx
    EXPRx_LOAD_GLOBAL = 22, // *global_idx
    STMTx2_STORE_CLOSURE = 73, // *local_clo_idx, levels, value
    EXPRx1_LOAD_CLOSURE = 74, // *local_clo_idx, levels
    EXPRx_MAKE_CLOSURE = 75, // CLOSURE(func_idx)
    EXPR2_INDEX = 24, // object[idx]
    STMT3_INDEX_SET = 25, // object[index] := value
    STMT2_INDEX_DELETE = 11, // delete object[index]
    EXPRx1_BUILTIN_FIELD = 26, // {swap}obj.builtin_idx
    EXPRx1_ASCII_FIELD = 27, // {swap}obj.ascii_idx
    EXPRx1_UTF8_FIELD = 28, // {swap}obj.utf8_idx
    EXPRx_MATH_FIELD = 29, // Math.builtin_idx
    EXPRx_DS_FIELD = 30, // ds.builtin_idx
    EXPRx_OBJECT_FIELD = 16, // Object.builtin_idx
    EXPR1_NEW = 88, // new func
    EXPR2_BIND = 15, // func.bind(obj)
    STMT0_ALLOC_MAP = 31,
    STMT1_ALLOC_ARRAY = 32, // initial_size
    STMT1_ALLOC_BUFFER = 33, // size
    EXPRx_STATIC_ROLE = 34, // *role_idx
    EXPRx_STATIC_BUFFER = 35, // *buffer_idx
    EXPRx_STATIC_BUILTIN_STRING = 36, // *builtin_idx
    EXPRx_STATIC_ASCII_STRING = 37, // *ascii_idx
    EXPRx_STATIC_UTF8_STRING = 38, // *utf8_idx
    EXPRx_STATIC_FUNCTION = 39, // *func_idx
    EXPRx_LITERAL = 40, // *value
    EXPRx_LITERAL_F64 = 41, // *f64_idx
    EXPRx_BUILTIN_OBJECT = 1, // *builtin_object
    EXPRx_ROLE_PROTO = 42, // role_idx.prototype
    EXPR3_LOAD_BUFFER = 43, // buffer, numfmt, offset
    EXPR0_RET_VAL = 44,
    EXPR1_TYPEOF = 45, // object
    EXPR1_TYPEOF_STR = 76, // object
    EXPR0_UNDEFINED = 46, // undefined
    EXPR0_NULL = 90, // null
    EXPR1_IS_UNDEFINED = 47,
    EXPR2_INSTANCE_OF = 89, // obj, cls
    EXPR0_TRUE = 48,
    EXPR0_FALSE = 49,
    EXPR1_TO_BOOL = 50, // !!x
    EXPR0_NAN = 51,
    EXPR0_INF = 20,
    EXPR1_ABS = 52,
    EXPR1_BIT_NOT = 53, // ~x
    EXPR1_IS_NAN = 54,
    EXPR1_NEG = 55, // -x
    EXPR1_UPLUS = 23, // +x
    EXPR1_NOT = 56, // !x
    EXPR1_TO_INT = 57,
    EXPR2_ADD = 58, // x + y
    EXPR2_SUB = 59, // x - y
    EXPR2_MUL = 60, // x * y
    EXPR2_DIV = 61, // x / y
    EXPR2_BIT_AND = 62, // x & y
    EXPR2_BIT_OR = 63, // x | y
    EXPR2_BIT_XOR = 64, // x ^ y
    EXPR2_SHIFT_LEFT = 65, // x << y
    EXPR2_SHIFT_RIGHT = 66, // x >> y
    EXPR2_SHIFT_RIGHT_UNSIGNED = 67, // x >>> y
    EXPR2_EQ = 68, // x === y
    EXPR2_LE = 69, // x <= y
    EXPR2_LT = 70, // x < y
    EXPR2_NE = 71, // x !== y
    EXPR2_APPROX_EQ = 91, // x == y
    EXPR2_APPROX_NE = 92, // x != y
    STMT1_TERMINATE_FIBER = 72, // fiber_handle
    EXPR0_NOW_MS = 77,
    EXPR1_GET_FIBER_HANDLE = 78, // func
    OP_PAST_LAST = 93,
}

export const OP_PROPS =
    "\x7f\x60\x11\x12\x13\x14\x15\x16\x17\x18\x19\x12\x51\x70\x31\x42\x60\x31\x31\x14\x40\x20\x20\x41\x02\x13\x21\x21\x21\x60\x60\x10\x11\x11\x60\x60\x60\x60\x60\x60\x60\x60\x20\x03\x00\x41\x40\x41\x40\x40\x41\x40\x41\x41\x41\x41\x41\x41\x42\x42\x42\x42\x42\x42\x42\x42\x42\x42\x42\x42\x42\x42\x11\x32\x21\x20\x41\x00\x01\x12\x30\x70\x10\x10\x51\x51\x71\x10\x41\x42\x40\x42\x42"
export const OP_TYPES =
    "\x7f\x01\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x08\x0b\x0c\x0c\x0c\x01\x0b\x0b\x01\x0b\x0c\x0b\x0b\x0b\x0b\x0b\x0c\x0c\x0c\x05\x04\x09\x09\x09\x08\x01\x01\x05\x01\x0b\x01\x0c\x06\x06\x06\x06\x01\x01\x01\x06\x01\x06\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x01\x06\x06\x06\x06\x0c\x0c\x0b\x08\x01\x01\x07\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x0c\x08\x06\x0c\x06\x06"

export enum BinFmt {
    IMG_VERSION_MAJOR = 6,
    IMG_VERSION_MINOR = 2,
    IMG_VERSION_PATCH = 0,
    IMG_VERSION = 0x6020000,
    MAGIC0 = 0x53766544, // "DevS"
    MAGIC1 = 0x9a6a7e0a,
    NUM_IMG_SECTIONS = 10,
    FIX_HEADER_SIZE = 32,
    SECTION_HEADER_SIZE = 8,
    FUNCTION_HEADER_SIZE = 16,
    ROLE_HEADER_SIZE = 8,
    ASCII_HEADER_SIZE = 2,
    BINARY_SIZE_ALIGN = 32,
    MAX_STACK_DEPTH = 10,
    DIRECT_CONST_OP = 0x80,
    DIRECT_CONST_OFFSET = 16,
    FIRST_MULTIBYTE_INT = 0xf8,
    FIRST_NON_OPCODE = 0x10000,
    FIRST_BUILTIN_FUNCTION = 50000,
    MAX_ARGS_SHORT_CALL = 8,
    SERVICE_SPEC_HEADER_SIZE = 16,
    SERVICE_SPEC_PACKET_SIZE = 8,
    SERVICE_SPEC_FIELD_SIZE = 4,
    ROLE_BITS = 15,
}

export enum StrIdx {
    BUFFER = 0,
    BUILTIN = 1,
    ASCII = 2,
    UTF8 = 3,
    _SHIFT = 14,
}

export enum OpCall {
    __MAX = 4,
    SYNC = 0,
    BG = 1,
    BG_MAX1 = 2,
    BG_MAX1_PEND1 = 3,
    BG_MAX1_REPLACE = 4,
}

export enum BytecodeFlag {
    NUM_ARGS_MASK = 0xf,
    IS_STMT = 0x10,
    TAKES_NUMBER = 0x20,
    IS_STATELESS = 0x40, // fun modifier - only valid when !is_stmt
    IS_FINAL_STMT = 0x40, // final modifier - only valid when is_stmt
}

export enum FunctionFlag {
    __MAX = 2,
    NEEDS_THIS = 0x01,
    IS_CTOR = 0x02,
}

export enum NumFmt {
    __MAX = 12,
    U8 = 0b0000,
    U16 = 0b0001,
    U32 = 0b0010,
    U64 = 0b0011,
    I8 = 0b0100,
    I16 = 0b0101,
    I32 = 0b0110,
    I64 = 0b0111,
    F8 = 0b1000, // not supported
    F16 = 0b1001, // not supported
    F32 = 0b1010,
    F64 = 0b1011,
    SPECIAL = 0b1100,
}

export enum NumFmtSpecial {
    __MAX = 6,
    EMPTY = 0,
    BYTES = 1,
    STRING = 2,
    STRING0 = 3,
    BOOL = 4,
    PIPE = 5,
    PIPE_PORT = 6,
}

export enum PacketSpecCode {
    REGISTER = 0x1000,
    EVENT = 0x8000,
    COMMAND = 0x0000,
    REPORT = 0x2000,
    MASK = 0xf000,
}

export enum ServiceSpecFlag {
    DERIVE_MASK = 0x000f,
    DERIVE_BASE = 0x0000,
    DERIVE_SENSOR = 0x0001,
    DERIVE_LAST = 0x0001,
}

export enum PacketSpecFlag {
    __MAX = 1,
    MULTI_FIELD = 0x01,
}

export enum FieldSpecFlag {
    __MAX = 2,
    IS_BYTES = 0x01,
    STARTS_REPEATS = 0x02,
}

export enum ObjectType {
    __MAX = 12,
    UNDEFINED = 0,
    NUMBER = 1,
    MAP = 2,
    ARRAY = 3,
    BUFFER = 4,
    ROLE = 5,
    BOOL = 6,
    FIBER = 7,
    FUNCTION = 8,
    STRING = 9,
    PACKET = 10,
    EXOTIC = 11,
    NULL = 12,
    ANY = 11,
    VOID = 12,
}

export enum BuiltInObject {
    __MAX = 35,
    MATH = 0,
    OBJECT = 1,
    OBJECT_PROTOTYPE = 2,
    ARRAY = 3,
    ARRAY_PROTOTYPE = 4,
    BUFFER = 5,
    BUFFER_PROTOTYPE = 6,
    STRING = 7,
    STRING_PROTOTYPE = 8,
    NUMBER = 9,
    NUMBER_PROTOTYPE = 10,
    DSFIBER = 11,
    DSFIBER_PROTOTYPE = 12,
    DSROLE = 13,
    DSROLE_PROTOTYPE = 14,
    FUNCTION = 15,
    FUNCTION_PROTOTYPE = 16,
    BOOLEAN = 17,
    BOOLEAN_PROTOTYPE = 18,
    PACKET = 19,
    PACKET_PROTOTYPE = 20,
    DEVICESCRIPT = 21,
    DSPACKETINFO_PROTOTYPE = 22,
    DSREGISTER_PROTOTYPE = 23,
    DSCOMMAND_PROTOTYPE = 24,
    DSEVENT_PROTOTYPE = 25,
    DSREPORT_PROTOTYPE = 26,
    ERROR = 27,
    ERROR_PROTOTYPE = 28,
    TYPEERROR = 29,
    TYPEERROR_PROTOTYPE = 30,
    RANGEERROR = 31,
    RANGEERROR_PROTOTYPE = 32,
    SYNTAXERROR = 33,
    SYNTAXERROR_PROTOTYPE = 34,
    JSON = 35,
}

export enum BuiltInString {
    __MAX = 135,
    _EMPTY = 0,
    MINFINITY = 1, // -Infinity
    DEVICESCRIPT = 2,
    E = 3,
    INFINITY = 4,
    LN10 = 5,
    LN2 = 6,
    LOG10E = 7,
    LOG2E = 8,
    NAN = 9,
    PI = 10,
    SQRT1_2 = 11,
    SQRT2 = 12,
    ABS = 13,
    ALLOC = 14,
    ARRAY = 15,
    BLITAT = 16,
    BOOLEAN = 17,
    BUFFER = 18,
    CBRT = 19,
    CEIL = 20,
    CHARCODEAT = 21,
    CLAMP = 22,
    EXP = 23,
    FALSE = 24,
    FILLAT = 25,
    FLOOR = 26,
    FOREACH = 27,
    FUNCTION = 28,
    GETAT = 29,
    IDIV = 30,
    IMUL = 31,
    ISCONNECTED = 32,
    JOIN = 33,
    LENGTH = 34,
    LOG = 35,
    LOG10 = 36,
    LOG2 = 37,
    MAP = 38,
    MAX = 39,
    MIN = 40,
    NEXT = 41,
    NULL = 42,
    NUMBER = 43,
    ONCHANGE = 44,
    ONCONNECTED = 45,
    ONDISCONNECTED = 46,
    PACKET = 47,
    _PANIC = 48,
    POP = 49,
    POW = 50,
    PREV = 51,
    PROTOTYPE = 52,
    PUSH = 53,
    RANDOM = 54,
    RANDOMINT = 55,
    READ = 56,
    REBOOT = 57,
    ROUND = 58,
    SETAT = 59,
    SETLENGTH = 60,
    SHIFT = 61,
    SIGNAL = 62,
    SLICE = 63,
    SPLICE = 64,
    SQRT = 65,
    STRING = 66,
    SUBSCRIBE = 67,
    TOSTRING = 68,
    TRUE = 69,
    UNDEFINED = 70,
    UNSHIFT = 71,
    WAIT = 72,
    WRITE = 73,
    SLEEPMS = 74,
    IMOD = 75,
    FORMAT = 76,
    INSERT = 77,
    START = 78,
    CLOUD = 79,
    MAIN = 80,
    CHARAT = 81,
    OBJECT = 82,
    PARSEINT = 83,
    PARSEFLOAT = 84,
    ASSIGN = 85,
    KEYS = 86,
    VALUES = 87,
    __FUNC__ = 88,
    ROLE = 89,
    DEVICEIDENTIFIER = 90,
    SHORTID = 91,
    SERVICEINDEX = 92,
    SERVICECOMMAND = 93,
    PAYLOAD = 94,
    DECODE = 95,
    ENCODE = 96,
    ONPACKET = 97,
    CODE = 98,
    NAME = 99,
    ISEVENT = 100,
    EVENTCODE = 101,
    ISREGSET = 102,
    ISREGGET = 103,
    REGCODE = 104,
    FLAGS = 105,
    ISREPORT = 106,
    ISCOMMAND = 107,
    ISARRAY = 108,
    INLINE = 109,
    ASSERT = 110,
    PUSHRANGE = 111,
    SENDCOMMAND = 112,
    __STACK__ = 113,
    ERROR = 114,
    TYPEERROR = 115,
    RANGEERROR = 116,
    STACK = 117,
    MESSAGE = 118,
    CAUSE = 119,
    __NEW__ = 120,
    SETPROTOTYPEOF = 121,
    GETPROTOTYPEOF = 122,
    CONSTRUCTOR = 123,
    __PROTO__ = 124,
    _LOGREPR = 125,
    PRINT = 126,
    EVERYMS = 127,
    SETINTERVAL = 128,
    SETTIMEOUT = 129,
    CLEARINTERVAL = 130,
    CLEARTIMEOUT = 131,
    SYNTAXERROR = 132,
    JSON = 133,
    PARSE = 134,
    STRINGIFY = 135,
}

export const OP_PRINT_FMTS = [
    null,
    "%O",
    "CALL %e()",
    "CALL %e(%e)",
    "CALL %e(%e, %e)",
    "CALL %e(%e, %e, %e)",
    "CALL %e(%e, %e, %e, %e)",
    "CALL %e(%e, %e, %e, %e, %e)",
    "CALL %e(%e, %e, %e, %e, %e, %e)",
    "CALL %e(%e, %e, %e, %e, %e, %e, %e)",
    "CALL %e(%e, %e, %e, %e, %e, %e, %e, %e)",
    "delete %e[%e]",
    "RETURN %e",
    "JMP %j",
    "JMP %j IF NOT %e",
    "%e.bind(%e)",
    "Object.%I",
    "%L := %e",
    "%G := %e",
    "STORE_BUFFER %e %n offset=%e %e",
    "inf()",
    "%L",
    "%G",
    "+%e",
    "%e[%e]",
    "%e[%e] := %e",
    "{swap}%e.%I",
    "{swap}%e.%A",
    "{swap}%e.%U",
    "Math.%I",
    "ds.%I",
    "ALLOC_MAP ",
    "ALLOC_ARRAY initial_size=%e",
    "ALLOC_BUFFER size=%e",
    "%R",
    "%B",
    "%I",
    "%A",
    "%U",
    "%F",
    "%e",
    "%D",
    "%R.prototype",
    "load_buffer(%e, %n, offset=%e)",
    "ret_val()",
    "typeof(%e)",
    "undefined",
    "is_undefined(%e)",
    "true()",
    "false()",
    "!!%e",
    "nan()",
    "abs(%e)",
    "~%e",
    "is_nan(%e)",
    "-%e",
    "!%e",
    "to_int(%e)",
    "(%e + %e)",
    "(%e - %e)",
    "(%e * %e)",
    "(%e / %e)",
    "(%e & %e)",
    "(%e | %e)",
    "(%e ^ %e)",
    "(%e << %e)",
    "(%e >> %e)",
    "(%e >>> %e)",
    "(%e === %e)",
    "(%e <= %e)",
    "(%e < %e)",
    "(%e !== %e)",
    "TERMINATE_FIBER fiber_handle=%e",
    "STORE_CLOSURE local_clo_idx=%e levels=%e %e",
    "load_closure(local_clo_idx=%e, levels=%e)",
    "CLOSURE(%F)",
    "typeof_str(%e)",
    "now_ms()",
    "get_fiber_handle(func=%e)",
    "CALL %e(...%e)",
    "TRY %j",
    "END_TRY %j",
    "CATCH ",
    "FINALLY ",
    "THROW %e",
    "RE_THROW %e",
    "THROW_JMP %j level=%e",
    "DEBUGGER ",
    "(new %e)",
    "instance_of(obj=%e, cls=%e)",
    "null",
    "(%e == %e)",
    "(%e != %e)",
]
export const OBJECT_TYPE = [
    "undefined",
    "number",
    "map",
    "array",
    "buffer",
    "role",
    "bool",
    "fiber",
    "function",
    "string",
    "packet",
    "any",
    "void",
]
export const BUILTIN_STRING__VAL = [
    "",
    "-Infinity",
    "DeviceScript",
    "E",
    "Infinity",
    "LN10",
    "LN2",
    "LOG10E",
    "LOG2E",
    "NaN",
    "PI",
    "SQRT1_2",
    "SQRT2",
    "abs",
    "alloc",
    "array",
    "blitAt",
    "boolean",
    "buffer",
    "cbrt",
    "ceil",
    "charCodeAt",
    "clamp",
    "exp",
    "false",
    "fillAt",
    "floor",
    "forEach",
    "function",
    "getAt",
    "idiv",
    "imul",
    "isConnected",
    "join",
    "length",
    "log",
    "log10",
    "log2",
    "map",
    "max",
    "min",
    "next",
    "null",
    "number",
    "onChange",
    "onConnected",
    "onDisconnected",
    "packet",
    "_panic",
    "pop",
    "pow",
    "prev",
    "prototype",
    "push",
    "random",
    "randomInt",
    "read",
    "reboot",
    "round",
    "setAt",
    "setLength",
    "shift",
    "signal",
    "slice",
    "splice",
    "sqrt",
    "string",
    "subscribe",
    "toString",
    "true",
    "undefined",
    "unshift",
    "wait",
    "write",
    "sleepMs",
    "imod",
    "format",
    "insert",
    "start",
    "cloud",
    "main",
    "charAt",
    "object",
    "parseInt",
    "parseFloat",
    "assign",
    "keys",
    "values",
    "__func__",
    "role",
    "deviceIdentifier",
    "shortId",
    "serviceIndex",
    "serviceCommand",
    "payload",
    "decode",
    "encode",
    "onPacket",
    "code",
    "name",
    "isEvent",
    "eventCode",
    "isRegSet",
    "isRegGet",
    "regCode",
    "flags",
    "isReport",
    "isCommand",
    "isArray",
    "inline",
    "assert",
    "pushRange",
    "sendCommand",
    "__stack__",
    "Error",
    "TypeError",
    "RangeError",
    "stack",
    "message",
    "cause",
    "__new__",
    "setPrototypeOf",
    "getPrototypeOf",
    "constructor",
    "__proto__",
    "_logRepr",
    "print",
    "everyMs",
    "setInterval",
    "setTimeout",
    "clearInterval",
    "clearTimeout",
    "SyntaxError",
    "JSON",
    "parse",
    "stringify",
]
export const BUILTIN_OBJECT__VAL = [
    "Math",
    "Object",
    "Object_prototype",
    "Array",
    "Array_prototype",
    "Buffer",
    "Buffer_prototype",
    "String",
    "String_prototype",
    "Number",
    "Number_prototype",
    "DsFiber",
    "DsFiber_prototype",
    "DsRole",
    "DsRole_prototype",
    "Function",
    "Function_prototype",
    "Boolean",
    "Boolean_prototype",
    "Packet",
    "Packet_prototype",
    "DeviceScript",
    "DsPacketInfo_prototype",
    "DsRegister_prototype",
    "DsCommand_prototype",
    "DsEvent_prototype",
    "DsReport_prototype",
    "Error",
    "Error_prototype",
    "TypeError",
    "TypeError_prototype",
    "RangeError",
    "RangeError_prototype",
    "SyntaxError",
    "SyntaxError_prototype",
    "JSON",
]