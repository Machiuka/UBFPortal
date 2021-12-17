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
    InputElement _cantitate = querySelector("#cantitate") as InputElement;
    Element _textElem = querySelector("#titluElement") as Element;
    Element _btnAdaug = querySelector("#btnAdaug") as Element;
    Element _btnAnulez = querySelector("#btnAnulez") as Element;

    _formDetalii.replaceWith(_formElement);

    _textElem.innerHtml = UBFFactura.articol['denumire'];
    _denumire.defaultValue = UBFFactura.articol['denumire'];
    _cod.defaultValue = 'Cod: ' + UBFFactura.articol['codElem'];

    _btnAdaug.onClick.listen((e) {
      UBFFactura.articol['cantitate'] = _cantitate.value.toString();
      //transform map in sir json
      UBFFactura.articoleFactura = UBFFactura.articoleFactura + jsonEncode(UBFFactura.articol);

      window.alert('Articole factura = ${UBFFactura.articoleFactura}}');
      _formElement.remove();
      CautareElement.cautareElement("FACTURA");
    });

    //cod.defaultValue = _json[i]['cod_elem'];
  }
}
