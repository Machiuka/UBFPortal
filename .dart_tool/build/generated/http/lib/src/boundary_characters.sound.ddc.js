define(['dart_sdk'], (function load__packages__http__src__boundary_characters(dart_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const _interceptors = dart_sdk._interceptors;
  const convert = dart_sdk.convert;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const async = dart_sdk.async;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  var utils = Object.create(dart.library);
  var byte_stream = Object.create(dart.library);
  var exception = Object.create(dart.library);
  var boundary_characters = Object.create(dart.library);
  var $add = dartx.add;
  var $forEach = dartx.forEach;
  var $_get = dartx._get;
  var $map = dartx.map;
  var $join = dartx.join;
  var $buffer = dartx.buffer;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    JSArrayOfListOfString: () => (T.JSArrayOfListOfString = dart.constFn(_interceptors.JSArray$(T.ListOfString())))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    ListOfStringToString: () => (T.ListOfStringToString = dart.constFn(dart.fnType(core.String, [T.ListOfString()])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    StreamOfListOfint: () => (T.StreamOfListOfint = dart.constFn(async.Stream$(T.ListOfint())))(),
    CompleterOfUint8List: () => (T.CompleterOfUint8List = dart.constFn(async.Completer$(typed_data.Uint8List)))(),
    ListOfintTovoid: () => (T.ListOfintTovoid = dart.constFn(dart.fnType(dart.void, [T.ListOfint()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: convert.Latin1Codec.prototype,
        [Latin1Codec__allowInvalid]: false
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: convert.Utf8Codec.prototype,
        [Utf8Codec__allowMalformed]: false
      });
    },
    get C2() {
      return C[2] = dart.constList([43, 95, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122], core.int);
    }
  }, false);
  var C = Array(3).fill(void 0);
  var I = [
    "package:http/src/byte_stream.dart",
    "package:http/src/exception.dart"
  ];
  var Latin1Codec__allowInvalid = dart.privateName(convert, "Latin1Codec._allowInvalid");
  utils.mapToQuery = function mapToQuery(map, opts) {
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    let pairs = T.JSArrayOfListOfString().of([]);
    map[$forEach](dart.fn((key, value) => {
      let t0, t0$;
      return pairs[$add](T.JSArrayOfString().of([core.Uri.encodeQueryComponent(key, {encoding: (t0 = encoding, t0 == null ? convert.utf8 : t0)}), core.Uri.encodeQueryComponent(value, {encoding: (t0$ = encoding, t0$ == null ? convert.utf8 : t0$)})]));
    }, T.StringAndStringTovoid()));
    return pairs[$map](core.String, dart.fn(pair => pair[$_get](0) + "=" + pair[$_get](1), T.ListOfStringToString()))[$join]("&");
  };
  utils.encodingForCharset = function encodingForCharset(charset, fallback = C[0] || CT.C0) {
    let t0;
    if (charset == null) return fallback;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? fallback : t0;
  };
  utils.requiredEncodingForCharset = function requiredEncodingForCharset(charset) {
    let t0;
    t0 = convert.Encoding.getByName(charset);
    return t0 == null ? dart.throw(new core.FormatException.new("Unsupported encoding \"" + charset + "\".")) : t0;
  };
  utils.isPlainAscii = function isPlainAscii(string) {
    return utils._asciiOnly.hasMatch(string);
  };
  utils.toUint8List = function toUint8List(input) {
    if (typed_data.Uint8List.is(input)) return input;
    if (typed_data.TypedData.is(input)) {
      return typed_data.Uint8List.view(typed_data.TypedData.as(input)[$buffer]);
    }
    return _native_typed_data.NativeUint8List.fromList(input);
  };
  utils.toByteStream = function toByteStream(stream) {
    if (byte_stream.ByteStream.is(stream)) return stream;
    return new byte_stream.ByteStream.new(stream);
  };
  utils.onDone = function onDone(T, stream, onDone) {
    return stream.transform(T, new (async._StreamHandlerTransformer$(T, T)).new({handleDone: dart.fn(sink => {
        sink.close();
        onDone();
      }, dart.fnType(dart.void, [async.EventSink$(T)]))}));
  };
  dart.defineLazy(utils, {
    /*utils._asciiOnly*/get _asciiOnly() {
      return core.RegExp.new("^[\\x00-\\x7F]+$");
    }
  }, false);
  var Utf8Codec__allowMalformed = dart.privateName(convert, "Utf8Codec._allowMalformed");
  byte_stream.ByteStream = class ByteStream extends async.StreamView$(core.List$(core.int)) {
    static fromBytes(bytes) {
      return new byte_stream.ByteStream.new(T.StreamOfListOfint().value(bytes));
    }
    toBytes() {
      let completer = T.CompleterOfUint8List().new();
      let sink = new convert._ByteCallbackSink.new(dart.fn(bytes => completer.complete(_native_typed_data.NativeUint8List.fromList(bytes)), T.ListOfintTovoid()));
      this.listen(dart.bind(sink, 'add'), {onError: dart.bind(completer, 'completeError'), onDone: dart.bind(sink, 'close'), cancelOnError: true});
      return completer.future;
    }
    bytesToString(encoding = C[1] || CT.C1) {
      return encoding.decodeStream(this);
    }
    toStringStream(encoding = C[1] || CT.C1) {
      return encoding.decoder.bind(this);
    }
  };
  (byte_stream.ByteStream.new = function(stream) {
    byte_stream.ByteStream.__proto__.new.call(this, stream);
    ;
  }).prototype = byte_stream.ByteStream.prototype;
  dart.addTypeTests(byte_stream.ByteStream);
  dart.addTypeCaches(byte_stream.ByteStream);
  dart.setMethodSignature(byte_stream.ByteStream, () => ({
    __proto__: dart.getMethods(byte_stream.ByteStream.__proto__),
    toBytes: dart.fnType(async.Future$(typed_data.Uint8List), []),
    bytesToString: dart.fnType(async.Future$(core.String), [], [convert.Encoding]),
    toStringStream: dart.fnType(async.Stream$(core.String), [], [convert.Encoding])
  }));
  dart.setLibraryUri(byte_stream.ByteStream, I[0]);
  var message$ = dart.privateName(exception, "ClientException.message");
  var uri$ = dart.privateName(exception, "ClientException.uri");
  exception.ClientException = class ClientException extends core.Object {
    get message() {
      return this[message$];
    }
    set message(value) {
      super.message = value;
    }
    get uri() {
      return this[uri$];
    }
    set uri(value) {
      super.uri = value;
    }
    toString() {
      return this.message;
    }
  };
  (exception.ClientException.new = function(message, uri = null) {
    this[message$] = message;
    this[uri$] = uri;
    ;
  }).prototype = exception.ClientException.prototype;
  dart.addTypeTests(exception.ClientException);
  dart.addTypeCaches(exception.ClientException);
  exception.ClientException[dart.implements] = () => [core.Exception];
  dart.setLibraryUri(exception.ClientException, I[1]);
  dart.setFieldSignature(exception.ClientException, () => ({
    __proto__: dart.getFields(exception.ClientException.__proto__),
    message: dart.finalFieldType(core.String),
    uri: dart.finalFieldType(dart.nullable(core.Uri))
  }));
  dart.defineExtensionMethods(exception.ClientException, ['toString']);
  dart.defineLazy(boundary_characters, {
    /*boundary_characters.boundaryCharacters*/get boundaryCharacters() {
      return C[2] || CT.C2;
    }
  }, false);
  dart.trackLibraries("packages/http/src/boundary_characters", {
    "package:http/src/utils.dart": utils,
    "package:http/src/byte_stream.dart": byte_stream,
    "package:http/src/exception.dart": exception,
    "package:http/src/boundary_characters.dart": boundary_characters
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["utils.dart","byte_stream.dart","exception.dart","boundary_characters.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;yCAcsC;QAAgB;AAChD,gBAAsB;AAInB,IAHP,AAAI,GAAD,WAAS,SAAC,KAAK;;AAAU,YAAA,AAAM,MAAD,OAAK,wBAC5B,8BAAqB,GAAG,cAAqB,KAAT,QAAQ,EAAR,aAAY,sBAChD,8BAAqB,KAAK,cAAqB,MAAT,QAAQ,EAAR,cAAY;;AAE5D,UAAO,AAAM,AAAuC,MAAxC,oBAAK,QAAC,QAAY,AAAI,AAAgB,IAAhB,QAAC,KAAG,MAAG,AAAI,IAAA,QAAC,sCAAW;EAC3D;yDAMoC,SAAmB;;AACrD,QAAI,AAAQ,OAAD,UAAU,MAAO,SAAQ;AACpC,SAAgB,2BAAU,OAAO;UAAjB,cAAsB,QAAQ;EAChD;yEAQ2C;;AACvC,SAAS,2BAAU,OAAO;UAAjB,cACR,WAAM,6BAAgB,AAAkC,4BAAV,OAAO;EAAK;6CAQtC;AAAW,UAAA,AAAW,2BAAS,MAAM;EAAC;2CAK/B;AAC9B,QAAU,wBAAN,KAAK,GAAe,MAAO,MAAK;AACpC,QAAU,wBAAN,KAAK;AAEP,YAAiB,2BAAY,AAAc,wBAApB,KAAK;;AAE9B,UAAiB,6CAAS,KAAK;EACjC;6CAE0C;AACxC,QAAW,0BAAP,MAAM,GAAgB,MAAO,OAAM;AACvC,UAAO,gCAAW,MAAM;EAC1B;oCAM8B,QAAwB;AAClD,UAAA,AAAO,OAAD,cAA6B,8DAAyB,QAAC;AAC/C,QAAZ,AAAK,IAAD;AACI,QAAR,AAAM,MAAA;;EACL;;MA/BD,gBAAU;YAAG,iBAAO;;;;;qBC9Be;AACnC,4CAAkB,4BAAM,KAAK;IAAE;;AAI7B,sBAAY;AACZ,iBAA0B,kCAC1B,QAAC,SAAU,AAAU,SAAD,UAAoB,4CAAS,KAAK;AAIlC,MAHxB,YAAY,UAAL,IAAI,oBACY,UAAV,SAAS,4BACL,UAAL,IAAI,2BACG;AACnB,YAAO,AAAU,UAAD;IAClB;kBAIuC;AACnC,YAAA,AAAS,SAAD,cAAc;IAAK;mBAES;AACpC,YAAA,AAAS,AAAQ,SAAT,cAAc;IAAK;;yCAzBI;AAAU,oDAAM,MAAM;;EAAC;;;;;;;;;;;;;ICJ7C;;;;;;IAGF;;;;;;;AAKU;IAAO;;4CAHP,SAAe;IAAf;IAAe;;EAAK;;;;;;;;;;;;MCC3B,sCAAkB","file":"boundary_characters.sound.ddc.js"}');
  // Exports:
  return {
    src__utils: utils,
    src__byte_stream: byte_stream,
    src__exception: exception,
    src__boundary_characters: boundary_characters
  };
}));

//# sourceMappingURL=boundary_characters.sound.ddc.js.map
