//Aici incarc continut documente (retete, facturi, avize)
import 'dart:async';
import 'dart:convert';
import 'dart:html';

import 'package:http/http.dart' as http;
import 'global.dart';
import 'ubf_document.dart';

class UBFContinut {
  incarcElementeDoc(String tip_doc) {
    window.alert('Element incarcat');
    //Codific nume element si cantitate sub forma numeElem|cantitate^, dupa care le incarc in continutDoc din docData
  }
}
