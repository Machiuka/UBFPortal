import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/local_storage.dart';
import '../clase/css.dart';

class FormFirma {
  static void formFirma() async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    String formular = 'html/form_firma.html';
    String sufix = '';
    LocalStorage local = LocalStorage();
    LoadDetalii.incarcFormular(formular);
    await Future.delayed(const Duration(milliseconds: 50));
    //FormElement _formClient = querySelector("#formClient") as FormElement;

    Element _btnATP = querySelector("#btnATP") as Element;
    Element _btnUBF = querySelector("#btnUBF") as Element;
    Element _numeFirma = querySelector("#numeFirma") as Element;
    sufix = local.cauta('sufix').toString();
    if (sufix == '_ubf') {
      _numeFirma.innerHtml = 'UN BAIAT SI O FATA SRL';
    } else {
      _numeFirma.innerHtml = 'ALEX THEO PARTY SRL';
    }
    _btnATP.onClick.listen((e) {
      local.adauga('sufix', '_atp');
      window.location.reload();
    });
    _btnUBF.onClick.listen((e) {
      local.adauga('sufix', '_ubf');
      window.location.reload();
    });
  }
}
