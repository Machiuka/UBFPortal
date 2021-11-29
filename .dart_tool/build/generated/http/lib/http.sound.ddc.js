define(['dart_sdk', 'packages/http/src/boundary_characters', 'packages/http_parser/http_parser'], (function load__packages__http__http(dart_sdk, packages__http__src__boundary_characters, packages__http_parser__http_parser) {
  'use strict';
  const core = dart_sdk.core;
  const convert = dart_sdk.convert;
  const _js_helper = dart_sdk._js_helper;
  const _interceptors = dart_sdk._interceptors;
  const async = dart_sdk.async;
  const collection = dart_sdk.collection;
  const math = dart_sdk.math;
  const typed_data = dart_sdk.typed_data;
  const _native_typed_data = dart_sdk._native_typed_data;
  const html = dart_sdk.html;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__http__src__boundary_characters.src__utils;
  const byte_stream = packages__http__src__boundary_characters.src__byte_stream;
  const boundary_characters = packages__http__src__boundary_characters.src__boundary_characters;
  const exception = packages__http__src__boundary_characters.src__exception;
  const media_type = packages__http_parser__http_parser.src__media_type;
  var multipart_file_stub = Object.create(dart.library);
  var multipart_file = Object.create(dart.library);
  var multipart_request = Object.create(dart.library);
  var base_request = Object.create(dart.library);
  var streamed_response = Object.create(dart.library);
  var base_response = Object.create(dart.library);
  var base_client = Object.create(dart.library);
  var response$ = Object.create(dart.library);
  var request$ = Object.create(dart.library);
  var client$ = Object.create(dart.library);
  var browser_client = Object.create(dart.library);
  var http = Object.create(dart.library);
  var streamed_request = Object.create(dart.library);
  var $length = dartx.length;
  var $_get = dartx._get;
  var $forEach = dartx.forEach;
  var $_set = dartx._set;
  var $entries = dartx.entries;
  var $replaceAll = dartx.replaceAll;
  var $toLowerCase = dartx.toLowerCase;
  var $hashCode = dartx.hashCode;
  var $addAll = dartx.addAll;
  var $cast = dartx.cast;
  var $containsKey = dartx.containsKey;
  var $remove = dartx.remove;
  var $responseType = dartx.responseType;
  var $onLoad = dartx.onLoad;
  var $response = dartx.response;
  var $asUint8List = dartx.asUint8List;
  var $responseHeaders = dartx.responseHeaders;
  var $onError = dartx.onError;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    JSArrayOfMultipartFile: () => (T.JSArrayOfMultipartFile = dart.constFn(_interceptors.JSArray$(multipart_file.MultipartFile)))(),
    StringAndStringTovoid: () => (T.StringAndStringTovoid = dart.constFn(dart.fnType(dart.void, [core.String, core.String])))(),
    ListOfint: () => (T.ListOfint = dart.constFn(core.List$(core.int)))(),
    _AsyncStarImplOfListOfint: () => (T._AsyncStarImplOfListOfint = dart.constFn(async._AsyncStarImpl$(T.ListOfint())))(),
    intToint: () => (T.intToint = dart.constFn(dart.fnType(core.int, [core.int])))(),
    LinkedHashMapOfString$String: () => (T.LinkedHashMapOfString$String = dart.constFn(collection.LinkedHashMap$(core.String, core.String)))(),
    StringAndStringTobool: () => (T.StringAndStringTobool = dart.constFn(dart.fnType(core.bool, [core.String, core.String])))(),
    StringToint: () => (T.StringToint = dart.constFn(dart.fnType(core.int, [core.String])))(),
    _EmptyStreamOfListOfint: () => (T._EmptyStreamOfListOfint = dart.constFn(async._EmptyStream$(T.ListOfint())))(),
    LinkedHashSetOfHttpRequest: () => (T.LinkedHashSetOfHttpRequest = dart.constFn(collection.LinkedHashSet$(html.HttpRequest)))(),
    CompleterOfStreamedResponse: () => (T.CompleterOfStreamedResponse = dart.constFn(async.Completer$(streamed_response.StreamedResponse)))(),
    ProgressEventToNull: () => (T.ProgressEventToNull = dart.constFn(dart.fnType(core.Null, [html.ProgressEvent])))(),
    FutureOfResponse: () => (T.FutureOfResponse = dart.constFn(async.Future$(response$.Response)))(),
    ClientToFutureOfResponse: () => (T.ClientToFutureOfResponse = dart.constFn(dart.fnType(T.FutureOfResponse(), [client$.Client])))(),
    FutureOfString: () => (T.FutureOfString = dart.constFn(async.Future$(core.String)))(),
    ClientToFutureOfString: () => (T.ClientToFutureOfString = dart.constFn(dart.fnType(T.FutureOfString(), [client$.Client])))(),
    FutureOfUint8List: () => (T.FutureOfUint8List = dart.constFn(async.Future$(typed_data.Uint8List)))(),
    ClientToFutureOfUint8List: () => (T.ClientToFutureOfUint8List = dart.constFn(dart.fnType(T.FutureOfUint8List(), [client$.Client])))(),
    StreamControllerOfListOfint: () => (T.StreamControllerOfListOfint = dart.constFn(async.StreamController$(T.ListOfint())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.constList([13, 10], core.int);
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: T._EmptyStreamOfListOfint().prototype
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: byte_stream.ByteStream.prototype,
        [StreamView__stream]: C[2] || CT.C2
      });
    },
    get C3() {
      return C[3] = dart.constMap(core.String, core.String, []);
    }
  }, false);
  var C = Array(4).fill(void 0);
  var I = [
    "package:http/src/multipart_file.dart",
    "package:http/src/base_request.dart",
    "package:http/src/multipart_request.dart",
    "package:http/src/base_response.dart",
    "package:http/src/streamed_response.dart",
    "package:http/src/base_client.dart",
    "package:http/src/response.dart",
    "package:http/src/request.dart",
    "package:http/src/client.dart",
    "package:http/src/browser_client.dart",
    "package:http/src/streamed_request.dart"
  ];
  multipart_file_stub.multipartFileFromPath = function multipartFileFromPath(field, filePath, opts) {
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    return dart.throw(new core.UnsupportedError.new("MultipartFile is only supported where dart:io is available."));
  };
  var field$ = dart.privateName(multipart_file, "MultipartFile.field");
  var length$ = dart.privateName(multipart_file, "MultipartFile.length");
  var filename$ = dart.privateName(multipart_file, "MultipartFile.filename");
  var contentType$ = dart.privateName(multipart_file, "MultipartFile.contentType");
  var _isFinalized = dart.privateName(multipart_file, "_isFinalized");
  var _stream = dart.privateName(multipart_file, "_stream");
  multipart_file.MultipartFile = class MultipartFile extends core.Object {
    get field() {
      return this[field$];
    }
    set field(value) {
      super.field = value;
    }
    get length() {
      return this[length$];
    }
    set length(value) {
      super.length = value;
    }
    get filename() {
      return this[filename$];
    }
    set filename(value) {
      super.filename = value;
    }
    get contentType() {
      return this[contentType$];
    }
    set contentType(value) {
      super.contentType = value;
    }
    get isFinalized() {
      return this[_isFinalized];
    }
    static fromBytes(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      let stream = byte_stream.ByteStream.fromBytes(value);
      return new multipart_file.MultipartFile.new(field, stream, value[$length], {filename: filename, contentType: contentType});
    }
    static fromString(field, value, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      contentType == null ? contentType = new media_type.MediaType.new("text", "plain") : null;
      let encoding = utils.encodingForCharset(contentType.parameters[$_get]("charset"), convert.utf8);
      contentType = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", encoding.name])});
      return multipart_file.MultipartFile.fromBytes(field, encoding.encode(value), {filename: filename, contentType: contentType});
    }
    static fromPath(field, filePath, opts) {
      let filename = opts && 'filename' in opts ? opts.filename : null;
      let contentType = opts && 'contentType' in opts ? opts.contentType : null;
      return multipart_file_stub.multipartFileFromPath(field, filePath, {filename: filename, contentType: contentType});
    }
    finalize() {
      if (this.isFinalized) {
        dart.throw(new core.StateError.new("Can't finalize a finalized MultipartFile."));
      }
      this[_isFinalized] = true;
      return this[_stream];
    }
  };
  (multipart_file.MultipartFile.new = function(field, stream, length, opts) {
    let t0;
    let filename = opts && 'filename' in opts ? opts.filename : null;
    let contentType = opts && 'contentType' in opts ? opts.contentType : null;
    this[_isFinalized] = false;
    this[field$] = field;
    this[length$] = length;
    this[filename$] = filename;
    this[_stream] = utils.toByteStream(stream);
    this[contentType$] = (t0 = contentType, t0 == null ? new media_type.MediaType.new("application", "octet-stream") : t0);
    ;
  }).prototype = multipart_file.MultipartFile.prototype;
  dart.addTypeTests(multipart_file.MultipartFile);
  dart.addTypeCaches(multipart_file.MultipartFile);
  dart.setMethodSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getMethods(multipart_file.MultipartFile.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, [])
  }));
  dart.setGetterSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getGetters(multipart_file.MultipartFile.__proto__),
    isFinalized: core.bool
  }));
  dart.setLibraryUri(multipart_file.MultipartFile, I[0]);
  dart.setFieldSignature(multipart_file.MultipartFile, () => ({
    __proto__: dart.getFields(multipart_file.MultipartFile.__proto__),
    field: dart.finalFieldType(core.String),
    length: dart.finalFieldType(core.int),
    filename: dart.finalFieldType(dart.nullable(core.String)),
    contentType: dart.finalFieldType(media_type.MediaType),
    [_stream]: dart.finalFieldType(byte_stream.ByteStream),
    [_isFinalized]: dart.fieldType(core.bool)
  }));
  var fields = dart.privateName(multipart_request, "MultipartRequest.fields");
  var files = dart.privateName(multipart_request, "MultipartRequest.files");
  var _headerForField = dart.privateName(multipart_request, "_headerForField");
  var _headerForFile = dart.privateName(multipart_request, "_headerForFile");
  var _boundaryString = dart.privateName(multipart_request, "_boundaryString");
  var _finalize = dart.privateName(multipart_request, "_finalize");
  var _browserEncode = dart.privateName(multipart_request, "_browserEncode");
  var method$ = dart.privateName(base_request, "BaseRequest.method");
  var url$ = dart.privateName(base_request, "BaseRequest.url");
  var headers = dart.privateName(base_request, "BaseRequest.headers");
  var _contentLength = dart.privateName(base_request, "_contentLength");
  var _persistentConnection = dart.privateName(base_request, "_persistentConnection");
  var _followRedirects = dart.privateName(base_request, "_followRedirects");
  var _maxRedirects = dart.privateName(base_request, "_maxRedirects");
  var _finalized = dart.privateName(base_request, "_finalized");
  var _checkFinalized = dart.privateName(base_request, "_checkFinalized");
  var StreamView__stream = dart.privateName(async, "StreamView._stream");
  base_request.BaseRequest = class BaseRequest extends core.Object {
    get method() {
      return this[method$];
    }
    set method(value) {
      super.method = value;
    }
    get url() {
      return this[url$];
    }
    set url(value) {
      super.url = value;
    }
    get headers() {
      return this[headers];
    }
    set headers(value) {
      super.headers = value;
    }
    get contentLength() {
      return this[_contentLength];
    }
    set contentLength(value) {
      if (value != null && dart.notNull(value) < 0) {
        dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(value) + "."));
      }
      this[_checkFinalized]();
      this[_contentLength] = value;
    }
    get persistentConnection() {
      return this[_persistentConnection];
    }
    set persistentConnection(value) {
      this[_checkFinalized]();
      this[_persistentConnection] = value;
    }
    get followRedirects() {
      return this[_followRedirects];
    }
    set followRedirects(value) {
      this[_checkFinalized]();
      this[_followRedirects] = value;
    }
    get maxRedirects() {
      return this[_maxRedirects];
    }
    set maxRedirects(value) {
      this[_checkFinalized]();
      this[_maxRedirects] = value;
    }
    get finalized() {
      return this[_finalized];
    }
    static _validateMethod(method) {
      if (!base_request.BaseRequest._tokenRE.hasMatch(method)) {
        dart.throw(new core.ArgumentError.value(method, "method", "Not a valid method"));
      }
      return method;
    }
    finalize() {
      if (this.finalized) dart.throw(new core.StateError.new("Can't finalize a finalized Request."));
      this[_finalized] = true;
      return C[1] || CT.C1;
    }
    send() {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let client = client$.Client.new();
        try {
          let response = (yield client.send(this));
          let stream = utils.onDone(T.ListOfint(), response.stream, dart.bind(client, 'close'));
          return new streamed_response.StreamedResponse.new(new byte_stream.ByteStream.new(stream), response.statusCode, {contentLength: response.contentLength, request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
        } catch (e) {
          let _ = dart.getThrown(e);
          if (core.Object.is(_)) {
            client.close();
            dart.rethrow(e);
          } else
            throw e;
        }
      }).bind(this));
    }
    [_checkFinalized]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
    toString() {
      return this.method + " " + dart.str(this.url);
    }
  };
  (base_request.BaseRequest.new = function(method, url) {
    this[_contentLength] = null;
    this[_persistentConnection] = true;
    this[_followRedirects] = true;
    this[_maxRedirects] = 5;
    this[_finalized] = false;
    this[url$] = url;
    this[method$] = base_request.BaseRequest._validateMethod(method);
    this[headers] = T.LinkedHashMapOfString$String().new({equals: dart.fn((key1, key2) => key1[$toLowerCase]() === key2[$toLowerCase](), T.StringAndStringTobool()), hashCode: dart.fn(key => key[$toLowerCase]()[$hashCode], T.StringToint())});
    ;
  }).prototype = base_request.BaseRequest.prototype;
  dart.addTypeTests(base_request.BaseRequest);
  dart.addTypeCaches(base_request.BaseRequest);
  dart.setMethodSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getMethods(base_request.BaseRequest.__proto__),
    finalize: dart.fnType(byte_stream.ByteStream, []),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), []),
    [_checkFinalized]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getGetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int,
    finalized: core.bool
  }));
  dart.setSetterSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getSetters(base_request.BaseRequest.__proto__),
    contentLength: dart.nullable(core.int),
    persistentConnection: core.bool,
    followRedirects: core.bool,
    maxRedirects: core.int
  }));
  dart.setLibraryUri(base_request.BaseRequest, I[1]);
  dart.setFieldSignature(base_request.BaseRequest, () => ({
    __proto__: dart.getFields(base_request.BaseRequest.__proto__),
    method: dart.finalFieldType(core.String),
    url: dart.finalFieldType(core.Uri),
    [_contentLength]: dart.fieldType(dart.nullable(core.int)),
    [_persistentConnection]: dart.fieldType(core.bool),
    [_followRedirects]: dart.fieldType(core.bool),
    [_maxRedirects]: dart.fieldType(core.int),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    [_finalized]: dart.fieldType(core.bool)
  }));
  dart.defineExtensionMethods(base_request.BaseRequest, ['toString']);
  dart.defineLazy(base_request.BaseRequest, {
    /*base_request.BaseRequest._tokenRE*/get _tokenRE() {
      return core.RegExp.new("^[\\w!#%&'*+\\-.^`|~]+$");
    }
  }, false);
  multipart_request.MultipartRequest = class MultipartRequest extends base_request.BaseRequest {
    get fields() {
      return this[fields];
    }
    set fields(value) {
      super.fields = value;
    }
    get files() {
      return this[files];
    }
    set files(value) {
      super.files = value;
    }
    get contentLength() {
      let length = 0;
      this.fields[$forEach](dart.fn((name, value) => {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForField](name, value))[$length] + convert.utf8.encode(value)[$length] + "\r\n".length);
      }, T.StringAndStringTovoid()));
      for (let file of this.files) {
        length = length + ("--".length + 70 + "\r\n".length + convert.utf8.encode(this[_headerForFile](file))[$length] + file.length + "\r\n".length);
      }
      return length + "--".length + 70 + "--\r\n".length;
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "multipart requests."));
    }
    finalize() {
      let boundary = this[_boundaryString]();
      this.headers[$_set]("content-type", "multipart/form-data; boundary=" + boundary);
      super.finalize();
      return new byte_stream.ByteStream.new(this[_finalize](boundary));
    }
    [_finalize](boundary) {
      return new (T._AsyncStarImplOfListOfint()).new((function* _finalize(stream) {
        let line = C[0] || CT.C0;
        let separator = convert.utf8.encode("--" + boundary + "\r\n");
        let close = convert.utf8.encode("--" + boundary + "--\r\n");
        for (let field of this.fields[$entries]) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForField](field.key, field.value)))) return;
          yield;
          if (stream.add(convert.utf8.encode(field.value))) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        for (let file of this.files) {
          if (stream.add(separator)) return;
          yield;
          if (stream.add(convert.utf8.encode(this[_headerForFile](file)))) return;
          yield;
          if (stream.addStream(file.finalize())) return;
          yield;
          if (stream.add(line)) return;
          yield;
        }
        if (stream.add(close)) return;
        yield;
      }).bind(this)).stream;
    }
    [_headerForField](name, value) {
      let header = "content-disposition: form-data; name=\"" + this[_browserEncode](name) + "\"";
      if (!utils.isPlainAscii(value)) {
        header = header + "\r\n" + "content-type: text/plain; charset=utf-8\r\n" + "content-transfer-encoding: binary";
      }
      return header + "\r\n\r\n";
    }
    [_headerForFile](file) {
      let header = "content-type: " + dart.str(file.contentType) + "\r\n" + "content-disposition: form-data; name=\"" + this[_browserEncode](file.field) + "\"";
      if (file.filename != null) {
        header = header + "; filename=\"" + this[_browserEncode](dart.nullCheck(file.filename)) + "\"";
      }
      return header + "\r\n\r\n";
    }
    [_browserEncode](value) {
      return value[$replaceAll](multipart_request._newlineRegExp, "%0D%0A")[$replaceAll]("\"", "%22");
    }
    [_boundaryString]() {
      let prefix = "dart-http-boundary-";
      let list = T.ListOfint().generate(70 - prefix.length, dart.fn(index => boundary_characters.boundaryCharacters[$_get](multipart_request.MultipartRequest._random.nextInt(boundary_characters.boundaryCharacters[$length])), T.intToint()), {growable: false});
      return prefix + core.String.fromCharCodes(list);
    }
  };
  (multipart_request.MultipartRequest.new = function(method, url) {
    this[fields] = new (T.IdentityMapOfString$String()).new();
    this[files] = T.JSArrayOfMultipartFile().of([]);
    multipart_request.MultipartRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = multipart_request.MultipartRequest.prototype;
  dart.addTypeTests(multipart_request.MultipartRequest);
  dart.addTypeCaches(multipart_request.MultipartRequest);
  dart.setMethodSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getMethods(multipart_request.MultipartRequest.__proto__),
    [_finalize]: dart.fnType(async.Stream$(core.List$(core.int)), [core.String]),
    [_headerForField]: dart.fnType(core.String, [core.String, core.String]),
    [_headerForFile]: dart.fnType(core.String, [multipart_file.MultipartFile]),
    [_browserEncode]: dart.fnType(core.String, [core.String]),
    [_boundaryString]: dart.fnType(core.String, [])
  }));
  dart.setGetterSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getGetters(multipart_request.MultipartRequest.__proto__),
    contentLength: core.int
  }));
  dart.setLibraryUri(multipart_request.MultipartRequest, I[2]);
  dart.setFieldSignature(multipart_request.MultipartRequest, () => ({
    __proto__: dart.getFields(multipart_request.MultipartRequest.__proto__),
    fields: dart.finalFieldType(core.Map$(core.String, core.String)),
    files: dart.finalFieldType(core.List$(multipart_file.MultipartFile))
  }));
  dart.defineLazy(multipart_request.MultipartRequest, {
    /*multipart_request.MultipartRequest._boundaryLength*/get _boundaryLength() {
      return 70;
    },
    /*multipart_request.MultipartRequest._random*/get _random() {
      return math.Random.new();
    }
  }, false);
  dart.defineLazy(multipart_request, {
    /*multipart_request._newlineRegExp*/get _newlineRegExp() {
      return core.RegExp.new("\\r\\n|\\r|\\n");
    }
  }, false);
  var stream$ = dart.privateName(streamed_response, "StreamedResponse.stream");
  var request$0 = dart.privateName(base_response, "BaseResponse.request");
  var statusCode$ = dart.privateName(base_response, "BaseResponse.statusCode");
  var reasonPhrase$ = dart.privateName(base_response, "BaseResponse.reasonPhrase");
  var contentLength$ = dart.privateName(base_response, "BaseResponse.contentLength");
  var headers$ = dart.privateName(base_response, "BaseResponse.headers");
  var isRedirect$ = dart.privateName(base_response, "BaseResponse.isRedirect");
  var persistentConnection$ = dart.privateName(base_response, "BaseResponse.persistentConnection");
  base_response.BaseResponse = class BaseResponse extends core.Object {
    get request() {
      return this[request$0];
    }
    set request(value) {
      super.request = value;
    }
    get statusCode() {
      return this[statusCode$];
    }
    set statusCode(value) {
      super.statusCode = value;
    }
    get reasonPhrase() {
      return this[reasonPhrase$];
    }
    set reasonPhrase(value) {
      super.reasonPhrase = value;
    }
    get contentLength() {
      return this[contentLength$];
    }
    set contentLength(value) {
      super.contentLength = value;
    }
    get headers() {
      return this[headers$];
    }
    set headers(value) {
      super.headers = value;
    }
    get isRedirect() {
      return this[isRedirect$];
    }
    set isRedirect(value) {
      super.isRedirect = value;
    }
    get persistentConnection() {
      return this[persistentConnection$];
    }
    set persistentConnection(value) {
      super.persistentConnection = value;
    }
  };
  (base_response.BaseResponse.new = function(statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[3] || CT.C3;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[statusCode$] = statusCode;
    this[contentLength$] = contentLength;
    this[request$0] = request;
    this[headers$] = headers;
    this[isRedirect$] = isRedirect;
    this[persistentConnection$] = persistentConnection;
    this[reasonPhrase$] = reasonPhrase;
    if (this.statusCode < 100) {
      dart.throw(new core.ArgumentError.new("Invalid status code " + dart.str(this.statusCode) + "."));
    } else if (this.contentLength != null && dart.nullCheck(this.contentLength) < 0) {
      dart.throw(new core.ArgumentError.new("Invalid content length " + dart.str(this.contentLength) + "."));
    }
  }).prototype = base_response.BaseResponse.prototype;
  dart.addTypeTests(base_response.BaseResponse);
  dart.addTypeCaches(base_response.BaseResponse);
  dart.setLibraryUri(base_response.BaseResponse, I[3]);
  dart.setFieldSignature(base_response.BaseResponse, () => ({
    __proto__: dart.getFields(base_response.BaseResponse.__proto__),
    request: dart.finalFieldType(dart.nullable(base_request.BaseRequest)),
    statusCode: dart.finalFieldType(core.int),
    reasonPhrase: dart.finalFieldType(dart.nullable(core.String)),
    contentLength: dart.finalFieldType(dart.nullable(core.int)),
    headers: dart.finalFieldType(core.Map$(core.String, core.String)),
    isRedirect: dart.finalFieldType(core.bool),
    persistentConnection: dart.finalFieldType(core.bool)
  }));
  streamed_response.StreamedResponse = class StreamedResponse extends base_response.BaseResponse {
    get stream() {
      return this[stream$];
    }
    set stream(value) {
      super.stream = value;
    }
  };
  (streamed_response.StreamedResponse.new = function(stream, statusCode, opts) {
    let contentLength = opts && 'contentLength' in opts ? opts.contentLength : null;
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[3] || CT.C3;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[stream$] = utils.toByteStream(stream);
    streamed_response.StreamedResponse.__proto__.new.call(this, statusCode, {contentLength: contentLength, request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = streamed_response.StreamedResponse.prototype;
  dart.addTypeTests(streamed_response.StreamedResponse);
  dart.addTypeCaches(streamed_response.StreamedResponse);
  dart.setLibraryUri(streamed_response.StreamedResponse, I[4]);
  dart.setFieldSignature(streamed_response.StreamedResponse, () => ({
    __proto__: dart.getFields(streamed_response.StreamedResponse.__proto__),
    stream: dart.finalFieldType(byte_stream.ByteStream)
  }));
  var _sendUnstreamed = dart.privateName(base_client, "_sendUnstreamed");
  var _checkResponseSuccess = dart.privateName(base_client, "_checkResponseSuccess");
  base_client.BaseClient = class BaseClient extends core.Object {
    head(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("HEAD", url, headers);
    }
    get(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return this[_sendUnstreamed]("GET", url, headers);
    }
    post(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("POST", url, headers, body, encoding);
    }
    put(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PUT", url, headers, body, encoding);
    }
    patch(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("PATCH", url, headers, body, encoding);
    }
    delete(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      let body = opts && 'body' in opts ? opts.body : null;
      let encoding = opts && 'encoding' in opts ? opts.encoding : null;
      return this[_sendUnstreamed]("DELETE", url, headers, body, encoding);
    }
    read(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(core.String, (function* read() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.body;
      }).bind(this));
    }
    readBytes(url, opts) {
      let headers = opts && 'headers' in opts ? opts.headers : null;
      return async.async(typed_data.Uint8List, (function* readBytes() {
        let response = (yield this.get(url, {headers: headers}));
        this[_checkResponseSuccess](url, response);
        return response.bodyBytes;
      }).bind(this));
    }
    [_sendUnstreamed](method, url, headers, body = null, encoding = null) {
      return async.async(response$.Response, (function* _sendUnstreamed() {
        let request = new request$.Request.new(method, url);
        if (headers != null) request.headers[$addAll](headers);
        if (encoding != null) request.encoding = encoding;
        if (body != null) {
          if (typeof body == 'string') {
            request.body = body;
          } else if (core.List.is(body)) {
            request.bodyBytes = body[$cast](core.int);
          } else if (core.Map.is(body)) {
            request.bodyFields = body[$cast](core.String, core.String);
          } else {
            dart.throw(new core.ArgumentError.new("Invalid request body \"" + dart.str(body) + "\"."));
          }
        }
        return response$.Response.fromStream(yield this.send(request));
      }).bind(this));
    }
    [_checkResponseSuccess](url, response) {
      if (response.statusCode < 400) return;
      let message = "Request to " + dart.str(url) + " failed with status " + dart.str(response.statusCode);
      if (response.reasonPhrase != null) {
        message = message + ": " + dart.str(response.reasonPhrase);
      }
      dart.throw(new exception.ClientException.new(message + ".", url));
    }
    close() {
    }
  };
  (base_client.BaseClient.new = function() {
    ;
  }).prototype = base_client.BaseClient.prototype;
  dart.addTypeTests(base_client.BaseClient);
  dart.addTypeCaches(base_client.BaseClient);
  base_client.BaseClient[dart.implements] = () => [client$.Client];
  dart.setMethodSignature(base_client.BaseClient, () => ({
    __proto__: dart.getMethods(base_client.BaseClient.__proto__),
    head: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    get: dart.fnType(async.Future$(response$.Response), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    post: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    put: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    patch: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    delete: dart.fnType(async.Future$(response$.Response), [core.Uri], {body: dart.nullable(core.Object), encoding: dart.nullable(convert.Encoding), headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    read: dart.fnType(async.Future$(core.String), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    readBytes: dart.fnType(async.Future$(typed_data.Uint8List), [core.Uri], {headers: dart.nullable(core.Map$(core.String, core.String))}, {}),
    [_sendUnstreamed]: dart.fnType(async.Future$(response$.Response), [core.String, core.Uri, dart.nullable(core.Map$(core.String, core.String))], [dart.dynamic, dart.nullable(convert.Encoding)]),
    [_checkResponseSuccess]: dart.fnType(dart.void, [core.Uri, response$.Response]),
    close: dart.fnType(dart.void, [])
  }));
  dart.setLibraryUri(base_client.BaseClient, I[5]);
  var bodyBytes$ = dart.privateName(response$, "Response.bodyBytes");
  response$.Response = class Response extends base_response.BaseResponse {
    get bodyBytes() {
      return this[bodyBytes$];
    }
    set bodyBytes(value) {
      super.bodyBytes = value;
    }
    get body() {
      return response$._encodingForHeaders(this.headers).decode(this.bodyBytes);
    }
    static fromStream(response) {
      return async.async(response$.Response, function* fromStream() {
        let body = (yield response.stream.toBytes());
        return new response$.Response.bytes(body, response.statusCode, {request: response.request, headers: response.headers, isRedirect: response.isRedirect, persistentConnection: response.persistentConnection, reasonPhrase: response.reasonPhrase});
      });
    }
  };
  (response$.Response.new = function(body, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[3] || CT.C3;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    response$.Response.bytes.call(this, response$._encodingForHeaders(headers).encode(body), statusCode, {request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
  }).prototype = response$.Response.prototype;
  (response$.Response.bytes = function(bodyBytes, statusCode, opts) {
    let request = opts && 'request' in opts ? opts.request : null;
    let headers = opts && 'headers' in opts ? opts.headers : C[3] || CT.C3;
    let isRedirect = opts && 'isRedirect' in opts ? opts.isRedirect : false;
    let persistentConnection = opts && 'persistentConnection' in opts ? opts.persistentConnection : true;
    let reasonPhrase = opts && 'reasonPhrase' in opts ? opts.reasonPhrase : null;
    this[bodyBytes$] = utils.toUint8List(bodyBytes);
    response$.Response.__proto__.new.call(this, statusCode, {contentLength: bodyBytes[$length], request: request, headers: headers, isRedirect: isRedirect, persistentConnection: persistentConnection, reasonPhrase: reasonPhrase});
    ;
  }).prototype = response$.Response.prototype;
  dart.addTypeTests(response$.Response);
  dart.addTypeCaches(response$.Response);
  dart.setGetterSignature(response$.Response, () => ({
    __proto__: dart.getGetters(response$.Response.__proto__),
    body: core.String
  }));
  dart.setLibraryUri(response$.Response, I[6]);
  dart.setFieldSignature(response$.Response, () => ({
    __proto__: dart.getFields(response$.Response.__proto__),
    bodyBytes: dart.finalFieldType(typed_data.Uint8List)
  }));
  response$._encodingForHeaders = function _encodingForHeaders(headers) {
    return utils.encodingForCharset(response$._contentTypeForHeaders(headers).parameters[$_get]("charset"));
  };
  response$._contentTypeForHeaders = function _contentTypeForHeaders(headers) {
    let contentType = headers[$_get]("content-type");
    if (contentType != null) return media_type.MediaType.parse(contentType);
    return new media_type.MediaType.new("application", "octet-stream");
  };
  var _defaultEncoding = dart.privateName(request$, "_defaultEncoding");
  var _bodyBytes = dart.privateName(request$, "_bodyBytes");
  var _contentType = dart.privateName(request$, "_contentType");
  var _checkFinalized$ = dart.privateName(request$, "_checkFinalized");
  request$.Request = class Request extends base_request.BaseRequest {
    get contentLength() {
      return this.bodyBytes[$length];
    }
    set contentLength(value) {
      dart.throw(new core.UnsupportedError.new("Cannot set the contentLength property of " + "non-streaming Request objects."));
    }
    get encoding() {
      if (this[_contentType] == null || !dart.nullCheck(this[_contentType]).parameters[$containsKey]("charset")) {
        return this[_defaultEncoding];
      }
      return utils.requiredEncodingForCharset(dart.nullCheck(dart.nullCheck(this[_contentType]).parameters[$_get]("charset")));
    }
    set encoding(value) {
      this[_checkFinalized$]();
      this[_defaultEncoding] = value;
      let contentType = this[_contentType];
      if (contentType == null) return;
      this[_contentType] = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", value.name])});
    }
    get bodyBytes() {
      return this[_bodyBytes];
    }
    set bodyBytes(value) {
      this[_checkFinalized$]();
      this[_bodyBytes] = utils.toUint8List(value);
    }
    get body() {
      return this.encoding.decode(this.bodyBytes);
    }
    set body(value) {
      this.bodyBytes = this.encoding.encode(value);
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("text", "plain", new (T.IdentityMapOfString$String()).from(["charset", this.encoding.name]));
      } else if (!contentType.parameters[$containsKey]("charset")) {
        this[_contentType] = contentType.change({parameters: new (T.IdentityMapOfString$String()).from(["charset", this.encoding.name])});
      }
    }
    get bodyFields() {
      let contentType = this[_contentType];
      if (contentType == null || contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot access the body fields of a Request without " + "content-type \"application/x-www-form-urlencoded\"."));
      }
      return core.Uri.splitQueryString(this.body, {encoding: this.encoding});
    }
    set bodyFields(fields) {
      let contentType = this[_contentType];
      if (contentType == null) {
        this[_contentType] = new media_type.MediaType.new("application", "x-www-form-urlencoded");
      } else if (contentType.mimeType !== "application/x-www-form-urlencoded") {
        dart.throw(new core.StateError.new("Cannot set the body fields of a Request with " + "content-type \"" + contentType.mimeType + "\"."));
      }
      this.body = utils.mapToQuery(fields, {encoding: this.encoding});
    }
    finalize() {
      super.finalize();
      return byte_stream.ByteStream.fromBytes(this.bodyBytes);
    }
    get [_contentType]() {
      let contentType = this.headers[$_get]("content-type");
      if (contentType == null) return null;
      return media_type.MediaType.parse(contentType);
    }
    set [_contentType](value) {
      if (value == null) {
        this.headers[$remove]("content-type");
      } else {
        this.headers[$_set]("content-type", dart.toString(value));
      }
    }
    [_checkFinalized$]() {
      if (!this.finalized) return;
      dart.throw(new core.StateError.new("Can't modify a finalized Request."));
    }
  };
  (request$.Request.new = function(method, url) {
    this[_defaultEncoding] = convert.utf8;
    this[_bodyBytes] = _native_typed_data.NativeUint8List.new(0);
    request$.Request.__proto__.new.call(this, method, url);
    ;
  }).prototype = request$.Request.prototype;
  dart.addTypeTests(request$.Request);
  dart.addTypeCaches(request$.Request);
  dart.setMethodSignature(request$.Request, () => ({
    __proto__: dart.getMethods(request$.Request.__proto__),
    [_checkFinalized$]: dart.fnType(dart.void, [])
  }));
  dart.setGetterSignature(request$.Request, () => ({
    __proto__: dart.getGetters(request$.Request.__proto__),
    contentLength: core.int,
    encoding: convert.Encoding,
    bodyBytes: typed_data.Uint8List,
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setSetterSignature(request$.Request, () => ({
    __proto__: dart.getSetters(request$.Request.__proto__),
    encoding: convert.Encoding,
    bodyBytes: core.List$(core.int),
    body: core.String,
    bodyFields: core.Map$(core.String, core.String),
    [_contentType]: dart.nullable(media_type.MediaType)
  }));
  dart.setLibraryUri(request$.Request, I[7]);
  dart.setFieldSignature(request$.Request, () => ({
    __proto__: dart.getFields(request$.Request.__proto__),
    [_defaultEncoding]: dart.fieldType(convert.Encoding),
    [_bodyBytes]: dart.fieldType(typed_data.Uint8List)
  }));
  client$.Client = class Client extends core.Object {
    static new() {
      return browser_client.createClient();
    }
  };
  (client$.Client[dart.mixinNew] = function() {
  }).prototype = client$.Client.prototype;
  dart.addTypeTests(client$.Client);
  dart.addTypeCaches(client$.Client);
  dart.setLibraryUri(client$.Client, I[8]);
  var withCredentials = dart.privateName(browser_client, "BrowserClient.withCredentials");
  var _xhrs = dart.privateName(browser_client, "_xhrs");
  browser_client.BrowserClient = class BrowserClient extends base_client.BaseClient {
    get withCredentials() {
      return this[withCredentials];
    }
    set withCredentials(value) {
      this[withCredentials] = value;
    }
    send(request) {
      return async.async(streamed_response.StreamedResponse, (function* send() {
        let t1;
        let bytes = (yield request.finalize().toBytes());
        let xhr = html.HttpRequest.new();
        this[_xhrs].add(xhr);
        t1 = xhr;
        (() => {
          t1.open(request.method, dart.str(request.url), {async: true});
          t1[$responseType] = "arraybuffer";
          t1.withCredentials = this.withCredentials;
          return t1;
        })();
        request.headers[$forEach](dart.bind(xhr, 'setRequestHeader'));
        let completer = T.CompleterOfStreamedResponse().new();
        async.unawaited(xhr[$onLoad].first.then(dart.void, dart.fn(_ => {
          let body = typed_data.ByteBuffer.as(xhr[$response])[$asUint8List]();
          completer.complete(new streamed_response.StreamedResponse.new(byte_stream.ByteStream.fromBytes(body), dart.nullCheck(xhr.status), {contentLength: body[$length], request: request, headers: xhr[$responseHeaders], reasonPhrase: xhr.statusText}));
        }, T.ProgressEventToNull())));
        async.unawaited(xhr[$onError].first.then(dart.void, dart.fn(_ => {
          completer.completeError(new exception.ClientException.new("XMLHttpRequest error.", request.url), core.StackTrace.current);
        }, T.ProgressEventToNull())));
        xhr.send(bytes);
        try {
          return yield completer.future;
        } finally {
          this[_xhrs].remove(xhr);
        }
      }).bind(this));
    }
    close() {
      for (let xhr of this[_xhrs]) {
        xhr.abort();
      }
    }
  };
  (browser_client.BrowserClient.new = function() {
    this[_xhrs] = T.LinkedHashSetOfHttpRequest().new();
    this[withCredentials] = false;
    ;
  }).prototype = browser_client.BrowserClient.prototype;
  dart.addTypeTests(browser_client.BrowserClient);
  dart.addTypeCaches(browser_client.BrowserClient);
  dart.setMethodSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getMethods(browser_client.BrowserClient.__proto__),
    send: dart.fnType(async.Future$(streamed_response.StreamedResponse), [base_request.BaseRequest])
  }));
  dart.setLibraryUri(browser_client.BrowserClient, I[9]);
  dart.setFieldSignature(browser_client.BrowserClient, () => ({
    __proto__: dart.getFields(browser_client.BrowserClient.__proto__),
    [_xhrs]: dart.finalFieldType(core.Set$(html.HttpRequest)),
    withCredentials: dart.fieldType(core.bool)
  }));
  browser_client.createClient = function createClient() {
    return new browser_client.BrowserClient.new();
  };
  http.head = function head(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.head(url, {headers: headers}), T.ClientToFutureOfResponse()));
  };
  http.get = function get(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(response$.Response, dart.fn(client => client.get(url, {headers: headers}), T.ClientToFutureOfResponse()));
  };
  http.post = function post(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.post(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.put = function put(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.put(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.patch = function patch(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.patch(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.delete = function $delete(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    let body = opts && 'body' in opts ? opts.body : null;
    let encoding = opts && 'encoding' in opts ? opts.encoding : null;
    return http._withClient(response$.Response, dart.fn(client => client.delete(url, {headers: headers, body: body, encoding: encoding}), T.ClientToFutureOfResponse()));
  };
  http.read = function read(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(core.String, dart.fn(client => client.read(url, {headers: headers}), T.ClientToFutureOfString()));
  };
  http.readBytes = function readBytes(url, opts) {
    let headers = opts && 'headers' in opts ? opts.headers : null;
    return http._withClient(typed_data.Uint8List, dart.fn(client => client.readBytes(url, {headers: headers}), T.ClientToFutureOfUint8List()));
  };
  http._withClient = function _withClient(T, fn) {
    return async.async(T, function* _withClient() {
      let client = client$.Client.new();
      try {
        return yield fn(client);
      } finally {
        client.close();
      }
    });
  };
  var _controller = dart.privateName(streamed_request, "_controller");
  streamed_request.StreamedRequest = class StreamedRequest extends base_request.BaseRequest {
    get sink() {
      return this[_controller].sink;
    }
    finalize() {
      super.finalize();
      return new byte_stream.ByteStream.new(this[_controller].stream);
    }
  };
  (streamed_request.StreamedRequest.new = function(method, url) {
    this[_controller] = T.StreamControllerOfListOfint().new({sync: true});
    streamed_request.StreamedRequest.__proto__.new.call(this, method, url);
    ;
  }).prototype = streamed_request.StreamedRequest.prototype;
  dart.addTypeTests(streamed_request.StreamedRequest);
  dart.addTypeCaches(streamed_request.StreamedRequest);
  dart.setGetterSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getGetters(streamed_request.StreamedRequest.__proto__),
    sink: async.EventSink$(core.List$(core.int))
  }));
  dart.setLibraryUri(streamed_request.StreamedRequest, I[10]);
  dart.setFieldSignature(streamed_request.StreamedRequest, () => ({
    __proto__: dart.getFields(streamed_request.StreamedRequest.__proto__),
    [_controller]: dart.finalFieldType(async.StreamController$(core.List$(core.int)))
  }));
  dart.trackLibraries("packages/http/http", {
    "package:http/src/multipart_file_stub.dart": multipart_file_stub,
    "package:http/src/multipart_file.dart": multipart_file,
    "package:http/src/multipart_request.dart": multipart_request,
    "package:http/src/base_request.dart": base_request,
    "package:http/src/streamed_response.dart": streamed_response,
    "package:http/src/base_response.dart": base_response,
    "package:http/src/base_client.dart": base_client,
    "package:http/src/response.dart": response$,
    "package:http/src/request.dart": request$,
    "package:http/src/client.dart": client$,
    "package:http/src/browser_client.dart": browser_client,
    "package:http/http.dart": http,
    "package:http/src/streamed_request.dart": streamed_request
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["src/multipart_file_stub.dart","src/multipart_file.dart","src/base_request.dart","src/multipart_request.dart","src/base_response.dart","src/streamed_response.dart","src/base_client.dart","src/response.dart","src/request.dart","src/client.dart","src/browser_client.dart","http.dart","src/streamed_request.dart"],"names":[],"mappings":"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","file":"http.sound.ddc.js"}');
  // Exports:
  return {
    src__multipart_file_stub: multipart_file_stub,
    src__multipart_file: multipart_file,
    src__multipart_request: multipart_request,
    src__base_request: base_request,
    src__streamed_response: streamed_response,
    src__base_response: base_response,
    src__base_client: base_client,
    src__response: response$,
    src__request: request$,
    src__client: client$,
    src__browser_client: browser_client,
    http: http,
    src__streamed_request: streamed_request
  };
}));

//# sourceMappingURL=http.sound.ddc.js.map
