import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/load_factura.dart';
import 'cautare_reteta.dart';
import '../clase/css.dart';
import 'adaugare_reteta.dart';
import 'stergere_reteta.dart';
import 'cautare_cumparator.dart';
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
    Element _divModificare = querySelector('#divModificare') as Element;
    Element _btnStergere = querySelector('#btnStergere') as Element;
    Element _titluH1 = querySelector('#titluDetalii') as Element;
    // if (titlu == 'FACTURA' || titlu == 'AVIZ') _divModificare.hidden = true;
    LoadFactura lf = LoadFactura();
    bool confirm = false;

    _titluH1.innerHtml = titlu;

    _btnCautare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        CautareReteta.cautareReteta(titlu);
      }
      if (titlu == "FACTURA" || titlu == "AVIZ") {
        CautareFactura.cautareFactura(titlu);
      }
    });
    _btnAdaugare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        AdaugareReteta.adaugareReteta("Adauga Reteta", "tbl_produse", "serverAdaugReteta");
      }
      if (titlu == "FACTURA" || titlu == "AVIZ") {
        CautareCumparator.cautareCumparator(titlu);
      }
    });

    _btnModificare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        CautareReteta.cautareReteta('MODIFICARE PRODUS FINIT');
      }
      if (titlu == "FACTURA") {
        //**************DE REZOLVAT
        window.alert("Modificare ultima factura");
      }
      if (titlu == "AVIZ") {
        //*************DE REZOLVAT */
        window.alert("Modificare ultim aviz");
      }
    });

    _btnStergere.onClick.listen((e) {
      if (titlu == "RETETAR") {
        StergereReteta.stergere("Sterge Reteta", "tbl_produse", "serverCautStergReteta");
      }
      if (titlu == "FACTURA") {
        //StergereReteta.stergere("Sterge Reteta", "tbl_produse", "serverCautStergReteta");
        confirm = window.confirm("Ultima factura va fi stearsa. Ok, pt confirmare, Cancel pt anulare");
        if (confirm) lf.loadStergere('fe', 'tbl_facturi', 'serverAdaugFactura');
      }
      if (titlu == "AVIZ") {
        confirm = window.confirm("Ultimul aviz va fi sters. Ok, pt confirmare, Cancel pt anulare");
        if (confirm) lf.loadStergere('av', 'tbl_avize', 'serverAdaugFactura');
      }
    });
  }
}
