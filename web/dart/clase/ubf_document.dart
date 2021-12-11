import 'global.dart';

class UBFDocument {
  static int? idx;
  static String? dataDoc;
  static String? nrDoc;
  static String? emitentDoc;
  static String? destinatarDoc;
  static String?
      tipDoc; //fi-factura intrare, fe - factura iesire, av - aviz expeditie, rt - reteta
  static String? continutDoc; //aici va fi un sir de tip JSON
  static String? dateEmitentDoc; //si aici la fel
  static String? dateDestinatarDoc; //si aici la fel
  static String? obsDoc;
  static String operator = Global.operator; //doar in test am nevoie de el

  /*
  UBFDocument(
      {this.idx,
      this.dataDoc,
      this.nrDoc,
      this.emitentDoc,
      this.destinatarDoc,
      this.tipDoc,
      this.continutDoc,
      this.dateEmitentDoc,
      this.dateDestinatarDoc,
      this.obsDoc});
*/

  Map toJson() => {
        'idx': idx,
        'dataDoc': dataDoc,
        'nrDoc': nrDoc,
        'emitentDoc': emitentDoc,
        'destinatarDoc': destinatarDoc,
        'tipDoc': tipDoc,
        'continutDoc': continutDoc,
        'dateEmitentDoc': dateEmitentDoc,
        'dateDestinatarDoc': dateDestinatarDoc,
        'obs': obsDoc,
        'operator': operator
      };
}
