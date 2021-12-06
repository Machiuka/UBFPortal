import 'global.dart';

class UBFDocument {
  int? idx;
  String? dataDoc;
  String? nrDoc;
  String? emitentDoc;
  String? destinatarDoc;
  String?
      tipDoc; //fi-factura intrare, fe - factura iesire, av - aviz expeditie, rt - reteta
  String? continutDoc; //aici va fi un sir de tip JSON
  String? dateEmitentDoc; //si aici la fel
  String? dateDestinatarDoc; //si aici la fel
  String? obsDoc;
  String operator = Global.operator; //doar in test am nevoie de el

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
        'obsDoc': obsDoc,
        'operator': operator
      };
}
