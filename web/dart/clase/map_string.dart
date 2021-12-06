import 'dart:html';
import 'dart:convert';

class MapString {
  static String mapToString(Map<Object?, Object?> m) {
    // Reuses the list in IterableBase for detecting toString cycles.
    String result = '{';
    bool first = true;
    m.forEach((Object? k, Object? v) {
      if (!first) {
        result = result + (', ');
      }
      first = false;
      result = result + k.toString();
      result = result + (': ');
      result = result + v.toString();
    });
    result = result + '}';
    return result;
  }
}
