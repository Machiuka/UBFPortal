import 'ubf_document.dart';
import 'ubf_user.dart';
import 'optiune.dart';

class Global {
  static Optiune optiune = Optiune as Optiune;
  //static String url = "http://127.0.0.1/serv.php?x={}";
  static String url = 'http://localhost/servPF.php?x={"obj":"pf"}';
  static String? bazaDate; //tabelul de care avem nevoie
  static String operator = "Sorin Neagu";

  UBFUser _ubfUser = UBFUser as UBFUser;

  UBFDocument _ubfDocument = UBFDocument as UBFDocument;

  UBFDocument get ubfDocument => _ubfDocument;
  UBFUser get ubfUser => _ubfUser;

  set ubfDocument(UBFDocument d) => _ubfDocument = d;
  set ubfUser(UBFUser u) => _ubfUser = u;
}
