import 'dart:html';
import '../meniuri/cautare_element.dart';
import '../clase/load_detalii.dart';
import '../clase/ubf_factura.dart';
import '../clase/ubf_client.dart';

class FormFactura {
  static void dateClient() async {
    LoadDetalii.incarcFormular('html/form_factura.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formFactura = querySelector("#formFactura") as FormElement;
    Element _btnAnulare = querySelector("#btnAnulareF") as Element;
    Element _btnAdauga = querySelector("#btnAdaugaF") as Element;
    InputElement _nrFact = querySelector("#nrFact") as InputElement;
    InputElement _numeClient = querySelector("#numeClient") as InputElement;
    InputElement _delegat = querySelector("#delegat") as InputElement;
    InputElement _ciDelegat = querySelector("#ciDelegat") as InputElement;
    InputElement _ciPol = querySelector("#ciPol") as InputElement;
    InputElement _masina = querySelector("#masina") as InputElement;
    InputElement _discount = querySelector("#discount") as InputElement;
    InputElement _tPlata = querySelector("#tPlata") as InputElement;

    _discount.defaultValue = UBFClient.discount.toString();
    _tPlata.defaultValue = UBFClient.tPlata.toString();

    _btnAdauga.onClick.listen((e) {
      UBFClient.discount = int.parse(_discount.value!);
      UBFClient.tPlata = int.parse(_tPlata.value!);
      UBFClient.delegat = _delegat.value;
      UBFClient.ciNr = _ciDelegat.value;
      UBFClient.ciPol = _ciPol.value;
      UBFClient.masina = _masina.value;
      UBFFactura.nrFact = int.parse(_nrFact.value!);
      _formFactura.remove();

      CautareElement.cautareElement('FACTURA');
    });
  }
}
