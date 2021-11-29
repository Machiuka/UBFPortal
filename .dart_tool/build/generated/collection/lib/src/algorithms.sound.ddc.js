define(['dart_sdk', 'packages/collection/src/utils'], (function load__packages__collection__src__algorithms(dart_sdk, packages__collection__src__utils) {
  'use strict';
  const core = dart_sdk.core;
  const math = dart_sdk.math;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const utils = packages__collection__src__utils.src__utils;
  var algorithms = Object.create(dart.library);
  var $length = dartx.length;
  var $rightShift = dartx['>>'];
  var $_get = dartx._get;
  var $_set = dartx._set;
  var $setRange = dartx.setRange;
  dart._checkModuleNullSafetyMode(true);
  var T$ = {
    ObjectN: () => (T$.ObjectN = dart.constFn(dart.nullable(core.Object)))(),
    ObjectNAndObjectNToint: () => (T$.ObjectNAndObjectNToint = dart.constFn(dart.fnType(core.int, [T$.ObjectN(), T$.ObjectN()])))(),
    TToT: () => (T$.TToT = dart.constFn(dart.gFnType(T => [T, [T]], T => [T$.ObjectN()])))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(utils.defaultCompare, T$.ObjectNAndObjectNToint());
    },
    get C1() {
      return C[1] = dart.fn(utils.identity, T$.TToT());
    }
  }, false);
  var C = Array(2).fill(void 0);
  var I = ["org-dartlang-app:///packages/collection/src/algorithms.dart"];
  algorithms.binarySearch = function binarySearch(E, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = C[0] || CT.C0 : null;
    return algorithms.binarySearchBy(E, E, sortedList, dart.gbind(C[1] || CT.C1, E), compare, value);
  };
  algorithms.binarySearchBy = function binarySearchBy(E, K, sortedList, keyOf, compare, value, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, sortedList[$length]);
    let min = start;
    let max = end;
    let key = keyOf(value);
    while (min < max) {
      let mid = min + (max - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(keyOf(element), key);
      if (comp === 0) return mid;
      if (comp < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return -1;
  };
  algorithms.lowerBound = function lowerBound(E, sortedList, value, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    compare == null ? compare = C[0] || CT.C0 : null;
    return algorithms.lowerBoundBy(E, E, sortedList, dart.gbind(C[1] || CT.C1, E), compare, value);
  };
  algorithms.lowerBoundBy = function lowerBoundBy(E, K, sortedList, keyOf, compare, value, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, sortedList[$length]);
    let min = start;
    let max = end;
    let key = keyOf(value);
    while (min < max) {
      let mid = min + (max - min)[$rightShift](1);
      let element = sortedList[$_get](mid);
      let comp = compare(keyOf(element), key);
      if (comp < 0) {
        min = mid + 1;
      } else {
        max = mid;
      }
    }
    return min;
  };
  algorithms.shuffle = function shuffle(elements, start = 0, end = null, random = null) {
    random == null ? random = math.Random.new() : null;
    end == null ? end = elements[$length] : null;
    let length = dart.notNull(end) - start;
    while (length > 1) {
      let pos = random.nextInt(length);
      length = length - 1;
      let tmp1 = elements[$_get](start + pos);
      elements[$_set](start + pos, elements[$_get](start + length));
      elements[$_set](start + length, tmp1);
    }
  };
  algorithms.reverse = function reverse(E, elements, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, elements[$length]);
    algorithms._reverse(E, elements, start, end);
  };
  algorithms._reverse = function _reverse(E, elements, start, end) {
    for (let i = start, j = end - 1; i < j; i = i + 1, j = j - 1) {
      let tmp = elements[$_get](i);
      elements[$_set](i, elements[$_get](j));
      elements[$_set](j, tmp);
    }
  };
  algorithms.insertionSort = function insertionSort(E, elements, opts) {
    let compare = opts && 'compare' in opts ? opts.compare : null;
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    compare == null ? compare = C[0] || CT.C0 : null;
    end == null ? end = elements[$length] : null;
    for (let pos = start + 1; pos < dart.notNull(end); pos = pos + 1) {
      let min = start;
      let max = pos;
      let element = elements[$_get](pos);
      while (min < max) {
        let mid = min + (max - min)[$rightShift](1);
        let comparison = compare(element, elements[$_get](mid));
        if (comparison < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      elements[$setRange](min + 1, pos + 1, elements, min);
      elements[$_set](min, element);
    }
  };
  algorithms.insertionSortBy = function insertionSortBy(E, K, elements, keyOf, compare, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, elements[$length]);
    algorithms._movingInsertionSort(E, K, elements, keyOf, compare, start, end, elements, start);
  };
  algorithms.mergeSort = function mergeSort(E, elements, opts) {
    let start = opts && 'start' in opts ? opts.start : 0;
    let end = opts && 'end' in opts ? opts.end : null;
    let compare = opts && 'compare' in opts ? opts.compare : null;
    end = core.RangeError.checkValidRange(start, end, elements[$length]);
    compare == null ? compare = C[0] || CT.C0 : null;
    let length = dart.notNull(end) - start;
    if (length < 2) return;
    if (length < 32) {
      algorithms.insertionSort(E, elements, {compare: compare, start: start, end: end});
      return;
    }
    let firstLength = (dart.notNull(end) - start)[$rightShift](1);
    let middle = start + firstLength;
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(E).filled(secondLength, elements[$_get](start));
    let id = dart.gbind(C[1] || CT.C1, E);
    algorithms._mergeSort(E, E, elements, id, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    algorithms._mergeSort(E, E, elements, id, compare, start, middle, elements, firstTarget);
    algorithms._merge(E, E, id, compare, elements, firstTarget, end, scratchSpace, 0, secondLength, elements, start);
  };
  algorithms.mergeSortBy = function mergeSortBy(E, K, elements, keyOf, compare, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, elements[$length]);
    let length = dart.notNull(end) - start;
    if (length < 2) return;
    if (length < 32) {
      algorithms._movingInsertionSort(E, K, elements, keyOf, compare, start, end, elements, start);
      return;
    }
    let middle = start + length[$rightShift](1);
    let firstLength = middle - start;
    let secondLength = dart.notNull(end) - middle;
    let scratchSpace = core.List$(E).filled(secondLength, elements[$_get](start));
    algorithms._mergeSort(E, K, elements, keyOf, compare, middle, end, scratchSpace, 0);
    let firstTarget = dart.notNull(end) - firstLength;
    algorithms._mergeSort(E, K, elements, keyOf, compare, start, middle, elements, firstTarget);
    algorithms._merge(E, K, keyOf, compare, elements, firstTarget, end, scratchSpace, 0, secondLength, elements, start);
  };
  algorithms._movingInsertionSort = function _movingInsertionSort(E, K, list, keyOf, compare, start, end, target, targetOffset) {
    let length = end - start;
    if (length === 0) return;
    target[$_set](targetOffset, list[$_get](start));
    for (let i = 1; i < length; i = i + 1) {
      let element = list[$_get](start + i);
      let elementKey = keyOf(element);
      let min = targetOffset;
      let max = targetOffset + i;
      while (min < max) {
        let mid = min + (max - min)[$rightShift](1);
        if (compare(elementKey, keyOf(target[$_get](mid))) < 0) {
          max = mid;
        } else {
          min = mid + 1;
        }
      }
      target[$setRange](min + 1, targetOffset + i + 1, target, min);
      target[$_set](min, element);
    }
  };
  algorithms._mergeSort = function _mergeSort(E, K, elements, keyOf, compare, start, end, target, targetOffset) {
    let length = end - start;
    if (length < 32) {
      algorithms._movingInsertionSort(E, K, elements, keyOf, compare, start, end, target, targetOffset);
      return;
    }
    let middle = start + length[$rightShift](1);
    let firstLength = middle - start;
    let secondLength = end - middle;
    let targetMiddle = targetOffset + firstLength;
    algorithms._mergeSort(E, K, elements, keyOf, compare, middle, end, target, targetMiddle);
    algorithms._mergeSort(E, K, elements, keyOf, compare, start, middle, elements, middle);
    algorithms._merge(E, K, keyOf, compare, elements, middle, middle + firstLength, target, targetMiddle, targetMiddle + secondLength, target, targetOffset);
  };
  algorithms._merge = function _merge(E, K, keyOf, compare, firstList, firstStart, firstEnd, secondList, secondStart, secondEnd, target, targetOffset) {
    let t0, t0$, t0$0, t0$1, t0$2, t0$3, t0$4, t0$5;
    if (!(firstStart < firstEnd)) dart.assertFailed(null, I[0], 363, 10, "firstStart < firstEnd");
    if (!(secondStart < secondEnd)) dart.assertFailed(null, I[0], 364, 10, "secondStart < secondEnd");
    let cursor1 = firstStart;
    let cursor2 = secondStart;
    let firstElement = firstList[$_get]((t0 = cursor1, cursor1 = t0 + 1, t0));
    let firstKey = keyOf(firstElement);
    let secondElement = secondList[$_get]((t0$ = cursor2, cursor2 = t0$ + 1, t0$));
    let secondKey = keyOf(secondElement);
    while (true) {
      if (compare(firstKey, secondKey) <= 0) {
        target[$_set]((t0$0 = targetOffset, targetOffset = t0$0 + 1, t0$0), firstElement);
        if (cursor1 === firstEnd) break;
        firstElement = firstList[$_get]((t0$1 = cursor1, cursor1 = t0$1 + 1, t0$1));
        firstKey = keyOf(firstElement);
      } else {
        target[$_set]((t0$2 = targetOffset, targetOffset = t0$2 + 1, t0$2), secondElement);
        if (cursor2 !== secondEnd) {
          secondElement = secondList[$_get]((t0$3 = cursor2, cursor2 = t0$3 + 1, t0$3));
          secondKey = keyOf(secondElement);
          continue;
        }
        target[$_set]((t0$4 = targetOffset, targetOffset = t0$4 + 1, t0$4), firstElement);
        target[$setRange](targetOffset, targetOffset + (firstEnd - cursor1), firstList, cursor1);
        return;
      }
    }
    target[$_set]((t0$5 = targetOffset, targetOffset = t0$5 + 1, t0$5), secondElement);
    target[$setRange](targetOffset, targetOffset + (secondEnd - cursor2), secondList, cursor2);
  };
  algorithms.quickSort = function quickSort(E, elements, compare, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, elements[$length]);
    algorithms._quickSort(E, E, elements, dart.gbind(C[1] || CT.C1, E), compare, math.Random.new(), start, end);
  };
  algorithms.quickSortBy = function quickSortBy(E, K, list, keyOf, compare, start = 0, end = null) {
    end = core.RangeError.checkValidRange(start, end, list[$length]);
    algorithms._quickSort(E, K, list, keyOf, compare, math.Random.new(), start, end);
  };
  algorithms._quickSort = function _quickSort(E, K, list, keyOf, compare, random, start, end) {
    let length = end - start;
    while (length >= 24) {
      let pivotIndex = random.nextInt(length) + start;
      let pivot = list[$_get](pivotIndex);
      let pivotKey = keyOf(pivot);
      let endSmaller = start;
      let startGreater = end;
      let startPivots = end - 1;
      list[$_set](pivotIndex, list[$_get](startPivots));
      list[$_set](startPivots, pivot);
      while (endSmaller < startPivots) {
        let current = list[$_get](endSmaller);
        let relation = compare(keyOf(current), pivotKey);
        if (relation < 0) {
          endSmaller = endSmaller + 1;
        } else {
          startPivots = startPivots - 1;
          let currentTarget = startPivots;
          list[$_set](endSmaller, list[$_get](startPivots));
          if (relation > 0) {
            startGreater = startGreater - 1;
            currentTarget = startGreater;
            list[$_set](startPivots, list[$_get](startGreater));
          }
          list[$_set](currentTarget, current);
        }
      }
      if (endSmaller - start < end - startGreater) {
        algorithms._quickSort(E, K, list, keyOf, compare, random, start, endSmaller);
        start = startGreater;
      } else {
        algorithms._quickSort(E, K, list, keyOf, compare, random, startGreater, end);
        end = endSmaller;
      }
      length = end - start;
    }
    algorithms._movingInsertionSort(E, K, list, keyOf, compare, start, end, list, start);
  };
  dart.defineLazy(algorithms, {
    /*algorithms._mergeSortLimit*/get _mergeSortLimit() {
      return 32;
    }
  }, false);
  dart.trackLibraries("packages/collection/src/algorithms", {
    "package:collection/src/algorithms.dart": algorithms
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["algorithms.dart"],"names":[],"mappings":"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","file":"algorithms.sound.ddc.js"}');
  // Exports:
  return {
    src__algorithms: algorithms
  };
}));

//# sourceMappingURL=algorithms.sound.ddc.js.map
