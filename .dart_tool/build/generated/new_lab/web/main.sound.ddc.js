define(['dart_sdk', 'packages/http/http'], (function load__web__main(dart_sdk, packages__http__http) {
  'use strict';
  const core = dart_sdk.core;
  const html = dart_sdk.html;
  const async = dart_sdk.async;
  const convert = dart_sdk.convert;
  const _internal = dart_sdk._internal;
  const _js_helper = dart_sdk._js_helper;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const http = packages__http__http.http;
  var main = Object.create(dart.library);
  var $onClick = dartx.onClick;
  var $toString = dartx.toString;
  var $children = dartx.children;
  var $text = dartx.text;
  var $add = dartx.add;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    FutureOfvoid: () => (T.FutureOfvoid = dart.constFn(async.Future$(dart.void)))(),
    EventToFutureOfvoid: () => (T.EventToFutureOfvoid = dart.constFn(dart.fnType(T.FutureOfvoid(), [html.Event])))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    IdentityMapOfString$String: () => (T.IdentityMapOfString$String = dart.constFn(_js_helper.IdentityMap$(core.String, core.String)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.makeRequest, T.EventToFutureOfvoid());
    }
  }, false);
  var C = [void 0];
  main.main = function main$() {
    dart.nullCheck(html.querySelector("#buton"))[$onClick].listen(C[0] || CT.C0);
  };
  main.makeRequest = function makeRequest(_) {
    return async.async(dart.void, function* makeRequest() {
      let t0;
      let path = "http://localhost/servPF.php?x={\"obj\":\"pf\"}";
      let response = (yield http.get(core.Uri.parse(path), {headers: main._headers}));
      if (response.statusCode === 200) {
        let jsonString = response.body;
        html.window.alert(jsonString);
        main.processResponse(jsonString);
      } else {
        html.window.alert(response.statusCode[$toString]());
        core.print("Couldn't open " + path);
        main.wordList[$children][$add]((t0 = html.LIElement.new(), (() => {
          t0[$text] = "Request failed.";
          return t0;
        })()));
      }
    });
  };
  main.processResponse = function processResponse(jsonString) {
    let t0;
    let _json = convert.json.decode(jsonString);
    for (let i = 0; i < core.num.as(dart.dload(_json, 'length')); i = i + 1) {
      main.wordList[$children][$add]((t0 = html.LIElement.new(), (() => {
        t0[$text] = T.StringN().as(dart.dsend(dart.dsend(_json, '_get', [i]), '_get', ["den_pf"]));
        return t0;
      })()));
    }
  };
  dart.copyProperties(main, {
    get wordList() {
      let t1, t0;
      t0 = main['_#wordList'];
      return t0 == null ? (t1 = html.UListElement.as(html.querySelector("#wordList")), main['_#wordList'] == null ? main['_#wordList'] = t1 : dart.throw(new _internal.LateError.fieldADI("wordList"))) : t0;
    }
  });
  dart.defineLazy(main, {
    /*main['_#wordList']*/get ['_#wordList']() {
      return null;
    },
    set ['_#wordList'](_) {},
    /*main._headers*/get _headers() {
      return new (T.IdentityMapOfString$String()).from(["Accept", "application/json", "Access-Control-Allow-Origin", "Content-Type, Authorization"]);
    }
  }, false);
  dart.trackLibraries("web/main", {
    "org-dartlang-app:///web/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AAkBsD,IAA7B,AAAE,AAAQ,eAAjC,mBAAc;EAChB;0CAE+B;AAAP;;AAEhB;AACF,sBAAW,MAAM,SAAa,eAAM,IAAI,aAAY;AACxD,UAAI,AAAS,AAAW,QAAZ,gBAAe;AACnB,yBAAa,AAAS,QAAD;AACH,QAAxB,AAAO,kBAAM,UAAU;AACI,QAA3B,qBAAgB,UAAU;;AAIkB,QAA5C,AAAO,kBAAM,AAAS,AAAW,QAAZ;AACO,QAA5B,WAAM,AAAqB,mBAAL,IAAI;AACkC,QAA5D,AAAS,AAAS,2DAAI;AAAa,sBAAO;;;;IAE9C;;kDAE4B;;AACpB,gBAAQ,AAAK,oBAAO,UAAU;AACpC,aAAS,IAAI,GAAG,AAAE,CAAD,eAAS,WAAN,KAAK,cAAS,IAAA,AAAC,CAAA;AAC4B,MAA7D,AAAS,AAAS,2DAAI;AAAa,mCAAe,WAAH,WAAL,KAAK,WAAC,CAAC,aAAE;;;;EAEvD;;;;AAhCwB;gCAAsC,qBAA3B,mBAAc,kHAAzB;IAAqD;;;MAArD,kBAAU;YAAV;;;MAClB,aAAQ;YAAG,4CACf,UAAU,oBACV,+BAA+B","file":"main.sound.ddc.js"}');
  // Exports:
  return {
    web__main: main
  };
}));

//# sourceMappingURL=main.sound.ddc.js.map
