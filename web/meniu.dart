import 'dart:html';
import 'dart/clase/load_detalii.dart';
import 'dart/clase/global.dart';
import 'package:intl/intl.dart';
import 'dart/meniuri/rapoarte_meniu.dart';
import 'dart/meniuri/formular_meniu.dart';
import 'dart/meniuri/incarc_factura.dart';
import 'dart/clase/svg_file.dart';
import 'dart/meniuri/livrare_meniu.dart';
import 'dart/clase/css.dart';

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
  }
}
