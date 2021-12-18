import 'dart:async';
import 'dart:convert';

import 'package:http/http.dart' as http;
import 'global.dart';
import 'optiune.dart';

class UBFServer {
  Global allData = Global();

  List<dynamic> jsonBody = [];
  final _headers = {
    "Accept": "application/json",
    "Access-Control-Allow-Origin": "Content-Type, Authorization"
  };

  Future queryServer() async {
    var completer = Completer();

    Map<String, dynamic> _obj;
    _obj = {
      "bazaDate": "tbl_produse",
      "opt": "rd",
    };

    String _js = jsonEncode(_obj);
    //print("JS ESTE...." + _js);
    String _url = Global.url; // + _js;
    //_url = 'https://cors-anywhere.herokuapp.com/' +_url; // daca am probleme cu CORS
    var response = await http.get(Uri.parse(_url), headers: _headers);
//var response = await http.get(_url);
    if (response.statusCode == 200) {
      String responseBody = response.body;

//print("Raspuns de la server: "+responseBody);
      //jsonBody = json.decode(responseBody);

      completer.complete(responseBody);
    }
    return completer.future;
  }
}
