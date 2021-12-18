import 'dart:html';
import 'dart:convert';
import 'load_detalii.dart';
import 'global.dart';
import 'ubf_factura.dart';
import '../meniuri/cautare_client.dart';
import '../meniuri/cautare_element.dart';

class DetaliiFactura {
  Future detaliiArticol() async {
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_element.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formElement = querySelector("#formElement") as FormElement;
    InputElement _denumire = querySelector("#denumire") as InputElement;
    InputElement _cod = querySelector("#cod") as InputElement;
    InputElement _ctva = querySelector("#ctva") as InputElement;
    InputElement _cantitate = querySelector("#cantitate") as InputElement;
    InputElement _pret = querySelector("#pret") as InputElement;
    Element _textElem = querySelector("#titluElement") as Element;
    Element _btnAdaug = querySelector("#btnAdaug") as Element;
    Element _btnAnulez = querySelector("#btnAnulez") as Element;

    _formDetalii.replaceWith(_formElement);

    _textElem.innerHtml = UBFFactura.articol['denumire'];
    _denumire.defaultValue = UBFFactura.articol['denumire'];
    _ctva.defaultValue = UBFFactura.articol['ctva'];
    _pret.defaultValue = UBFFactura.articol['pret'];
    _cod.defaultValue = 'Cod: ' + UBFFactura.articol['codElem'];

    _btnAdaug.onClick.listen((e) {
      UBFFactura.articol['cantitate'] = _cantitate.value;
      UBFFactura.articol['ctva'] = _ctva.value;
      double ctva = double.parse(_ctva.value!);
      double cantitate = double.parse(_cantitate.value!);
      double pret = double.parse(_pret.value!);
      double tvaProdus = pret * ctva / (100 + ctva);
      double tva = tvaProdus * cantitate;
      double valCuTva = pret * cantitate;
      double val = valCuTva - tva;

      UBFFactura.articol['tva'] = tva.toStringAsFixed(2);
      UBFFactura.articol['valoare'] = val.toStringAsFixed(2);
      //transform map in sir json
      UBFFactura.articoleFactura = UBFFactura.articoleFactura + jsonEncode(UBFFactura.articol);

      window.alert('Articole factura = ${UBFFactura.articoleFactura}');
      _formElement.remove();
      CautareElement.cautareElement("FACTURA");
    });
    _btnAnulez.onClick.listen((e) {
      _formElement.remove();
      CautareElement.cautareElement('FACTURA');
    });
  }
}
