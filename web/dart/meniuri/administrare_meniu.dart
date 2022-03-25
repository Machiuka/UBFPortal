import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/css.dart';
import '../forms/form_firma.dart';
import 'admin_clienti.dart';

class AdministrareMeniu {
  static void administrareMeniu() async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;

    LoadDetalii.incarcFormular('html/administrare_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnAdminClienti = querySelector('#btnAdminClienti') as Element;
    Element _btnFirma = querySelector('#btnFirma') as Element;
    Element _btnSetari = querySelector('#btnSetari') as Element;
    Element _btnAdminInapoi = querySelector('#btnAdminInapoi') as Element;

    DivElement _administrareNav = querySelector('#administrare_nav') as DivElement;

    _btnAdminClienti.onClick.listen((e) {
      _administrareNav.remove();
      AdminClienti.administrareClienti();
    });

    _btnFirma.onClick.listen((e) {
      //De aici se schimba firma.
      _administrareNav.remove();
      FormFirma.formFirma();
    });

    _btnSetari.onClick.listen((e) {
      _administrareNav.remove();
      // FormularMeniu.formularMeniu('AVIZ');
    });

    _btnAdminInapoi.onClick.listen((e) {
      _administrareNav.remove();

      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
