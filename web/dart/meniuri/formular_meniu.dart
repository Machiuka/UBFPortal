import 'dart:html';
import '../clase/load_detalii.dart';
import 'cautare_reteta.dart';
import '../clase/css.dart';
import 'adaugare_reteta.dart';
import 'stergere_reteta.dart';
import 'cautare_client.dart';
import 'cautare_factura.dart';

class FormularMeniu {
  static void formularMeniu(String titlu) async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.remove();
    LoadDetalii.incarcFormular('html/form_detalii.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnCautare = querySelector('#btnCautare') as Element;
    Element _btnAdaugare = querySelector('#btnAdaugare') as Element;
    Element _btnModificare = querySelector('#btnModificare') as Element;
    Element _btnStergere = querySelector('#btnStergere') as Element;
    Element _titluH1 = querySelector('#titluDetalii') as Element;

    _titluH1.innerHtml = titlu;

    _btnCautare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        CautareReteta.cautareReteta(titlu);
      }
      if (titlu == "FACTURA") {
        CautareFactura.cautareFactura(titlu);
      }
    });
    _btnAdaugare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        AdaugareReteta.adaugareReteta("Adauga Reteta", "tbl_produse", "serverAdaugReteta");
      }
      if (titlu == "FACTURA") {
        CautareClient.cautareClient(titlu);
      }
    });

    _btnModificare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        CautareReteta.cautareReteta('MODIFICARE PRODUS FINIT');
      }
    });

    _btnStergere.onClick.listen((e) {
      if (titlu == "RETETAR") {
        StergereReteta.stergere("Sterge Reteta", "tbl_produse", "serverCautStergReteta");
      }
    });
  }
}
