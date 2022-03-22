import 'dart:html';
import 'dart:convert';
import 'loader.dart';
import 'load_detalii.dart';
import 'global.dart';
import 'ultim_numar.dart';
import 'css.dart';
import '../meniuri/meniu.dart';

class Login {
  void verificaParola() async {
    Loader loader = Loader();
    String userCode = Global.codOperator;
    loader.cautaPeServer(criteriu: '', tabel: 'tbl_users', numeServer: 'serverLogare', optiune: userCode).then((value) {
      window.alert(value);
      final _json = json.decode(value);
      if (_json['userAccess'] == 'OK') {
        Global.operator = _json['userName'];
        Global.userAccess = 'OK';

        _access();
      } else {
        parola();
      }
    });
  }

  void logOut() async {
    Loader loader = Loader();
    String userCode = Global.codOperator;
    Global.durataSesiunii = 0;
    Global.userAccess = 'NotOK';
    loader.cautaPeServer(criteriu: '', tabel: 'tbl_users', numeServer: 'serverLogare', optiune: userCode).then((value) {
      //   window.alert(value);
      window.location.reload();
      //final _json = json.decode(value);
    });
  }

  void parola() async {
    CSS.aplicaCSS("css/styles.css");
    CSS.aplicaCSS("css/styles_button.css");
    CSS.aplicaCSS("css/styles_formular.css");
    LoadDetalii.incarcFormular('html/form_login.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formLogin = querySelector("#formLogin") as FormElement;
    InputElement _userName = querySelector("#txtUserName") as InputElement;
    InputElement _userPass = querySelector("#txtUserPass") as InputElement;
    Element _btnOK = querySelector("#btnOKLogin") as Element;
    _btnOK.hidden = true;
    _userName.onChange.listen((event) => _btnOK.hidden = false);

    _btnOK.onClick.listen((e) {
      String? pass = _userPass.value;
      String? userCode = Global.codOperator;
      Global.operator = _userName.value!;
      pass = pass != null ? pass : '';
      Loader loader = Loader();

      loader.cautaPeServer(criteriu: pass, tabel: 'tbl_users', numeServer: 'serverLogare', optiune: userCode).then((value) {
        //window.alert(value);
        final _json = json.decode(value);
        if (_json['userAccess'] == 'OK') {
          Global.operator = _json['userName'];
          Global.userAccess = 'OK';
          _formLogin.remove();
          _access();
        } else {
          window.alert('USER SAU PAROLA INCORECTE!!!');
          window.location.reload();
        }
      });
    });
  }

  void _access() async {
    UltimNumar.ultimNumar();
    Meniu.topMeniu();
    await Future.delayed(const Duration(milliseconds: 50)); //sa apuce sa incarce formularele
  }
}
