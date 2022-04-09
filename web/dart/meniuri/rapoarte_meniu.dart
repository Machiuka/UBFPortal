import 'dart:html';
import '../clase/load_detalii.dart';

class RapoarteMeniu {
  static void rapoarteMeniu() async {
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;
    LoadDetalii.incarcFormular('html/rapoarte_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnIntrari = querySelector('#btnIntrari') as Element;
    Element _btnIesiri = querySelector('#btnIesiri') as Element;
    Element _btnGestiuni = querySelector('#btnGestiuni') as Element;
    Element _btnLaborator = querySelector('#btnLaborator') as Element;
    Element _btnInapoi = querySelector('#btnInapoi') as Element;
    Element _divRapoarteNav = querySelector('#rapoarte_nav') as Element;

    _btnIntrari.onClick.listen((e) {
      window.alert('Apasat buton Intrari');
    });
    _btnIesiri.onClick.listen((e) {
      window.alert('Apasat buton Iesiri');
    });

    _btnGestiuni.onClick.listen((e) {
      window.alert('Apasat buton Gestiuni');
    });

    _btnLaborator.onClick.listen((e) {
      window.alert('Apasat buton Laborator');
    });
    _btnInapoi.onClick.listen((e) {
      _divRapoarteNav.hidden = true;

      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
