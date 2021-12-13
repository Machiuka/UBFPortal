import 'dart:html';
import '../clase/load_detalii.dart';
import 'cautare_meniu.dart';
import '../clase/css.dart';
import 'adaugare_reteta.dart';
import 'stergere_reteta.dart';

class FormularMeniu {
  static void formularMeniu(String titlu) async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;
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
        CautareMeniu.cautareMeniu(titlu);
      }
    });
    _btnAdaugare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        AdaugareReteta.adaugareReteta(
            "Adauga Reteta", "tbl_retete", "serverCRUD");
      }
    });

    _btnModificare.onClick.listen((e) {
      window.alert('Apasat buton Modificare');
    });

    _btnStergere.onClick.listen((e) {
      if (titlu == "RETETAR") {
        StergereReteta.stergere("Sterge Reteta", "tbl_retete", "servInit");
      }
    });
  }
}
