import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/css.dart';
import 'formular_meniu.dart';

class LivrareMeniu {
  static void livrareMeniu() async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;
    LoadDetalii.incarcFormular('html/livrare_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnFacturi = querySelector('#btnFacturi') as Element;
    Element _btnAvize = querySelector('#btnAvize') as Element;
    Element _btnBack = querySelector('#btnBack') as Element;
    Element _divLivrariNav = querySelector('#livrare_nav') as Element;

    _btnFacturi.onClick.listen((e) {
      _divLivrariNav.remove();
      FormularMeniu.formularMeniu('FACTURA');
    });
    _btnAvize.onClick.listen((e) {
      window.alert('Apasat buton Avize');
    });

    _btnBack.onClick.listen((e) {
      _divLivrariNav.remove();

      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
