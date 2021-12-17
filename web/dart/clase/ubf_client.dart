import 'global.dart';

class UBFClient {
  static int? idx;
  static int? codElem;
  static String? denumire;
  static String? cui;
  static String? analitic;
  static int? discount;
  static String? adresa;
  static String? contBanca;
  static String? banca;
  static String? tel;
  static String? email;
  static String? webPage;
  static String? grupa;
  static String? cif;
  static String? delegat;
  static String? ciNr;
  static String? ciPol;
  static String? masina;
  static String? numeAgent;
  static int tPlata = 0;

  Map toJson() => {
        'idx': idx,
        'codElem': codElem,
        'denumire': denumire,
        'cui': cui,
        'analitic': analitic,
        'discount': discount,
        'adresa': adresa,
        'contBanca': contBanca,
        'banca': banca,
        'tel': tel,
        'email': email,
        'webPage': webPage,
        'grupa': grupa,
        'cif': cif,
        'delegat': delegat,
        'ciNr': ciNr,
        'ciPol': ciPol,
        'masina': masina,
        'numeAgent': numeAgent,
        'tPlata': tPlata
      };
}
