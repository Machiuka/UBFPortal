import 'dart:html';
import '../clase/load_detalii.dart';

class CautareMeniu {
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
          ld.loadInterogare(caut, "tbl_retete", "servInit", "servReteta");
        } else {
          //Cand este null inseamna ca am introdus tot continutul retetei

          window.alert('Caut este null');
        }
      }
    });
  }
}
