define(['dart_sdk', 'packages/http/http'], (function load__web__dart__clase__global(dart_sdk, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const _js_helper = dart_sdk._js_helper;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const html = dart_sdk.html;
  const _internal = dart_sdk._internal;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  var ubf_server = Object.create(dart.library);
  var optiune = Object.create(dart.library);
  var global = Object.create(dart.library);
  var ubf_user = Object.create(dart.library);
  var ubf_document = Object.create(dart.library);
  var tabelare = Object.create(dart.library);
  var loader = Object.create(dart.library);
  var load_detalii = Object.create(dart.library);
  var main = Object.create(dart.library);
  var meniu = Object.create(dart.library);
  var $keys = dartx.keys;
  var $toList = dartx.toList;
  var $values = dartx.values;
  var $insertRow = dartx.insertRow;
  var $length = dartx.length;
  var $insertCell = dartx.insertCell;
  var $text = dartx.text;
  var $_get = dartx._get;
  var $toString = dartx.toString;
  var $children = dartx.children;
  var $clear = dartx.clear;
  var $add = dartx.add;
  var $onClick = dartx.onClick;
  var $innerHtml = dartx.innerHtml;
  var $replaceWith = dartx.replaceWith;
  var $insertAdjacentHtml = dartx.insertAdjacentHtml;
  var $hidden = dartx.hidden;
  var $location = dartx.location;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))(),
    IdentityMapOfString$dynamic: () => (T.IdentityMapOfString$dynamic = dart.constFn(_js_helper.IdentityMap$(core.String, dart.dynamic)))(),
    VoidToUListElement: () => (T.VoidToUListElement = dart.constFn(dart.fnType(html.UListElement, [])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    MapOfString$dynamic: () => (T.MapOfString$dynamic = dart.constFn(core.Map$(core.String, dart.dynamic)))(),
    MouseEventTovoid: () => (T.MouseEventTovoid = dart.constFn(dart.fnType(dart.void, [html.MouseEvent])))(),
    FutureOfNull: () => (T.FutureOfNull = dart.constFn(async.Future$(core.Null)))(),
    StringToFutureOfNull: () => (T.StringToFutureOfNull = dart.constFn(dart.fnType(T.FutureOfNull(), [core.String])))(),
    StringToNull: () => (T.StringToNull = dart.constFn(dart.fnType(core.Null, [core.String])))(),
    HttpRequestToNull: () => (T.HttpRequestToNull = dart.constFn(dart.fnType(core.Null, [html.HttpRequest])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.cd",
        index: 0
      });
    },
    get C1() {
      return C[1] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.rd",
        index: 1
      });
    },
    get C2() {
      return C[2] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.ud",
        index: 2
      });
    },
    get C3() {
      return C[3] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.dd",
        index: 3
      });
    },
    get C4() {
      return C[4] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.cu",
        index: 4
      });
    },
    get C5() {
      return C[5] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.ru",
        index: 5
      });
    },
    get C6() {
      return C[6] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.uu",
        index: 6
      });
    },
    get C7() {
      return C[7] = dart.const({
        __proto__: optiune.Optiune.prototype,
        [_name$]: "Optiune.du",
        index: 7
      });
    },
    get C8() {
      return C[8] = dart.constList([C[0] || CT.C0, C[1] || CT.C1, C[2] || CT.C2, C[3] || CT.C3, C[4] || CT.C4, C[5] || CT.C5, C[6] || CT.C6, C[7] || CT.C7], optiune.Optiune);
    },
    get C9() {
      return C[9] = dart.const({
        __proto__: core.Duration.prototype,
        [Duration__duration]: 50000
      });
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "org-dartlang-app:///web/dart/clase/ubf_server.dart",
    "org-dartlang-app:///web/dart/clase/optiune.dart",
    "org-dartlang-app:///web/dart/clase/global.dart",
    "org-dartlang-app:///web/dart/clase/ubf_user.dart",
    "org-dartlang-app:///web/dart/clase/ubf_document.dart",
    "org-dartlang-app:///web/dart/clase/tabelare.dart",
    "org-dartlang-app:///web/dart/clase/loader.dart",
    "org-dartlang-app:///web/dart/clase/load_detalii.dart",
    "org-dartlang-app:///web/meniu.dart"
  ];
  var allData = dart.privateName(ubf_server, "UBFServer.allData");
  var jsonBody = dart.privateName(ubf_server, "UBFServer.jsonBody");
  var _headers = dart.privateName(ubf_server, "_headers");
  ubf_server.UBFServer = class UBFServer extends core.Object {
    get allData() {
      return this[allData];
    }
    set allData(value) {
      this[allData] = value;
    }
    get jsonBody() {
      return this[jsonBody];
    }
    set jsonBody(value) {
      this[jsonBody] = value;
    }
    queryServer() {
      return async.async(dart.dynamic, (function* queryServer() {
        let completer = async.Completer.new();
        let _obj = null;
        _obj = new (T.IdentityMapOfString$dynamic()).from(["bazaDate", "tbl_retete", "opt", "rd"]);
        let _js = convert.jsonEncode(_obj);
        let _url = global.Global.url;
        let response = (yield http.get(core.Uri.parse(_url), {headers: this[_headers]}));
        if (response.statusCode === 200) {
          let responseBody = response.body;
          completer.complete(responseBody);
        }
        return completer.future;
      }).bind(this));
    }
  };
  (ubf_server.UBFServer.new = function() {
    this[allData] = new global.Global.new();
    this[jsonBody] = [];
    this[_headers] = new (T.IdentityMapOfString$String()).from(["Accept", "application/json", "Access-Control-Allow-Origin", "Content-Type, Authorization"]);
    ;
  }).prototype = ubf_server.UBFServer.prototype;
  dart.addTypeTests(ubf_server.UBFServer);
  dart.addTypeCaches(ubf_server.UBFServer);
  dart.setMethodSignature(ubf_server.UBFServer, () => ({
    __proto__: dart.getMethods(ubf_server.UBFServer.__proto__),
    queryServer: dart.fnType(async.Future, [])
  }));
  dart.setLibraryUri(ubf_server.UBFServer, I[0]);
  dart.setFieldSignature(ubf_server.UBFServer, () => ({
    __proto__: dart.getFields(ubf_server.UBFServer.__proto__),
    allData: dart.fieldType(global.Global),
    jsonBody: dart.fieldType(core.List),
    [_headers]: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  var _name$ = dart.privateName(optiune, "_name");
  optiune.Optiune = class Optiune extends core.Object {
    toString() {
      return this[_name$];
    }
  };
  (optiune.Optiune.new = function(index, _name) {
    this.index = index;
    this[_name$] = _name;
    ;
  }).prototype = optiune.Optiune.prototype;
  dart.addTypeTests(optiune.Optiune);
  dart.addTypeCaches(optiune.Optiune);
  optiune.Optiune[dart.implements] = () => [core.Enum];
  dart.setLibraryUri(optiune.Optiune, I[1]);
  dart.setFieldSignature(optiune.Optiune, () => ({
    __proto__: dart.getFields(optiune.Optiune.__proto__),
    index: dart.finalFieldType(core.int),
    [_name$]: dart.finalFieldType(core.String)
  }));
  dart.defineExtensionMethods(optiune.Optiune, ['toString']);
  optiune.Optiune.cd = C[0] || CT.C0;
  optiune.Optiune.rd = C[1] || CT.C1;
  optiune.Optiune.ud = C[2] || CT.C2;
  optiune.Optiune.dd = C[3] || CT.C3;
  optiune.Optiune.cu = C[4] || CT.C4;
  optiune.Optiune.ru = C[5] || CT.C5;
  optiune.Optiune.uu = C[6] || CT.C6;
  optiune.Optiune.du = C[7] || CT.C7;
  optiune.Optiune.values = C[8] || CT.C8;
  var _ubfUser = dart.privateName(global, "_ubfUser");
  var _ubfDocument = dart.privateName(global, "_ubfDocument");
  global.Global = class Global extends core.Object {
    get ubfDocument() {
      return this[_ubfDocument];
    }
    get ubfUser() {
      return this[_ubfUser];
    }
    set ubfDocument(d) {
      return this[_ubfDocument] = d;
    }
    set ubfUser(u) {
      return this[_ubfUser] = u;
    }
  };
  (global.Global.new = function() {
    this[_ubfUser] = ubf_user.UBFUser.as(dart.wrapType(ubf_user.UBFUser));
    this[_ubfDocument] = ubf_document.UBFDocument.as(dart.wrapType(ubf_document.UBFDocument));
    ;
  }).prototype = global.Global.prototype;
  dart.addTypeTests(global.Global);
  dart.addTypeCaches(global.Global);
  dart.setGetterSignature(global.Global, () => ({
    __proto__: dart.getGetters(global.Global.__proto__),
    ubfDocument: ubf_document.UBFDocument,
    ubfUser: ubf_user.UBFUser
  }));
  dart.setSetterSignature(global.Global, () => ({
    __proto__: dart.getSetters(global.Global.__proto__),
    ubfDocument: ubf_document.UBFDocument,
    ubfUser: ubf_user.UBFUser
  }));
  dart.setLibraryUri(global.Global, I[2]);
  dart.setFieldSignature(global.Global, () => ({
    __proto__: dart.getFields(global.Global.__proto__),
    [_ubfUser]: dart.fieldType(ubf_user.UBFUser),
    [_ubfDocument]: dart.fieldType(ubf_document.UBFDocument)
  }));
  dart.defineLazy(global.Global, {
    /*global.Global.optiune*/get optiune() {
      return optiune.Optiune.as(dart.wrapType(optiune.Optiune));
    },
    set optiune(_) {},
    /*global.Global.url*/get url() {
      return "http://localhost/servPF.php?x={\"obj\":\"pf\"}";
    },
    set url(_) {},
    /*global.Global.bazaDate*/get bazaDate() {
      return null;
    },
    set bazaDate(_) {}
  }, false);
  var idx$ = dart.privateName(ubf_user, "UBFUser.idx");
  var numeUser$ = dart.privateName(ubf_user, "UBFUser.numeUser");
  var codUser$ = dart.privateName(ubf_user, "UBFUser.codUser");
  var nivelUser$ = dart.privateName(ubf_user, "UBFUser.nivelUser");
  var activUser$ = dart.privateName(ubf_user, "UBFUser.activUser");
  var adresaUser$ = dart.privateName(ubf_user, "UBFUser.adresaUser");
  var telUser$ = dart.privateName(ubf_user, "UBFUser.telUser");
  var emailUser$ = dart.privateName(ubf_user, "UBFUser.emailUser");
  var functiaUser$ = dart.privateName(ubf_user, "UBFUser.functiaUser");
  var departamUser$ = dart.privateName(ubf_user, "UBFUser.departamUser");
  var obsUser$ = dart.privateName(ubf_user, "UBFUser.obsUser");
  ubf_user.UBFUser = class UBFUser extends core.Object {
    get idx() {
      return this[idx$];
    }
    set idx(value) {
      this[idx$] = value;
    }
    get numeUser() {
      return this[numeUser$];
    }
    set numeUser(value) {
      this[numeUser$] = value;
    }
    get codUser() {
      return this[codUser$];
    }
    set codUser(value) {
      this[codUser$] = value;
    }
    get nivelUser() {
      return this[nivelUser$];
    }
    set nivelUser(value) {
      this[nivelUser$] = value;
    }
    get activUser() {
      return this[activUser$];
    }
    set activUser(value) {
      this[activUser$] = value;
    }
    get adresaUser() {
      return this[adresaUser$];
    }
    set adresaUser(value) {
      this[adresaUser$] = value;
    }
    get telUser() {
      return this[telUser$];
    }
    set telUser(value) {
      this[telUser$] = value;
    }
    get emailUser() {
      return this[emailUser$];
    }
    set emailUser(value) {
      this[emailUser$] = value;
    }
    get functiaUser() {
      return this[functiaUser$];
    }
    set functiaUser(value) {
      this[functiaUser$] = value;
    }
    get departamUser() {
      return this[departamUser$];
    }
    set departamUser(value) {
      this[departamUser$] = value;
    }
    get obsUser() {
      return this[obsUser$];
    }
    set obsUser(value) {
      this[obsUser$] = value;
    }
  };
  (ubf_user.UBFUser.new = function(opts) {
    let idx = opts && 'idx' in opts ? opts.idx : null;
    let numeUser = opts && 'numeUser' in opts ? opts.numeUser : null;
    let codUser = opts && 'codUser' in opts ? opts.codUser : null;
    let activUser = opts && 'activUser' in opts ? opts.activUser : null;
    let nivelUser = opts && 'nivelUser' in opts ? opts.nivelUser : null;
    let adresaUser = opts && 'adresaUser' in opts ? opts.adresaUser : null;
    let emailUser = opts && 'emailUser' in opts ? opts.emailUser : null;
    let functiaUser = opts && 'functiaUser' in opts ? opts.functiaUser : null;
    let telUser = opts && 'telUser' in opts ? opts.telUser : null;
    let departamUser = opts && 'departamUser' in opts ? opts.departamUser : null;
    let obsUser = opts && 'obsUser' in opts ? opts.obsUser : null;
    this[idx$] = idx;
    this[numeUser$] = numeUser;
    this[codUser$] = codUser;
    this[activUser$] = activUser;
    this[nivelUser$] = nivelUser;
    this[adresaUser$] = adresaUser;
    this[emailUser$] = emailUser;
    this[functiaUser$] = functiaUser;
    this[telUser$] = telUser;
    this[departamUser$] = departamUser;
    this[obsUser$] = obsUser;
    ;
  }).prototype = ubf_user.UBFUser.prototype;
  dart.addTypeTests(ubf_user.UBFUser);
  dart.addTypeCaches(ubf_user.UBFUser);
  dart.setLibraryUri(ubf_user.UBFUser, I[3]);
  dart.setFieldSignature(ubf_user.UBFUser, () => ({
    __proto__: dart.getFields(ubf_user.UBFUser.__proto__),
    idx: dart.fieldType(dart.nullable(core.int)),
    numeUser: dart.fieldType(dart.nullable(core.String)),
    codUser: dart.fieldType(dart.nullable(core.String)),
    nivelUser: dart.fieldType(dart.nullable(core.int)),
    activUser: dart.fieldType(dart.nullable(core.bool)),
    adresaUser: dart.fieldType(dart.nullable(core.String)),
    telUser: dart.fieldType(dart.nullable(core.String)),
    emailUser: dart.fieldType(dart.nullable(core.String)),
    functiaUser: dart.fieldType(dart.nullable(core.String)),
    departamUser: dart.fieldType(dart.nullable(core.String)),
    obsUser: dart.fieldType(dart.nullable(core.String))
  }));
  var idx$0 = dart.privateName(ubf_document, "UBFDocument.idx");
  var dataDoc$ = dart.privateName(ubf_document, "UBFDocument.dataDoc");
  var nrDoc$ = dart.privateName(ubf_document, "UBFDocument.nrDoc");
  var emitentDoc$ = dart.privateName(ubf_document, "UBFDocument.emitentDoc");
  var destinatarDoc$ = dart.privateName(ubf_document, "UBFDocument.destinatarDoc");
  var tipDoc$ = dart.privateName(ubf_document, "UBFDocument.tipDoc");
  var continutDoc$ = dart.privateName(ubf_document, "UBFDocument.continutDoc");
  var dateEmitentDoc$ = dart.privateName(ubf_document, "UBFDocument.dateEmitentDoc");
  var dateDestinatarDoc$ = dart.privateName(ubf_document, "UBFDocument.dateDestinatarDoc");
  var obsDoc$ = dart.privateName(ubf_document, "UBFDocument.obsDoc");
  ubf_document.UBFDocument = class UBFDocument extends core.Object {
    get idx() {
      return this[idx$0];
    }
    set idx(value) {
      this[idx$0] = value;
    }
    get dataDoc() {
      return this[dataDoc$];
    }
    set dataDoc(value) {
      this[dataDoc$] = value;
    }
    get nrDoc() {
      return this[nrDoc$];
    }
    set nrDoc(value) {
      this[nrDoc$] = value;
    }
    get emitentDoc() {
      return this[emitentDoc$];
    }
    set emitentDoc(value) {
      this[emitentDoc$] = value;
    }
    get destinatarDoc() {
      return this[destinatarDoc$];
    }
    set destinatarDoc(value) {
      this[destinatarDoc$] = value;
    }
    get tipDoc() {
      return this[tipDoc$];
    }
    set tipDoc(value) {
      this[tipDoc$] = value;
    }
    get continutDoc() {
      return this[continutDoc$];
    }
    set continutDoc(value) {
      this[continutDoc$] = value;
    }
    get dateEmitentDoc() {
      return this[dateEmitentDoc$];
    }
    set dateEmitentDoc(value) {
      this[dateEmitentDoc$] = value;
    }
    get dateDestinatarDoc() {
      return this[dateDestinatarDoc$];
    }
    set dateDestinatarDoc(value) {
      this[dateDestinatarDoc$] = value;
    }
    get obsDoc() {
      return this[obsDoc$];
    }
    set obsDoc(value) {
      this[obsDoc$] = value;
    }
  };
  (ubf_document.UBFDocument.new = function(opts) {
    let idx = opts && 'idx' in opts ? opts.idx : null;
    let dataDoc = opts && 'dataDoc' in opts ? opts.dataDoc : null;
    let nrDoc = opts && 'nrDoc' in opts ? opts.nrDoc : null;
    let emitentDoc = opts && 'emitentDoc' in opts ? opts.emitentDoc : null;
    let destinatarDoc = opts && 'destinatarDoc' in opts ? opts.destinatarDoc : null;
    let tipDoc = opts && 'tipDoc' in opts ? opts.tipDoc : null;
    let continutDoc = opts && 'continutDoc' in opts ? opts.continutDoc : null;
    let dateEmitentDoc = opts && 'dateEmitentDoc' in opts ? opts.dateEmitentDoc : null;
    let dateDestinatarDoc = opts && 'dateDestinatarDoc' in opts ? opts.dateDestinatarDoc : null;
    let obsDoc = opts && 'obsDoc' in opts ? opts.obsDoc : null;
    this[idx$0] = idx;
    this[dataDoc$] = dataDoc;
    this[nrDoc$] = nrDoc;
    this[emitentDoc$] = emitentDoc;
    this[destinatarDoc$] = destinatarDoc;
    this[tipDoc$] = tipDoc;
    this[continutDoc$] = continutDoc;
    this[dateEmitentDoc$] = dateEmitentDoc;
    this[dateDestinatarDoc$] = dateDestinatarDoc;
    this[obsDoc$] = obsDoc;
    ;
  }).prototype = ubf_document.UBFDocument.prototype;
  dart.addTypeTests(ubf_document.UBFDocument);
  dart.addTypeCaches(ubf_document.UBFDocument);
  dart.setLibraryUri(ubf_document.UBFDocument, I[4]);
  dart.setFieldSignature(ubf_document.UBFDocument, () => ({
    __proto__: dart.getFields(ubf_document.UBFDocument.__proto__),
    idx: dart.fieldType(dart.nullable(core.int)),
    dataDoc: dart.fieldType(dart.nullable(core.DateTime)),
    nrDoc: dart.fieldType(dart.nullable(core.String)),
    emitentDoc: dart.fieldType(dart.nullable(core.String)),
    destinatarDoc: dart.fieldType(dart.nullable(core.String)),
    tipDoc: dart.fieldType(dart.nullable(core.String)),
    continutDoc: dart.fieldType(dart.nullable(core.String)),
    dateEmitentDoc: dart.fieldType(dart.nullable(core.String)),
    dateDestinatarDoc: dart.fieldType(dart.nullable(core.String)),
    obsDoc: dart.fieldType(dart.nullable(core.String))
  }));
  var table = dart.privateName(tabelare, "Tabelare.table");
  var row = dart.privateName(tabelare, "Tabelare.row");
  var cell = dart.privateName(tabelare, "Tabelare.cell");
  var _insertDataInTabel = dart.privateName(tabelare, "_insertDataInTabel");
  tabelare.Tabelare = class Tabelare extends core.Object {
    get table() {
      return this[table];
    }
    set table(value) {
      this[table] = value;
    }
    get row() {
      return this[row];
    }
    set row(value) {
      this[row] = value;
    }
    get cell() {
      return this[cell];
    }
    set cell(value) {
      this[cell] = value;
    }
    adauga(dateTabel, numeTabel, skipPoz) {
      numeTabel = "#" + numeTabel;
      let _tabel = html.TableElement.as(html.querySelector(numeTabel));
      let capTabel = dateTabel[$keys][$toList]();
      let infoTabel = dateTabel[$values][$toList]();
      this[_insertDataInTabel](_tabel, capTabel, skipPoz);
      this[_insertDataInTabel](_tabel, infoTabel, skipPoz);
    }
    [_insertDataInTabel](tabel, datele, skipPoz) {
      this.row = tabel[$insertRow](-1);
      for (let i = datele[$length] - 1; i >= skipPoz; i = i - 1) {
        this.cell = this.row[$insertCell](0);
        this.cell[$text] = dart.toString(datele[$_get](i));
      }
    }
  };
  (tabelare.Tabelare.new = function() {
    this[table] = html.TableElement.new();
    this[row] = html.TableRowElement.new();
    this[cell] = html.TableCellElement.new();
    ;
  }).prototype = tabelare.Tabelare.prototype;
  dart.addTypeTests(tabelare.Tabelare);
  dart.addTypeCaches(tabelare.Tabelare);
  dart.setMethodSignature(tabelare.Tabelare, () => ({
    __proto__: dart.getMethods(tabelare.Tabelare.__proto__),
    adauga: dart.fnType(dart.dynamic, [core.Map$(core.String, dart.dynamic), core.String, core.int]),
    [_insertDataInTabel]: dart.fnType(dart.dynamic, [html.TableElement, core.List, core.int])
  }));
  dart.setLibraryUri(tabelare.Tabelare, I[5]);
  dart.setFieldSignature(tabelare.Tabelare, () => ({
    __proto__: dart.getFields(tabelare.Tabelare.__proto__),
    table: dart.fieldType(html.TableElement),
    row: dart.fieldType(html.TableRowElement),
    cell: dart.fieldType(html.TableCellElement)
  }));
  var _headers$ = dart.privateName(loader, "_headers");
  loader.Loader = class Loader extends core.Object {
    cautaPeServer(opts) {
      let criteriu = opts && 'criteriu' in opts ? opts.criteriu : null;
      let tabel = opts && 'tabel' in opts ? opts.tabel : null;
      let camp = opts && 'camp' in opts ? opts.camp : null;
      let numeServer = opts && 'numeServer' in opts ? opts.numeServer : null;
      let optiune = opts && 'optiune' in opts ? opts.optiune : null;
      return async.async(core.String, function* cautaPeServer() {
        numeServer = numeServer + ".php";
        let path = "http://localhost/" + numeServer + ("?x={\"criteriu\":\"" + criteriu + "\", \"tabel\":\"" + tabel + "\", \"camp\":\"" + camp + "\"}");
        let response = (yield http.get(core.Uri.parse(path)));
        if (response.statusCode === 200) {
          let jsonString = response.body;
          return jsonString;
        } else {
          html.window.alert("Couldn't open " + path);
          return "Couldn't open " + path;
        }
      });
    }
  };
  (loader.Loader.new = function() {
    this[_headers$] = new (T.IdentityMapOfString$String()).from(["Accept", "application/json"]);
    ;
  }).prototype = loader.Loader.prototype;
  dart.addTypeTests(loader.Loader);
  dart.addTypeCaches(loader.Loader);
  dart.setMethodSignature(loader.Loader, () => ({
    __proto__: dart.getMethods(loader.Loader.__proto__),
    cautaPeServer: dart.fnType(async.Future$(core.String), [], {}, {camp: core.String, criteriu: core.String, numeServer: core.String, optiune: core.int, tabel: core.String})
  }));
  dart.setLibraryUri(loader.Loader, I[6]);
  dart.setFieldSignature(loader.Loader, () => ({
    __proto__: dart.getFields(loader.Loader.__proto__),
    [_headers$]: dart.finalFieldType(core.Map$(core.String, core.String))
  }));
  var Duration__duration = dart.privateName(core, "Duration._duration");
  load_detalii.LoadDetalii = class LoadDetalii extends core.Object {
    loadRetetar(caut, camp, tabel, numeServer) {
      let lista = null;
      function lista$35get() {
        let t2, t1;
        t1 = lista;
        return t1 == null ? (t2 = html.UListElement.as(html.querySelector("#listaDetalii")), lista == null ? lista = t2 : dart.throw(new _internal.LateError.localADI("lista"))) : t1;
      }
      dart.fn(lista$35get, T.VoidToUListElement());
      let formDetalii = html.FormElement.as(html.querySelector("#formDetalii"));
      let kk = new loader.Loader.new();
      kk.cautaPeServer({criteriu: caut, numeServer: numeServer, optiune: 1, tabel: tabel, camp: camp}).then(core.Null, dart.fn(rezultat => {
        let t2;
        let _json = convert.json.decode(rezultat);
        lista$35get()[$children][$clear]();
        for (let i = 0; i < core.num.as(dart.dload(_json, 'length')); i = i + 1) {
          let elem = html.LIElement.new();
          lista$35get()[$children][$add]((t2 = elem, (() => {
            t2[$text] = T.StringN().as(dart.dsend(dart.dsend(_json, '_get', [i]), '_get', [camp]));
            return t2;
          })()));
          elem[$onClick].listen(dart.fn(e => {
            let crit = dart.toString(elem[$innerHtml]);
            kk.cautaPeServer({criteriu: crit, tabel: tabel, camp: camp, numeServer: "servReteta", optiune: 1}).then(core.Null, dart.fn(value => async.async(core.Null, function*() {
              let _js = convert.json.decode(value);
              lista$35get()[$children][$clear]();
              load_detalii.LoadDetalii.barMeniu("html/form_tabel.html");
              yield async.Future.delayed(C[9] || CT.C9);
              let tabelul = new tabelare.Tabelare.new();
              let formTabel = html.FormElement.as(html.querySelector("#formTabel"));
              let titluTabel = dart.nullCast(html.querySelector("#titluTabel"), html.Element);
              let btnInapoi = dart.nullCast(html.querySelector("#btnCCC"), html.Element);
              formDetalii[$replaceWith](formTabel);
              tabelul.adauga(T.MapOfString$dynamic().as(_js), "tabelDetalii", 0);
              btnInapoi[$onClick].listen(dart.fn(event => {
                formTabel[$replaceWith](formDetalii);
              }, T.MouseEventTovoid()));
              titluTabel[$innerHtml] = "Reteta pt " + crit;
            }), T.StringToFutureOfNull()));
          }, T.MouseEventTovoid()));
        }
      }, T.StringToNull()));
    }
    static barMeniu(url) {
      return async.async(dart.void, function* barMeniu() {
        let _el = html.querySelector("#output");
        yield html.HttpRequest.postFormData(url, new (T.IdentityMapOfString$String()).new()).then(core.Null, dart.fn(response => {
          let formular = null;
          if (response.status === 200) {
            formular = dart.nullCheck(response.responseText);
            dart.nullCheck(_el)[$insertAdjacentHtml]("beforebegin", formular);
          }
        }, T.HttpRequestToNull()));
      });
    }
  };
  (load_detalii.LoadDetalii.new = function() {
    ;
  }).prototype = load_detalii.LoadDetalii.prototype;
  dart.addTypeTests(load_detalii.LoadDetalii);
  dart.addTypeCaches(load_detalii.LoadDetalii);
  dart.setMethodSignature(load_detalii.LoadDetalii, () => ({
    __proto__: dart.getMethods(load_detalii.LoadDetalii.__proto__),
    loadRetetar: dart.fnType(dart.dynamic, [core.String, core.String, core.String, core.String])
  }));
  dart.setLibraryUri(load_detalii.LoadDetalii, I[7]);
  main.main = function main$() {
    return async.async(dart.void, function* main() {
      meniu.Meniu.topMeniu();
      yield async.Future.delayed(C[9] || CT.C9);
    });
  };
  meniu.Meniu = class Meniu extends core.Object {
    static topMeniu() {
      return async.async(dart.void, function* topMeniu() {
        load_detalii.LoadDetalii.barMeniu("html/top_nav.html");
        yield async.Future.delayed(C[9] || CT.C9);
        let _btnAprovizionare = dart.nullCast(html.querySelector("#btnAprovizionare"), html.Element);
        let _btnLivrare = dart.nullCast(html.querySelector("#btnLivrare"), html.Element);
        let _btnRetetar = dart.nullCast(html.querySelector("#btnRetetar"), html.Element);
        let _btnRapoarte = dart.nullCast(html.querySelector("#btnRapoarte"), html.Element);
        let _btnPreviziuni = dart.nullCast(html.querySelector("#btnPreviziuni"), html.Element);
        let _btnAdministrare = dart.nullCast(html.querySelector("#btnAdministrare"), html.Element);
        _btnAprovizionare[$onClick].listen(dart.fn(e => {
          let _divTopNav = dart.nullCast(html.querySelector("#top_nav"), html.Element);
          _divTopNav[$hidden] = true;
        }, T.MouseEventTovoid()));
        _btnLivrare[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Livrare");
          core.print("BtnIesiri");
        }, T.MouseEventTovoid()));
        _btnRetetar[$onClick].listen(dart.fn(e => {
          meniu.Meniu.formularMeniu("RETETAR");
        }, T.MouseEventTovoid()));
        _btnRapoarte[$onClick].listen(dart.fn(e => {
          meniu.Meniu.rapoarteMeniu();
        }, T.MouseEventTovoid()));
        _btnPreviziuni[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Previziuni");
        }, T.MouseEventTovoid()));
        _btnAdministrare[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Administrare");
        }, T.MouseEventTovoid()));
      });
    }
    static rapoarteMeniu() {
      return async.async(dart.void, function* rapoarteMeniu() {
        let _divTopNav = dart.nullCast(html.querySelector("#top_nav"), html.Element);
        _divTopNav[$hidden] = true;
        load_detalii.LoadDetalii.barMeniu("html/rapoarte_nav.html");
        yield async.Future.delayed(C[9] || CT.C9);
        let _btnIntrari = dart.nullCast(html.querySelector("#btnIntrari"), html.Element);
        let _btnIesiri = dart.nullCast(html.querySelector("#btnIesiri"), html.Element);
        let _btnGestiuni = dart.nullCast(html.querySelector("#btnGestiuni"), html.Element);
        let _btnLaborator = dart.nullCast(html.querySelector("#btnLaborator"), html.Element);
        let _btnInapoi = dart.nullCast(html.querySelector("#btnInapoi"), html.Element);
        let _divRapoarteNav = dart.nullCast(html.querySelector("#rapoarte_nav"), html.Element);
        _btnIntrari[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Intrari");
        }, T.MouseEventTovoid()));
        _btnIesiri[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Iesiri");
        }, T.MouseEventTovoid()));
        _btnGestiuni[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Gestiuni");
        }, T.MouseEventTovoid()));
        _btnLaborator[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Laborator");
        }, T.MouseEventTovoid()));
        _btnInapoi[$onClick].listen(dart.fn(e => {
          _divRapoarteNav[$hidden] = true;
          html.window[$location].reload();
          load_detalii.LoadDetalii.barMeniu("html/top_nav.html");
        }, T.MouseEventTovoid()));
      });
    }
    static formularMeniu(titlu) {
      return async.async(dart.void, function* formularMeniu() {
        let _divTopNav = dart.nullCast(html.querySelector("#top_nav"), html.Element);
        _divTopNav[$hidden] = true;
        load_detalii.LoadDetalii.barMeniu("html/form_detalii.html");
        yield async.Future.delayed(C[9] || CT.C9);
        let _btnCautare = dart.nullCast(html.querySelector("#btnCautare"), html.Element);
        let _btnAdaugare = dart.nullCast(html.querySelector("#btnAdaugare"), html.Element);
        let _btnModificare = dart.nullCast(html.querySelector("#btnModificare"), html.Element);
        let _btnStergere = dart.nullCast(html.querySelector("#btnStergere"), html.Element);
        let _titluH1 = dart.nullCast(html.querySelector("#titluDetalii"), html.Element);
        let _listaDetalii = html.UListElement.as(html.querySelector("#listaDetalii"));
        _titluH1[$innerHtml] = titlu;
        _btnCautare[$onClick].listen(dart.fn(e => {
          if (titlu === "RETETAR") {
            meniu.Meniu.cautareMeniu(titlu);
          }
        }, T.MouseEventTovoid()));
        _btnAdaugare[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Adaugare");
        }, T.MouseEventTovoid()));
        _btnModificare[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Modificare");
        }, T.MouseEventTovoid()));
        _btnStergere[$onClick].listen(dart.fn(e => {
          html.window.alert("Apasat buton Stergere");
        }, T.MouseEventTovoid()));
      });
    }
    static cautareMeniu(titlu) {
      return async.async(dart.void, function* cautareMeniu() {
        let _formDetalii = html.FormElement.as(html.querySelector("#formDetalii"));
        load_detalii.LoadDetalii.barMeniu("html/form_cautare.html");
        yield async.Future.delayed(C[9] || CT.C9);
        let _btnOK = dart.nullCast(html.querySelector("#btnOK"), html.Element);
        let _formCautare = html.FormElement.as(html.querySelector("#formCautare"));
        _formDetalii[$replaceWith](_formCautare);
        let _txtCautare = html.InputElement.as(html.querySelector("#cautare"));
        _btnOK[$onClick].listen(dart.fn(e => {
          if (titlu === "RETETAR") {
            let caut = _txtCautare.value;
            if (caut != null) {
              _formCautare[$replaceWith](_formDetalii);
              let ld = new load_detalii.LoadDetalii.new();
              ld.loadRetetar(caut, "den_pf", "tbl_retete", "servInit");
            } else {
              html.window.alert("Caut este null");
            }
          }
        }, T.MouseEventTovoid()));
      });
    }
  };
  (meniu.Meniu.new = function() {
    ;
  }).prototype = meniu.Meniu.prototype;
  dart.addTypeTests(meniu.Meniu);
  dart.addTypeCaches(meniu.Meniu);
  dart.setLibraryUri(meniu.Meniu, I[8]);
  dart.trackLibraries("web/dart/clase/global", {
    "org-dartlang-app:///web/dart/clase/ubf_server.dart": ubf_server,
    "org-dartlang-app:///web/dart/clase/optiune.dart": optiune,
    "org-dartlang-app:///web/dart/clase/global.dart": global,
    "org-dartlang-app:///web/dart/clase/ubf_user.dart": ubf_user,
    "org-dartlang-app:///web/dart/clase/ubf_document.dart": ubf_document,
    "org-dartlang-app:///web/dart/clase/tabelare.dart": tabelare,
    "org-dartlang-app:///web/dart/clase/loader.dart": loader,
    "org-dartlang-app:///web/dart/clase/load_detalii.dart": load_detalii,
    "org-dartlang-app:///web/main.dart": main,
    "org-dartlang-app:///web/meniu.dart": meniu
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["ubf_server.dart","optiune.dart","global.dart","ubf_user.dart","ubf_document.dart","tabelare.dart","loader.dart","load_detalii.dart","../../main.dart","../../meniu.dart"],"names":[],"mappings":"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","file":"global.sound.ddc.js"}');
  // Exports:
  return {
    web__dart__clase__ubf_server: ubf_server,
    web__dart__clase__optiune: optiune,
    web__dart__clase__global: global,
    web__dart__clase__ubf_user: ubf_user,
    web__dart__clase__ubf_document: ubf_document,
    web__dart__clase__tabelare: tabelare,
    web__dart__clase__loader: loader,
    web__dart__clase__load_detalii: load_detalii,
    web__main: main,
    web__meniu: meniu
  };
}));

//# sourceMappingURL=global.sound.ddc.js.map
