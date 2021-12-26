import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/global.dart';
import 'package:intl/intl.dart';
import 'rapoarte_meniu.dart';
import 'formular_meniu.dart';
import '../clase/svg_file.dart';
import 'livrare_meniu.dart';
import '../clase/css.dart';
import '../clase/login.dart';

//Aici este actiunea cand se face click pe meniurile din meniu_nav.dart
class Meniu {
  static void topMeniu() async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    LoadDetalii.incarcFormular('html/top_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnLivrare = querySelector('#btnLivrare') as Element;
    Element _btnRetetar = querySelector('#btnRetetar') as Element;
    Element _btnRapoarte = querySelector('#btnRapoarte') as Element;
    Element _btnPreviziuni = querySelector('#btnPreviziuni') as Element;
    Element _btnAdministrare = querySelector('#btnAdministrare') as Element;
    Element _btnExit = querySelector('#btnExit') as Element;

    _btnLivrare.onClick.listen((e) {
      LivrareMeniu.livrareMeniu();
    });

    _btnRetetar.onClick.listen((e) {
      FormularMeniu.formularMeniu('RETETAR');
      //  Global.optiune = Optiune.rd;
    });

    _btnRapoarte.onClick.listen((e) {
      RapoarteMeniu.rapoarteMeniu();
    });
    _btnPreviziuni.onClick.listen((e) {
      SvgFile.svgFile();
    });

    _btnAdministrare.onClick.listen((e) {
      window.alert('Apasat buton Administrare');
    });

    _btnExit.onClick.listen((e) {
      Login logOut = Login();
      logOut.logOut();
    });
  }
}
