import 'ubf_document.dart';
import 'ubf_user.dart';
import 'optiune.dart';

class Global {
  static Optiune optiune = Optiune as Optiune;
  //static String url = "http://127.0.0.1/serv.php?x={}";
  static String url = 'http://localhost/servPF.php?x={"obj":"pf"}';
  static String? bazaDate; //tabelul de care avem nevoie
  static String operator = "Sorin Neagu";
  static String continut = ''; //continutul retetei, facturii, avizului...sub forma '102^2|
  //ultimNumar preia la inceput ultimele numere de pe server pentru fiecare categorie (factura, aviz, etc) pt a avea numere/coduri unice
  static Map<String, int> ultimNumar = {'nrFactura': 100, 'nrAviz': 200, 'nrReteta': 9900, 'nrClient': 1150, 'nrUser': 1, 'nrGestiune': 1};
  static String element = ''; //este elementul rezultat din interogare server (ex materie prima de adaugat in reteta)
  static Map<String, dynamic>? js; //nefolosit
  static String denumire = '';
  static String cod_elem = '';
  static String cantitate = '';
  static String articoleFactura = ''; //este un sir de tip Json
/*
  UBFUser _ubfUser = UBFUser as UBFUser;

  UBFDocument _ubfDocument = UBFDocument as UBFDocument;

  UBFDocument get ubfDocument => _ubfDocument;
  UBFUser get ubfUser => _ubfUser;

  set ubfDocument(UBFDocument d) => _ubfDocument = d;
  set ubfUser(UBFUser u) => _ubfUser = u;
  */
}
