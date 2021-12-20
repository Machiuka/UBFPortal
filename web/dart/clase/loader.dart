import 'dart:html';

import 'dart:convert';
import 'package:http/http.dart' as http;
import 'ubf_document.dart';
import 'ubf_user.dart';
import 'ubf_client.dart';
import 'ubf_factura.dart';

class Loader {
  //nu am nevoie de headers, fiindca setarea e din serverul php
  final _headers = {
    "Accept": "application/json",
  };

  // Future<void> makeRequest(Event _) async {
  Future<String> cautaPeServer({required String criteriu, required String tabel, required String numeServer, required String opt}) async {
    numeServer = numeServer + ".php";
    //const path = 'https://netta.ro/ubf/test/'.?numeServer.'?x={"obj":"pf"}';
    String path = 'http://localhost/' + numeServer + '?x={"criteriu":"$criteriu", "tabel":"$tabel", "opt":"$opt"}';
    //window.alert(path);
    // var response = await http.get(Uri.parse(path), headers: _headers);
    var response = await http.get(Uri.parse(path));
    if (response.statusCode == 200) {
      String rezultat = response.body;

      return rezultat;
    }
    // The GET request failed. Handle the error.
    else {
      window.alert("Couldn't open $path");
      return ("Couldn't open $path");
    }
  }

  Future<String> adaugaPeServer(
      {required String tabel,
      required String numeServer,
      required String opt,
      required String tipDoc,
      UBFDocument? docData,
      UBFFactura? factData,
      UBFUser? userData,
      UBFClient? clientData}) async {
    numeServer = numeServer + ".php";
    Map<String, dynamic>? _obj = {"tabel": tabel};
    if (tipDoc == 'rt') {
      _obj = null;
      _obj = {"tabel": tabel, "docData": docData!.toJson(), "userData": userData};
    } else if (tipDoc == 'fe') {
      _obj = null;
      _obj = {"tabel": tabel, "factData": factData!.toJson()};
    }

    String _js = jsonEncode(_obj);
    _js = _js.replaceAll("\\", "");
    _js = _js.replaceAll('"{', '[{');
    _js = _js.replaceAll(',"}}', ']}}');

    // window.alert(_js);
    String _path = 'http://localhost/' + numeServer + '?x=' + _js;
    // print(_path);
    //window.alert(_path);

    // var response = await http.get(Uri.parse(path), headers: _headers);
    var response = await http.get(Uri.parse(_path));
    if (response.statusCode == 200) {
      final jsonString = response.body;

      return jsonString;
    }
    // The GET request failed. Handle the error.
    else {
      window.alert("Couldn't open $_path");
      return ("Couldn't open $_path");
    }
  }
}
