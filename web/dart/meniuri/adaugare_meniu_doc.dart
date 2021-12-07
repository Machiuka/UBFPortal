import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/ubf_document.dart';
import '../clase/global.dart';
import 'package:intl/intl.dart';

class AdaugareMeniuDoc {
  static void adaugareMeniuDoc(
      String titlu, String tabel, String server) async {
    //Aici adauga documente

    UBFDocument document = UBFDocument();
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
    InputElement _continutDoc = querySelector("#continutDoc") as InputElement;
    InputElement _obsDoc = querySelector("#obsDoc") as InputElement;

    if (titlu == "Adauga Reteta") {
      _nrDoc.placeholder = "Cod Produs Finit";
      _emitentDoc.placeholder = "Denumire Produs Finit";
      _destinatarDoc.placeholder = "Termen de valabilitate in zile";
      document.tipDoc = 'rt';
    }

    _btnAdauga.onClick.listen((e) async {
      // window.alert(_dataDoc.value.toString());
      final DateTime dataCurenta = DateTime.parse(_dataDoc.value.toString());
      final DateFormat formatareData = DateFormat('yyyy-M-dd');
      final String dataDoc = formatareData.format(dataCurenta);

      document.dataDoc = dataDoc;
      document.nrDoc = _nrDoc.value;
      document.emitentDoc =
          _emitentDoc.value; //Pt reteta il folosim ca denumire produs finit
      document.destinatarDoc = _destinatarDoc
          .value; //Pt reteta il folosim ca termen de valabilitate in zile
      document.continutDoc = _continutDoc.value;
      document.obsDoc = _obsDoc.value;
      LoadDetalii ld = LoadDetalii();
      ld.loadIncarcareDoc(tabel, server, document);
      // ld.loadInterogare(document.emitentDoc.toString(), 'denumire', tabel, server);
    });

    _btnAnulare.onClick.listen((e) {
      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
