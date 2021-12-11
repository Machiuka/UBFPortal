import 'dart:html';

import 'dart:convert';
import 'package:http/http.dart' as http;
import 'ubf_document.dart';
import 'ubf_user.dart';

class Loader {
  //nu am nevoie de headers, fiindca setarea e din serverul php
  final _headers = {
    "Accept": "application/json",
  };

  // Future<void> makeRequest(Event _) async {
  Future<String> cautaPeServer(
      {required String criteriu,
      required String tabel,
      required String numeServer,
      required String opt}) async {
    numeServer = numeServer + ".php";
    //const path = 'https://netta.ro/ubf/test/'.?numeServer.'?x={"obj":"pf"}';
    String path = 'http://localhost/' +
        numeServer +
        '?x={"criteriu":"$criteriu", "tabel":"$tabel"}';
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
      UBFDocument? docData,
      UBFUser? userData}) async {
    numeServer = numeServer + ".php";
    Map<String, dynamic> _obj = {
      "tabel": tabel,
      "opt": opt,
      "docData": docData!.toJson(),
      "userData": userData
    };

    String _js = jsonEncode(_obj);
    //window.alert(_js);
    String _path = 'http://localhost/' + numeServer + '?x=' + _js;
//    window.alert(_path);

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
