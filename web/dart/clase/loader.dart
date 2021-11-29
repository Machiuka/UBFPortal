import 'dart:html';

import 'ubf_server.dart';
import 'dart:convert';
import 'package:http/http.dart' as http;

class Loader {
  //nu am nevoie de headers, fiindca setarea e din serverul php
  final _headers = {
    "Accept": "application/json",
  };

  // Future<void> makeRequest(Event _) async {
  Future<String> cautaPeServer(
      {required String criteriu,
      required String tabel,
      required String camp,
      required String numeServer,
      required int optiune}) async {
    numeServer = numeServer + ".php";
    //const path = 'https://netta.ro/ubf/test/'.?numeServer.'?x={"obj":"pf"}';
    String path = 'http://localhost/' +
        numeServer +
        '?x={"criteriu":"$criteriu", "tabel":"$tabel", "camp":"$camp"}';

    // var response = await http.get(Uri.parse(path), headers: _headers);
    var response = await http.get(Uri.parse(path));
    if (response.statusCode == 200) {
      final jsonString = response.body;

      return jsonString;
    }
    // The GET request failed. Handle the error.
    else {
      window.alert("Couldn't open $path");
      return ("Couldn't open $path");
    }
  }
}
