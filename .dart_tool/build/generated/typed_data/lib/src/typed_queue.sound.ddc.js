define(['dart_sdk', 'packages/collection/src/canonicalized_map', 'packages/typed_data/src/typed_buffer'], (function load__packages__typed_data__src__typed_queue(dart_sdk, packages__collection__src__canonicalized_map, packages__typed_data__src__typed_buffer) {
  'use strict';
  const core = dart_sdk.core;
  const collection = dart_sdk.collection;
  const _native_typed_data = dart_sdk._native_typed_data;
  const _js_helper = dart_sdk._js_helper;
  const typed_data = dart_sdk.typed_data;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const queue_list = packages__collection__src__canonicalized_map.src__queue_list;
  const typed_buffer = packages__typed_data__src__typed_buffer.src__typed_buffer;
  var typed_data$ = Object.create(dart.library);
  var typed_queue = Object.create(dart.library);
  var $length = dartx.length;
  var $_set = dartx._set;
  var $_get = dartx._get;
  var $setRange = dartx.setRange;
  var $fillRange = dartx.fillRange;
  var $rightShift = dartx['>>'];
  var $cast = dartx.cast;
  var $sublist = dartx.sublist;
  var $noSuchMethod = dartx.noSuchMethod;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    intN: () => (T.intN = dart.constFn(dart.nullable(core.int)))(),
    ListOfintN: () => (T.ListOfintN = dart.constFn(core.List$(T.intN())))(),
    doubleN: () => (T.doubleN = dart.constFn(dart.nullable(core.double)))(),
    ListOfdoubleN: () => (T.ListOfdoubleN = dart.constFn(core.List$(T.doubleN())))(),
    Int32x4N: () => (T.Int32x4N = dart.constFn(dart.nullable(typed_data.Int32x4)))(),
    ListOfInt32x4N: () => (T.ListOfInt32x4N = dart.constFn(core.List$(T.Int32x4N())))(),
    Float32x4N: () => (T.Float32x4N = dart.constFn(dart.nullable(typed_data.Float32x4)))(),
    ListOfFloat32x4N: () => (T.ListOfFloat32x4N = dart.constFn(core.List$(T.Float32x4N())))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.const(new _js_helper.PrivateSymbol.new('_head', _head$));
    },
    get C1() {
      return C[1] = dart.const(new _js_helper.PrivateSymbol.new('_writeToList', _writeToList));
    },
    get C2() {
      return C[2] = dart.const(new _js_helper.PrivateSymbol.new('_add', _add));
    },
    get C3() {
      return C[3] = dart.const(new _js_helper.PrivateSymbol.new('_grow', _grow));
    },
    get C4() {
      return C[4] = dart.const(new _js_helper.PrivateSymbol.new('_table', _table$));
    },
    get C5() {
      return C[5] = dart.const(new _js_helper.PrivateSymbol.new('_tail', _tail$));
    },
    get C6() {
      return C[6] = dart.const(new _js_helper.PrivateSymbol.new('_preGrow', _preGrow));
    },
    get C7() {
      return C[7] = dart.const(new _js_helper.PrivateSymbol.new('_head=', _head_));
    },
    get C8() {
      return C[8] = dart.const(new _js_helper.PrivateSymbol.new('_table=', _table_));
    },
    get C9() {
      return C[9] = dart.const(new _js_helper.PrivateSymbol.new('_tail=', _tail_));
    }
  }, false);
  var C = Array(10).fill(void 0);
  var I = [
    "org-dartlang-app:///packages/typed_data/src/typed_queue.dart",
    "package:typed_data/src/typed_queue.dart"
  ];
  var _table = dart.privateName(typed_queue, "_TypedQueue._table");
  var _head = dart.privateName(typed_queue, "_TypedQueue._head");
  var _tail = dart.privateName(typed_queue, "_TypedQueue._tail");
  var _table$ = dart.privateName(typed_queue, "_table");
  var _head$ = dart.privateName(typed_queue, "_head");
  var _tail$ = dart.privateName(typed_queue, "_tail");
  var _createBuffer = dart.privateName(typed_queue, "_createBuffer");
  var _createList = dart.privateName(typed_queue, "_createList");
  var _writeToList = dart.privateName(typed_queue, "_writeToList");
  var _growAtCapacity = dart.privateName(typed_queue, "_growAtCapacity");
  var _growTo = dart.privateName(typed_queue, "_growTo");
  var _defaultValue = dart.privateName(typed_queue, "_defaultValue");
  const _is__TypedQueue_default = Symbol('_is__TypedQueue_default');
  typed_queue._TypedQueue$ = dart.generic((E, L) => {
    var __t$IterableOfE = () => (__t$IterableOfE = dart.constFn(core.Iterable$(E)))();
    var __t$ListOfE = () => (__t$ListOfE = dart.constFn(core.List$(E)))();
    var __t$EN = () => (__t$EN = dart.constFn(dart.nullable(E)))();
    const Object_ListMixin$36 = class Object_ListMixin extends core.Object {};
    (Object_ListMixin$36.new = function() {
    }).prototype = Object_ListMixin$36.prototype;
    dart.applyMixin(Object_ListMixin$36, collection.ListMixin$(E));
    class _TypedQueue extends Object_ListMixin$36 {
      get [_table$]() {
        return this[_table];
      }
      set [_table$](value) {
        this[_table] = value;
      }
      get [_head$]() {
        return this[_head];
      }
      set [_head$](value) {
        this[_head] = value;
      }
      get [_tail$]() {
        return this[_tail];
      }
      set [_tail$](value) {
        this[_tail] = value;
      }
      get length() {
        return (this[_tail$] - this[_head$] & this[_table$][$length] - 1) >>> 0;
      }
      toList(opts) {
        let growable = opts && 'growable' in opts ? opts.growable : true;
        let list = growable ? this[_createBuffer](this.length) : this[_createList](this.length);
        this[_writeToList](list);
        return list;
      }
      cast(T) {
        if (queue_list.QueueList$(T).is(this)) return queue_list.QueueList$(T).as(this);
        dart.throw(new core.UnsupportedError.new(dart.str(this) + " cannot be cast to the desired type."));
      }
      retype(T) {
        return this.cast(T);
      }
      addLast(value) {
        E.as(value);
        this[_table$][$_set](this[_tail$], value);
        this[_tail$] = (this[_tail$] + 1 & this[_table$][$length] - 1) >>> 0;
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      addFirst(value) {
        E.as(value);
        this[_head$] = (this[_head$] - 1 & this[_table$][$length] - 1) >>> 0;
        this[_table$][$_set](this[_head$], value);
        if (this[_head$] === this[_tail$]) this[_growAtCapacity]();
      }
      removeFirst() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        let result = this[_table$][$_get](this[_head$]);
        this[_head$] = (this[_head$] + 1 & this[_table$][$length] - 1) >>> 0;
        return result;
      }
      removeLast() {
        if (this[_head$] === this[_tail$]) dart.throw(new core.StateError.new("No element"));
        this[_tail$] = (this[_tail$] - 1 & this[_table$][$length] - 1) >>> 0;
        return this[_table$][$_get](this[_tail$]);
      }
      add(value) {
        E.as(value);
        return this.addLast(value);
      }
      set length(value) {
        core.RangeError.checkNotNegative(value, "length");
        let delta = value - this.length;
        if (delta >= 0) {
          let needsToGrow = this[_table$][$length] <= value;
          if (needsToGrow) this[_growTo](value);
          this[_tail$] = (this[_tail$] + delta & this[_table$][$length] - 1) >>> 0;
          if (!needsToGrow) this.fillRange(value - delta, value, this[_defaultValue]);
        } else {
          this.removeRange(value, this.length);
        }
      }
      _get(index) {
        core.RangeError.checkValidIndex(index, this, null, this.length);
        return this[_table$][$_get]((this[_head$] + index & this[_table$][$length] - 1) >>> 0);
      }
      _set(index, value$) {
        let value = value$;
        E.as(value);
        core.RangeError.checkValidIndex(index, this);
        this[_table$][$_set]((this[_head$] + index & this[_table$][$length] - 1) >>> 0, value);
        return value$;
      }
      removeRange(start, end) {
        let length = this.length;
        core.RangeError.checkValidRange(start, end, length);
        if (start === 0) {
          this[_head$] = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let elementsAfter = length - end;
        if (elementsAfter === 0) {
          this[_tail$] = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
          return;
        }
        let removedElements = end - start;
        if (start < elementsAfter) {
          this.setRange(removedElements, end, this);
          this[_head$] = (this[_head$] + removedElements & this[_table$][$length] - 1) >>> 0;
        } else {
          this.setRange(start, length - removedElements, this, end);
          this[_tail$] = (this[_tail$] - removedElements & this[_table$][$length] - 1) >>> 0;
        }
      }
      setRange(start, end, iterable, skipCount = 0) {
        __t$IterableOfE().as(iterable);
        core.RangeError.checkValidRange(start, end, this.length);
        if (start === end) return;
        let targetStart = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let targetEnd = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        let targetIsContiguous = targetStart < targetEnd;
        if (iterable === this) {
          let sourceStart = (this[_head$] + skipCount & this[_table$][$length] - 1) >>> 0;
          let sourceEnd = (sourceStart + (end - start) & this[_table$][$length] - 1) >>> 0;
          if (sourceStart === targetStart) return;
          let sourceIsContiguous = sourceStart < sourceEnd;
          if (targetIsContiguous && sourceIsContiguous) {
            this[_table$][$setRange](targetStart, targetEnd, this[_table$], sourceStart);
          } else if (!targetIsContiguous && !sourceIsContiguous) {
            if (sourceStart > targetStart) {
              let startGap = sourceStart - targetStart;
              let firstEnd = this[_table$][$length] - startGap;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, this[_table$][$length], this[_table$]);
              this[_table$][$setRange](0, targetEnd, this[_table$], startGap);
            } else if (sourceEnd < targetEnd) {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](0, firstStart, this[_table$], this[_table$][$length] - firstStart);
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            }
          } else if (sourceStart < targetEnd) {
            if (sourceIsContiguous) {
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
            } else {
              let firstEnd = this[_table$][$length] - sourceStart;
              this[_table$][$setRange](targetStart, firstEnd, this[_table$], sourceStart);
              this[_table$][$setRange](firstEnd, targetEnd, this[_table$]);
            }
          } else {
            if (sourceIsContiguous) {
              this[_table$][$setRange](0, targetEnd, this[_table$], sourceStart + (this[_table$][$length] - targetStart));
              this[_table$][$setRange](targetStart, this[_table$][$length], this[_table$], sourceStart);
            } else {
              let firstStart = targetEnd - sourceEnd;
              this[_table$][$setRange](firstStart, targetEnd, this[_table$]);
              this[_table$][$setRange](targetStart, firstStart, this[_table$], sourceStart);
            }
          }
        } else if (targetIsContiguous) {
          this[_table$][$setRange](targetStart, targetEnd, iterable, skipCount);
        } else if (__t$ListOfE().is(iterable)) {
          this[_table$][$setRange](targetStart, this[_table$][$length], iterable, skipCount);
          this[_table$][$setRange](0, targetEnd, iterable, skipCount + (this[_table$][$length] - targetStart));
        } else {
          super.setRange(start, end, iterable, skipCount);
        }
      }
      fillRange(start, end, value = null) {
        __t$EN().as(value);
        let startInTable = (this[_head$] + start & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + end & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          this[_table$][$fillRange](startInTable, endInTable, value);
        } else {
          this[_table$][$fillRange](startInTable, this[_table$][$length], value);
          this[_table$][$fillRange](0, endInTable, value);
        }
      }
      sublist(start, end = null) {
        let length = this.length;
        let nonNullEnd = core.RangeError.checkValidRange(start, end, length);
        let list = this[_createList](nonNullEnd - start);
        this[_writeToList](list, start, nonNullEnd);
        return list;
      }
      [_writeToList](target, start = null, end = null) {
        start == null ? start = 0 : null;
        end == null ? end = this.length : null;
        if (!(target[$length] >= dart.notNull(end) - dart.notNull(start))) dart.assertFailed(null, I[0], 266, 12, "target.length >= end - start");
        if (!(dart.notNull(start) <= dart.notNull(end))) dart.assertFailed(null, I[0], 267, 12, "start <= end");
        let elementsToWrite = dart.notNull(end) - dart.notNull(start);
        let startInTable = (this[_head$] + dart.notNull(start) & this[_table$][$length] - 1) >>> 0;
        let endInTable = (this[_head$] + dart.notNull(end) & this[_table$][$length] - 1) >>> 0;
        if (startInTable <= endInTable) {
          target[$setRange](0, elementsToWrite, this[_table$], startInTable);
        } else {
          let firstPartSize = this[_table$][$length] - startInTable;
          target[$setRange](0, firstPartSize, this[_table$], startInTable);
          target[$setRange](firstPartSize, firstPartSize + endInTable, this[_table$], 0);
        }
        return elementsToWrite;
      }
      [_growAtCapacity]() {
        if (!(this[_head$] === this[_tail$])) dart.assertFailed(null, I[0], 285, 12, "_head == _tail");
        let newTable = this[_createList](this[_table$][$length] * 2);
        let partitionPoint = this[_table$][$length] - this[_head$];
        newTable[$setRange](0, partitionPoint, this[_table$], this[_head$]);
        if (partitionPoint !== this[_table$][$length]) {
          newTable[$setRange](partitionPoint, this[_table$][$length], this[_table$]);
        }
        this[_head$] = 0;
        this[_tail$] = this[_table$][$length];
        this[_table$] = newTable;
      }
      [_growTo](newElementCount) {
        if (!(newElementCount >= this.length)) dart.assertFailed(null, I[0], 304, 12, "newElementCount >= length");
        newElementCount = newElementCount + newElementCount[$rightShift](1);
        let newTable = this[_createList](typed_queue._nextPowerOf2(newElementCount));
        this[_tail$] = this[_writeToList](newTable);
        this[_table$] = newTable;
        this[_head$] = 0;
      }
    }
    (_TypedQueue.new = function(table) {
      this[_table] = L.as(table);
      this[_head] = 0;
      this[_tail] = 0;
      ;
    }).prototype = _TypedQueue.prototype;
    dart.addTypeTests(_TypedQueue);
    _TypedQueue.prototype[_is__TypedQueue_default] = true;
    dart.addTypeCaches(_TypedQueue);
    dart.setMethodSignature(_TypedQueue, () => ({
      __proto__: dart.getMethods(_TypedQueue.__proto__),
      cast: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      [$cast]: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      retype: dart.gFnType(T => [queue_list.QueueList$(T), []], T => [dart.nullable(core.Object)]),
      addLast: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      addFirst: dart.fnType(dart.void, [dart.nullable(core.Object)]),
      removeFirst: dart.fnType(E, []),
      _get: dart.fnType(E, [core.int]),
      [$_get]: dart.fnType(E, [core.int]),
      _set: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      [$_set]: dart.fnType(dart.void, [core.int, dart.nullable(core.Object)]),
      sublist: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [$sublist]: dart.fnType(L, [core.int], [dart.nullable(core.int)]),
      [_writeToList]: dart.fnType(core.int, [core.List$(E)], [dart.nullable(core.int), dart.nullable(core.int)]),
      [_growAtCapacity]: dart.fnType(dart.void, []),
      [_growTo]: dart.fnType(dart.void, [core.int])
    }));
    dart.setGetterSignature(_TypedQueue, () => ({
      __proto__: dart.getGetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setSetterSignature(_TypedQueue, () => ({
      __proto__: dart.getSetters(_TypedQueue.__proto__),
      length: core.int,
      [$length]: core.int
    }));
    dart.setLibraryUri(_TypedQueue, I[1]);
    dart.setFieldSignature(_TypedQueue, () => ({
      __proto__: dart.getFields(_TypedQueue.__proto__),
      [_table$]: dart.fieldType(L),
      [_head$]: dart.fieldType(core.int),
      [_tail$]: dart.fieldType(core.int)
    }));
    dart.defineExtensionMethods(_TypedQueue, [
      'toList',
      'cast',
      'removeLast',
      'add',
      '_get',
      '_set',
      'removeRange',
      'setRange',
      'fillRange',
      'sublist'
    ]);
    dart.defineExtensionAccessors(_TypedQueue, ['length']);
    return _TypedQueue;
  });
  typed_queue._TypedQueue = typed_queue._TypedQueue$();
  dart.addTypeTests(typed_queue._TypedQueue, _is__TypedQueue_default);
  const _is__IntQueue_default = Symbol('_is__IntQueue_default');
  typed_queue._IntQueue$ = dart.generic(L => {
    class _IntQueue extends typed_queue._TypedQueue$(core.int, L) {
      get [_defaultValue]() {
        return 0;
      }
    }
    (_IntQueue.new = function(queue) {
      _IntQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _IntQueue.prototype;
    dart.addTypeTests(_IntQueue);
    _IntQueue.prototype[_is__IntQueue_default] = true;
    dart.addTypeCaches(_IntQueue);
    dart.setGetterSignature(_IntQueue, () => ({
      __proto__: dart.getGetters(_IntQueue.__proto__),
      [_defaultValue]: core.int
    }));
    dart.setLibraryUri(_IntQueue, I[1]);
    return _IntQueue;
  });
  typed_queue._IntQueue = typed_queue._IntQueue$();
  dart.addTypeTests(typed_queue._IntQueue, _is__IntQueue_default);
  const _is__FloatQueue_default = Symbol('_is__FloatQueue_default');
  typed_queue._FloatQueue$ = dart.generic(L => {
    class _FloatQueue extends typed_queue._TypedQueue$(core.double, L) {
      get [_defaultValue]() {
        return 0.0;
      }
    }
    (_FloatQueue.new = function(queue) {
      _FloatQueue.__proto__.new.call(this, queue);
      ;
    }).prototype = _FloatQueue.prototype;
    dart.addTypeTests(_FloatQueue);
    _FloatQueue.prototype[_is__FloatQueue_default] = true;
    dart.addTypeCaches(_FloatQueue);
    dart.setGetterSignature(_FloatQueue, () => ({
      __proto__: dart.getGetters(_FloatQueue.__proto__),
      [_defaultValue]: core.double
    }));
    dart.setLibraryUri(_FloatQueue, I[1]);
    return _FloatQueue;
  });
  typed_queue._FloatQueue = typed_queue._FloatQueue$();
  dart.addTypeTests(typed_queue._FloatQueue, _is__FloatQueue_default);
  var _head$0 = dart.privateName(queue_list, "_head");
  var _writeToList$ = dart.privateName(queue_list, "_writeToList");
  var _add = dart.privateName(typed_queue, "_add");
  var _add$ = dart.privateName(queue_list, "_add");
  var _grow = dart.privateName(typed_queue, "_grow");
  var _grow$ = dart.privateName(queue_list, "_grow");
  var _table$0 = dart.privateName(queue_list, "_table");
  var _tail$0 = dart.privateName(queue_list, "_tail");
  var _preGrow = dart.privateName(typed_queue, "_preGrow");
  var _preGrow$ = dart.privateName(queue_list, "_preGrow");
  var _head_ = dart.privateName(typed_queue, "_head=");
  var _table_ = dart.privateName(typed_queue, "_table=");
  var _tail_ = dart.privateName(typed_queue, "_tail=");
  typed_queue.Uint8Queue = class Uint8Queue extends typed_queue._IntQueue$(typed_data.Uint8List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint8Queue.new = function(initialCapacity = null) {
    typed_queue.Uint8Queue.__proto__.new.call(this, _native_typed_data.NativeUint8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8Queue.prototype;
  dart.addTypeTests(typed_queue.Uint8Queue);
  dart.addTypeCaches(typed_queue.Uint8Queue);
  typed_queue.Uint8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8Queue, I[1]);
  typed_queue.Int8Queue = class Int8Queue extends typed_queue._IntQueue$(typed_data.Int8List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int8Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt8List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int8Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int8Queue.new = function(initialCapacity = null) {
    typed_queue.Int8Queue.__proto__.new.call(this, _native_typed_data.NativeInt8List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int8Queue.prototype;
  dart.addTypeTests(typed_queue.Int8Queue);
  dart.addTypeCaches(typed_queue.Int8Queue);
  typed_queue.Int8Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int8Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int8List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int8Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int8Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int8Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int8Queue, I[1]);
  typed_queue.Uint8ClampedQueue = class Uint8ClampedQueue extends typed_queue._IntQueue$(typed_data.Uint8ClampedList) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint8ClampedQueue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint8ClampedList.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint8ClampedBuffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint8ClampedQueue.new = function(initialCapacity = null) {
    typed_queue.Uint8ClampedQueue.__proto__.new.call(this, _native_typed_data.NativeUint8ClampedList.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint8ClampedQueue.prototype;
  dart.addTypeTests(typed_queue.Uint8ClampedQueue);
  dart.addTypeCaches(typed_queue.Uint8ClampedQueue);
  typed_queue.Uint8ClampedQueue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint8ClampedQueue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint8ClampedList, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint8ClampedBuffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint8ClampedQueue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint8ClampedQueue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint8ClampedQueue, I[1]);
  typed_queue.Uint16Queue = class Uint16Queue extends typed_queue._IntQueue$(typed_data.Uint16List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint16Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint16Queue.new = function(initialCapacity = null) {
    typed_queue.Uint16Queue.__proto__.new.call(this, _native_typed_data.NativeUint16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint16Queue.prototype;
  dart.addTypeTests(typed_queue.Uint16Queue);
  dart.addTypeCaches(typed_queue.Uint16Queue);
  typed_queue.Uint16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint16Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint16Queue, I[1]);
  typed_queue.Int16Queue = class Int16Queue extends typed_queue._IntQueue$(typed_data.Int16List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int16Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt16List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int16Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int16Queue.new = function(initialCapacity = null) {
    typed_queue.Int16Queue.__proto__.new.call(this, _native_typed_data.NativeInt16List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int16Queue.prototype;
  dart.addTypeTests(typed_queue.Int16Queue);
  dart.addTypeCaches(typed_queue.Int16Queue);
  typed_queue.Int16Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int16Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int16List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int16Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int16Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int16Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int16Queue, I[1]);
  typed_queue.Uint32Queue = class Uint32Queue extends typed_queue._IntQueue$(typed_data.Uint32List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeUint32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint32Queue.new = function(initialCapacity = null) {
    typed_queue.Uint32Queue.__proto__.new.call(this, _native_typed_data.NativeUint32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint32Queue.prototype;
  dart.addTypeTests(typed_queue.Uint32Queue);
  dart.addTypeCaches(typed_queue.Uint32Queue);
  typed_queue.Uint32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint32Queue, I[1]);
  typed_queue.Int32Queue = class Int32Queue extends typed_queue._IntQueue$(typed_data.Int32List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeInt32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int32Queue.new = function(initialCapacity = null) {
    typed_queue.Int32Queue.__proto__.new.call(this, _native_typed_data.NativeInt32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32Queue.prototype;
  dart.addTypeTests(typed_queue.Int32Queue);
  dart.addTypeCaches(typed_queue.Int32Queue);
  typed_queue.Int32Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32Queue, I[1]);
  typed_queue.Uint64Queue = class Uint64Queue extends typed_queue._IntQueue$(typed_data.Uint64List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Uint64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return typed_data.Uint64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Uint64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Uint64Queue.new = function(initialCapacity = null) {
    typed_queue.Uint64Queue.__proto__.new.call(this, typed_data.Uint64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Uint64Queue.prototype;
  dart.addTypeTests(typed_queue.Uint64Queue);
  dart.addTypeCaches(typed_queue.Uint64Queue);
  typed_queue.Uint64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Uint64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Uint64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Uint64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Uint64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Uint64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Uint64Queue, I[1]);
  typed_queue.Int64Queue = class Int64Queue extends typed_queue._IntQueue$(typed_data.Int64List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return typed_data.Int64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfintN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.int.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfintN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfintN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int64Queue.new = function(initialCapacity = null) {
    typed_queue.Int64Queue.__proto__.new.call(this, typed_data.Int64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int64Queue.prototype;
  dart.addTypeTests(typed_queue.Int64Queue);
  dart.addTypeCaches(typed_queue.Int64Queue);
  typed_queue.Int64Queue[dart.implements] = () => [queue_list.QueueList$(core.int)];
  dart.setMethodSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.int)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int64Queue, I[1]);
  typed_queue.Float32Queue = class Float32Queue extends typed_queue._FloatQueue$(typed_data.Float32List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float32Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat32List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfdoubleN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.double.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfdoubleN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float32Queue.new = function(initialCapacity = null) {
    typed_queue.Float32Queue.__proto__.new.call(this, _native_typed_data.NativeFloat32List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32Queue.prototype;
  dart.addTypeTests(typed_queue.Float32Queue);
  dart.addTypeCaches(typed_queue.Float32Queue);
  typed_queue.Float32Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32Queue, I[1]);
  typed_queue.Float64Queue = class Float64Queue extends typed_queue._FloatQueue$(typed_data.Float64List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float64Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return _native_typed_data.NativeFloat64List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float64Buffer.new(size);
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfdoubleN().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      core.double.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfdoubleN().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfdoubleN().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float64Queue.new = function(initialCapacity = null) {
    typed_queue.Float64Queue.__proto__.new.call(this, _native_typed_data.NativeFloat64List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float64Queue.prototype;
  dart.addTypeTests(typed_queue.Float64Queue);
  dart.addTypeCaches(typed_queue.Float64Queue);
  typed_queue.Float64Queue[dart.implements] = () => [queue_list.QueueList$(core.double)];
  dart.setMethodSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float64Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float64List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float64Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(core.double)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float64Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float64Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float64Queue, I[1]);
  typed_queue.Int32x4Queue = class Int32x4Queue extends typed_queue._TypedQueue$(typed_data.Int32x4, typed_data.Int32x4List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Int32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return new _native_typed_data.NativeInt32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Int32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return typed_queue.Int32x4Queue._zero;
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfInt32x4N().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      typed_data.Int32x4.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfInt32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfInt32x4N().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Int32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Int32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeInt32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Int32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Int32x4Queue);
  dart.addTypeCaches(typed_queue.Int32x4Queue);
  typed_queue.Int32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Int32x4)];
  dart.setMethodSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Int32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Int32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Int32x4Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Int32x4Queue.__proto__),
    [_defaultValue]: typed_data.Int32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Int32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Int32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Int32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Int32x4Queue, I[1]);
  dart.defineLazy(typed_queue.Int32x4Queue, {
    /*typed_queue.Int32x4Queue._zero*/get _zero() {
      return new _native_typed_data.NativeInt32x4.new(0, 0, 0, 0);
    }
  }, false);
  typed_queue.Float32x4Queue = class Float32x4Queue extends typed_queue._TypedQueue$(typed_data.Float32x4, typed_data.Float32x4List) {
    static fromList(elements) {
      let t0;
      t0 = new typed_queue.Float32x4Queue.new(elements[$length]);
      return (() => {
        t0.addAll(elements);
        return t0;
      })();
    }
    [_createList](size) {
      return new _native_typed_data.NativeFloat32x4List.new(size);
    }
    [_createBuffer](size) {
      return new typed_buffer.Float32x4Buffer.new(size);
    }
    get [_defaultValue]() {
      return new _native_typed_data.NativeFloat32x4.zero();
    }
    get [_head$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[0] || CT.C0)));
    }
    [_writeToList$](target) {
      T.ListOfFloat32x4N().as(target);
      return core.int.as(this[$noSuchMethod](new core._Invocation.method(C[1] || CT.C1, null, [target])));
    }
    [_add$](element) {
      typed_data.Float32x4.as(element);
      return this[$noSuchMethod](new core._Invocation.method(C[2] || CT.C2, null, [element]));
    }
    [_grow$]() {
      return this[$noSuchMethod](new core._Invocation.method(C[3] || CT.C3, null, []));
    }
    get [_table$0]() {
      return T.ListOfFloat32x4N().as(this[$noSuchMethod](new core._Invocation.getter(C[4] || CT.C4)));
    }
    get [_tail$0]() {
      return core.int.as(this[$noSuchMethod](new core._Invocation.getter(C[5] || CT.C5)));
    }
    [_preGrow$](newElementCount) {
      return this[$noSuchMethod](new core._Invocation.method(C[6] || CT.C6, null, [newElementCount]));
    }
    set [_head$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[7] || CT.C7, value));
    }
    set [_table$0](value) {
      T.ListOfFloat32x4N().as(value);
      return this[$noSuchMethod](new core._Invocation.setter(C[8] || CT.C8, value));
    }
    set [_tail$0](value) {
      return this[$noSuchMethod](new core._Invocation.setter(C[9] || CT.C9, value));
    }
  };
  (typed_queue.Float32x4Queue.new = function(initialCapacity = null) {
    typed_queue.Float32x4Queue.__proto__.new.call(this, new _native_typed_data.NativeFloat32x4List.new(typed_queue._chooseRealInitialCapacity(initialCapacity)));
    ;
  }).prototype = typed_queue.Float32x4Queue.prototype;
  dart.addTypeTests(typed_queue.Float32x4Queue);
  dart.addTypeCaches(typed_queue.Float32x4Queue);
  typed_queue.Float32x4Queue[dart.implements] = () => [queue_list.QueueList$(typed_data.Float32x4)];
  dart.setMethodSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getMethods(typed_queue.Float32x4Queue.__proto__),
    [_createList]: dart.fnType(typed_data.Float32x4List, [core.int]),
    [_createBuffer]: dart.fnType(typed_buffer.Float32x4Buffer, [core.int]),
    [_writeToList$]: dart.fnType(core.int, [dart.nullable(core.Object)]),
    [_add$]: dart.fnType(dart.void, [dart.nullable(core.Object)]),
    [_grow$]: dart.fnType(dart.void, []),
    [_preGrow$]: dart.fnType(dart.void, [core.int])
  }));
  dart.setGetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getGetters(typed_queue.Float32x4Queue.__proto__),
    [_defaultValue]: typed_data.Float32x4,
    [_head$0]: core.int,
    [_table$0]: core.List$(dart.nullable(typed_data.Float32x4)),
    [_tail$0]: core.int
  }));
  dart.setSetterSignature(typed_queue.Float32x4Queue, () => ({
    __proto__: dart.getSetters(typed_queue.Float32x4Queue.__proto__),
    [_head$0]: core.int,
    [_table$0]: dart.nullable(core.Object),
    [_tail$0]: core.int
  }));
  dart.setLibraryUri(typed_queue.Float32x4Queue, I[1]);
  typed_queue._chooseRealInitialCapacity = function _chooseRealInitialCapacity(initialCapacity) {
    if (initialCapacity == null || dart.notNull(initialCapacity) < 16) {
      return 16;
    } else if (!typed_queue._isPowerOf2(initialCapacity)) {
      return typed_queue._nextPowerOf2(initialCapacity);
    } else {
      return initialCapacity;
    }
  };
  typed_queue._isPowerOf2 = function _isPowerOf2(number) {
    return (number & number - 1) === 0;
  };
  typed_queue._nextPowerOf2 = function _nextPowerOf2(number) {
    if (!(number > 0)) dart.assertFailed(null, I[0], 648, 10, "number > 0");
    number = (number << 1 >>> 0) - 1;
    for (;;) {
      let nextNumber = (number & number - 1) >>> 0;
      if (nextNumber === 0) return number;
      number = nextNumber;
    }
  };
  dart.defineLazy(typed_queue, {
    /*typed_queue._defaultInitialCapacity*/get _defaultInitialCapacity() {
      return 16;
    }
  }, false);
  dart.trackLibraries("packages/typed_data/src/typed_queue", {
    "package:typed_data/typed_data.dart": typed_data$,
    "package:typed_data/src/typed_queue.dart": typed_queue
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["typed_queue.dart"],"names":[],"mappings":"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","file":"typed_queue.sound.ddc.js"}');
  // Exports:
  return {
    typed_data: typed_data$,
    src__typed_queue: typed_queue
  };
}));

//# sourceMappingURL=typed_queue.sound.ddc.js.map
