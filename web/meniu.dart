import 'dart:html';
import 'dart:math';
import 'dart/clase/global.dart';

import 'dart/clase/optiune.dart';
import 'dart/clase/load_detalii.dart';

//Aici este actiunea cand se face click pe meniurile din meniu_nav.dart
class Meniu {
  static void topMeniu() async {
    LoadDetalii.barMeniu('html/top_nav.html');
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
    LoadDetalii.barMeniu('html/rapoarte_nav.html');
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
      LoadDetalii.barMeniu('html/top_nav.html');
    });
  }

  static void formularMeniu(String titlu) async {
    Element _divTopNav = querySelector('#top_nav') as Element;
    _divTopNav.hidden = true;
    LoadDetalii.barMeniu('html/form_detalii.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnCautare = querySelector('#btnCautare') as Element;
    Element _btnAdaugare = querySelector('#btnAdaugare') as Element;
    Element _btnModificare = querySelector('#btnModificare') as Element;
    Element _btnStergere = querySelector('#btnStergere') as Element;
    Element _titluH1 = querySelector('#titluDetalii') as Element;
    UListElement _listaDetalii = querySelector('#listaDetalii') as UListElement;
    _titluH1.innerHtml = titlu;

    _btnCautare.onClick.listen((e) {
      if (titlu == "RETETAR") {
        cautareMeniu(titlu);
      }
    });
    _btnAdaugare.onClick.listen((e) {
      window.alert('Apasat buton Adaugare');
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
    LoadDetalii.barMeniu('html/form_cautare.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnOK = querySelector('#btnOK') as Element;
    FormElement _formCautare = querySelector('#formCautare') as FormElement;
    _formDetalii.replaceWith(_formCautare);

    InputElement _txtCautare = querySelector("#cautare") as InputElement;

    _btnOK.onClick.listen((e) {
      if (titlu == "RETETAR") {
        //Aici se ocupa de butonul Retetar
        String? caut = _txtCautare.value;
        if (caut != null) {
          _formCautare.replaceWith(
              _formDetalii); //sterg formularul pentru a nu se adauga cautare peste cautare
          LoadDetalii ld = LoadDetalii();
          ld.loadRetetar(caut, "den_pf", "tbl_retete", "servInit");
        } else {
          window.alert('Caut este null');
        }
      }
    });
  }
}
