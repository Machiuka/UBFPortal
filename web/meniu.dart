import 'dart:html';
import 'dart:math';
import 'dart/clase/global.dart';
import 'package:intl/intl.dart';

import 'dart/clase/optiune.dart';
import 'dart/clase/load_detalii.dart';
import 'dart/clase/ubf_document.dart';
import 'dart/clase/ubf_user.dart';

//Aici este actiunea cand se face click pe meniurile din meniu_nav.dart
class Meniu {
  static void topMeniu() async {
    LoadDetalii.incarcFormular('html/top_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnAprovizionare = querySelector('#btnAprovizionare') as Element;
    Element _btnLivrare = querySelector('#btnLivrare') as Element;
    Element _btnRetetar = querySelector('#btnRetetar') as Element;
    Element _btnRapoarte = querySelector('#btnRapoarte') as Element;
    Element _btnPreviziuni = querySelector('#btnPreviziuni') as Element;
    Element _btnAdministrare = querySelector('#btnAdministrare') as Element;

    _btnAprovizionare.onClick.listen((e) {
      Element _divTopNav = querySelector('#top_nav') as Element;
      _divTopNav.hidden = true;
    });
    _btnLivrare.onClick.listen((e) {
      window.alert('Apasat buton Livrare');
      print('BtnIesiri');
    });

    _btnRetetar.onClick.listen((e) {
      formularMeniu('RETETAR');
      //  Global.optiune = Optiune.rd;
    });

    _btnRapoarte.onClick.listen((e) {
      rapoarteMeniu();
    });
    _btnPreviziuni.onClick.listen((e) {
      window.alert('Apasat buton Previziuni');
    });

    _btnAdministrare.onClick.listen((e) {
      window.alert('Apasat buton Administrare');
    });
  }

  static void rapoarteMeniu() async {
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;
    LoadDetalii.incarcFormular('html/rapoarte_nav.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnIntrari = querySelector('#btnIntrari') as Element;
    Element _btnIesiri = querySelector('#btnIesiri') as Element;
    Element _btnGestiuni = querySelector('#btnGestiuni') as Element;
    Element _btnLaborator = querySelector('#btnLaborator') as Element;
    Element _btnInapoi = querySelector('#btnInapoi') as Element;
    Element _divRapoarteNav = querySelector('#rapoarte_nav') as Element;

    _btnIntrari.onClick.listen((e) {
      window.alert('Apasat buton Intrari');
    });
    _btnIesiri.onClick.listen((e) {
      window.alert('Apasat buton Iesiri');
    });

    _btnGestiuni.onClick.listen((e) {
      window.alert('Apasat buton Gestiuni');
    });

    _btnLaborator.onClick.listen((e) {
      window.alert('Apasat buton Laborator');
    });
    _btnInapoi.onClick.listen((e) {
      _divRapoarteNav.hidden = true;

      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }

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
        cautareMeniu(titlu);
      }
    });
    _btnAdaugare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        adaugareMeniuDoc("Adauga Reteta", "tbl_retete", "serverCRUD");
      }
    });

    _btnModificare.onClick.listen((e) {
      window.alert('Apasat buton Modificare');
    });

    _btnStergere.onClick.listen((e) {
      window.alert('Apasat buton Stergere');
    });
  }

  static void cautareMeniu(String titlu) async {
    //Element _divTopNav = querySelector('#top_nav') as Element;
    //_divTopNav.hidden = true;
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_cautare.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnOK = querySelector('#btnOK') as Element;
    FormElement _formCautare = querySelector('#formCautare') as FormElement;
    _formDetalii.replaceWith(_formCautare);

    InputElement _txtCautare = querySelector("#txtCautare") as InputElement;

    _btnOK.onClick.listen((e) {
      if (titlu == "RETETAR") {
        //Aici se ocupa de butonul Retetar
        String? caut = _txtCautare.value;
        if (caut != null) {
          _formCautare.replaceWith(
              _formDetalii); //sterg formularul pentru a nu se adauga cautare peste cautare
          LoadDetalii ld = LoadDetalii();
          ld.loadInterogare(
              caut, "den_pf", "tbl_retete", "servInit", "servReteta");
        } else {
          window.alert('Caut este null');
        }
      }
    });
  }

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
    InputElement _tipDoc = querySelector("#tipDoc") as InputElement;
    InputElement _continutDoc = querySelector("#continutDoc") as InputElement;
    InputElement _obsDoc = querySelector("#obsDoc") as InputElement;

    if (titlu == "Adauga Reteta") {
      _nrDoc.placeholder = "Cod Produs Finit";
      _emitentDoc.placeholder = "Denumire Produs Finit";
      _destinatarDoc.placeholder = "Termen de valabilitate in zile";
    }

    _btnAdauga.onClick.listen((e) {
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
      document.tipDoc = _tipDoc.value;
      document.continutDoc = _continutDoc.value;
      document.obsDoc = _obsDoc.value;
      LoadDetalii ld = LoadDetalii();
      ld.loadIncarcareDoc(tabel, server, document);
    });

    _btnAnulare.onClick.listen((e) {
      window.location.reload(); //echivalent cu refresh pagina
      LoadDetalii.incarcFormular('html/top_nav.html');
    });
  }
}
