import 'dart:html';
import 'dart:convert';
import 'dart:svg';
import '../clase/load_detalii.dart';
import '../clase/global.dart';
import '../clase/ubf_document.dart';

class CautareElement {
  static void cautareElement(String titlu) async {
    //Element _divTopNav = querySelector('#top_nav') as Element;
    //_divTopNav.hidden = true;
    //  FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_cautare.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnOK = querySelector('#btnOK') as Element;
    FormElement _formCautare = querySelector('#formCautare') as FormElement;
    //_formDetalii.replaceWith(_formCautare);

    InputElement _txtCautare = querySelector("#txtCautare") as InputElement;

    _btnOK.onClick.listen((e) async {
      LoadDetalii ld = LoadDetalii();

      if (titlu == "RETETAR") {
        //Aici se ocupa de butonul Retetar
        String? caut = _txtCautare.value;
        if (caut != '') {
          //sterg formularul pentru a nu se adauga cautare peste cautare

          ld.loadElement(caut!, "tbl_mp", "servInit");
        } else {
          int lungime = Global.continut.length;

          Global.continut = Global.continut.substring(0, lungime - 1);

          UBFDocument.continutDoc = Global.continut;
          Global.continut = '';
          LoadDetalii.incarcFormular(
              'html/form_document.html'); //Este cerut la raspuns_tabel
          await Future.delayed(const Duration(milliseconds: 50));
          //    window.alert(Global.continut);
          _formCautare.remove();

          ld.loadIncarcareDoc("tbl_retete", "serverCRUD", UBFDocument());
        }
      }
    });
  }
}
