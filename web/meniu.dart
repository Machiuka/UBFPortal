import 'dart:html';
import 'dart/clase/load_detalii.dart';
import 'dart/clase/global.dart';
import 'package:intl/intl.dart';
import 'dart/meniuri/rapoarte_meniu.dart';
import 'dart/meniuri/formular_meniu.dart';

//Aici este actiunea cand se face click pe meniurile din meniu_nav.dart
class Meniu {
  static void topMeniu() async {
    LoadDetalii.incarcFormular('html/top_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnAprovizionare = querySelector('#btnAprovizionare') as Element;
    Element _btnLivrare = querySelector('#btnLivrare') as Element;
    Element _btnRetetar = querySelector('#btnRetetar') as Element;
    Element _btnRapoarte = querySelector('#btnRapoarte') as Element;
    Element _btnPreviziuni = querySelector('#btnPreviziuni') as Element;
    Element _btnAdministrare = querySelector('#btnAdministrare') as Element;

    _btnAprovizionare.onClick.listen((e) {
      Element _divTopNav = querySelector('#top_nav') as Element;
      _divTopNav.hidden = true;
    });
    _btnLivrare.onClick.listen((e) {
      window.alert('Apasat buton Livrare');
      print('BtnIesiri');
    });

    _btnRetetar.onClick.listen((e) {
      FormularMeniu.formularMeniu('RETETAR');
      //  Global.optiune = Optiune.rd;
    });

    _btnRapoarte.onClick.listen((e) {
      RapoarteMeniu.rapoarteMeniu();
    });
    _btnPreviziuni.onClick.listen((e) {
      window.alert('Apasat buton Previziuni');
    });

    _btnAdministrare.onClick.listen((e) {
      window.alert('Apasat buton Administrare');
    });
  }
}
