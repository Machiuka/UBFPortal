import 'global.dart';

class UBFDocument {
  static int? idx;
  static String? dataDoc;
  static String? nrDoc;
  static String? emitentDoc;
  static String? destinatarDoc;
  static String? tipDoc; //fi-factura intrare, fe - factura iesire, av - aviz expeditie, rt - reteta
  static String? continutDoc; //aici va fi un sir
  static String? dateEmitentDoc; //si aici la fel
  static String? denumire;
  static String? dateDestinatarDoc; //si aici la fel
  static String? obsDoc;
  static String operator = Global.operator; //doar in test am nevoie de el
  static double? pretVanzare;
  static int? cotaTVA;
  static int incasata = 1; //0 pt neincasata
  static int? valabilitate; //pt facturi este termen de plata
  static String? descriere;
  static String? codElem;
  static int? gramaj;
  static String? linkPhoto;

  Map toJson() => {
        'idx': idx,
        'dataDoc': dataDoc,
        'denumire': denumire,
        'nrDoc': nrDoc,
        'codElem': codElem,
        'valabilitate': valabilitate,
        'emitentDoc': emitentDoc,
        'destinatarDoc': destinatarDoc,
        'tipDoc': tipDoc,
        'gramaj': gramaj,
        'continutDoc': continutDoc,
        'dateEmitentDoc': dateEmitentDoc,
        'dateDestinatarDoc': dateDestinatarDoc,
        'obs': obsDoc,
        'incasata': incasata,
        'descriere': descriere,
        'pretVanzare': pretVanzare,
        'cotaTVA': cotaTVA,
        'linkPhoto': linkPhoto,
        'operator': operator
      };
}
