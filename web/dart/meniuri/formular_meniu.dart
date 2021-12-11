import 'dart:html';
import '../clase/load_detalii.dart';
import 'adaugare_reteta.dart';
import 'cautare_meniu.dart';

class FormularMeniu {
  static void formularMeniu(String titlu) async {
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
      window.alert('Apasat buton Stergere');
    });
  }
}
