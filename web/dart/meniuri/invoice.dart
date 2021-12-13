import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/css.dart';

class Invoice {
  static void invoice() async {
    CSS.eliminaCSS("css/styles.css");
    CSS.eliminaCSS("css/styles_button.css");
    CSS.eliminaCSS("css/styles_formular.css");
    CSS.aplicaCSS("css/invoice.css");
    DivElement _topNav = querySelector('#top_nav') as DivElement;
    _topNav.remove();
    LoadDetalii.incarcFormular('html/factura.html');
    await Future.delayed(const Duration(milliseconds: 50));
  }
}
