import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/ubf_document.dart';
import '../clase/global.dart';
import 'package:intl/intl.dart';

import 'cautare_element.dart';

class AdaugareReteta {
  static void adaugareReteta(String titlu, String tabel, String server) async {
    //Aici adauga retete

    //UBFDocument document = UBFDocument();

    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_document.html');
    await Future.delayed(const Duration(milliseconds: 150));

    Element _btnAdauga = querySelector('#btnAdauga') as Element;
    Element _btnAnulare = querySelector('#btnAnulare') as Element;
    FormElement _formDocument = querySelector('#formDocument') as FormElement;
    _formDetalii.replaceWith(_formDocument);
    Element _titluDocument = querySelector('#titluDocument') as Element;
    _titluDocument.innerHtml = titlu;

    InputElement _dataDoc = querySelector("#dataDoc") as InputElement;
    InputElement _nrDoc = querySelector("#nrDoc") as InputElement;
    InputElement _emitentDoc = querySelector("#emitentDoc") as InputElement;
    InputElement _destinatarDoc =
        querySelector("#destinatarDoc") as InputElement;
    //SelectElement _tipDoc = querySelector("#tipDoc") as SelectElement;
    InputElement _obsDoc = querySelector("#obsDoc") as InputElement;
    if (titlu == "Adauga Reteta") {
      _nrDoc.placeholder = "Cod Produs Finit";
      _emitentDoc.placeholder = "Denumire Produs Finit";
      _destinatarDoc.placeholder = "Termen de valabilitate in zile";
      UBFDocument.tipDoc = 'rt';
    }

    _btnAdauga.onClick.listen((e) async {
      // window.alert(_dataDoc.value.toString());
      final DateTime dataCurenta = DateTime.parse(_dataDoc.value.toString());
      final DateFormat formatareData = DateFormat('yyyy-M-dd');
      final String dataDoc = formatareData.format(dataCurenta);

      UBFDocument.dataDoc = dataDoc;
      UBFDocument.nrDoc = _nrDoc.value;
      UBFDocument.emitentDoc =
          _emitentDoc.value; //Pt reteta il folosim ca denumire produs finit
      UBFDocument.destinatarDoc = _destinatarDoc
          .value; //Pt reteta il folosim ca termen de valabilitate in zile
      UBFDocument.obsDoc = _obsDoc.value;
      bool _adaugare = true; //adauga in bucla pana se face false

      _formDocument.remove();

      CautareElement.cautareElement('RETETAR');
    });

    _btnAnulare.onClick.listen((e) {
      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
