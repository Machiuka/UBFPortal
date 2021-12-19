import 'dart:html';
import '../clase/ubf_client.dart';
import '../clase/ubf_factura.dart';
import '../clase/load_detalii.dart';
import 'dart:convert';
import '../clase/css.dart';

class Invoice {
  static void afisFactura(Map<String, dynamic> _json) async {
    CSS.eliminaCSS("css/styles.css");
    CSS.eliminaCSS("css/styles_button.css");
    CSS.eliminaCSS("css/styles_formular.css");
    CSS.aplicaCSS("css/invoice.css");

    LoadDetalii.incarcFormular('html/invoice.html');
    await Future.delayed(const Duration(milliseconds: 350));

    DivElement divFactura = querySelector('#divFactura') as DivElement;
    //Zona Vanzator
    LabelElement webpage = querySelector('#webpage') as LabelElement;
    LabelElement companyName = querySelector('#company_name') as LabelElement;
    LabelElement companyAddress = querySelector('#company_address') as LabelElement;
    LabelElement companycif = querySelector('#company_cif') as LabelElement;
    LabelElement companycui = querySelector('#company_cui') as LabelElement;
    LabelElement companytel = querySelector('#company_tel') as LabelElement;
    LabelElement companyemail = querySelector('#company_email') as LabelElement;
    LabelElement companybanca = querySelector('#company_banca') as LabelElement;
    SpanElement dataDoc1 = querySelector('.dataDoc1') as SpanElement;
    SpanElement dataDoc2 = querySelector('.dataDoc2') as SpanElement;
    SpanElement dataDoc3 = querySelector('.dataDoc3') as SpanElement;

    LabelElement nrFact = querySelector('#nr_fact') as LabelElement;

//Zona Client
    LabelElement clientName = querySelector('#client_name') as LabelElement;
    LabelElement clientAddress = querySelector('#client_address') as LabelElement;
    LabelElement clientcif = querySelector('#client_cif') as LabelElement;
    LabelElement clientcui = querySelector('#client_cui') as LabelElement;
    LabelElement clienttel = querySelector('#client_tel') as LabelElement;
    SpanElement delegat = querySelector('#delegat') as SpanElement;
    SpanElement masina = querySelector('#nrAuto') as SpanElement;
    SpanElement ciDelegat = querySelector('#ciDelegat') as SpanElement;
    SpanElement ciPol = querySelector('#ciPol') as SpanElement;

//*************** */
//Incarc zona Vanzator
    webpage.innerHtml = _json['date_vanzator']['webVanzator'];
    nrFact.innerHtml = UBFFactura.prefix + _json['nr_fact'].toString();
    companyAddress.innerHtml = _json['date_vanzator']['adresaVanzator'];
    companycif.innerHtml = _json['date_vanzator']['cifVanzator'];
    companycui.innerHtml = _json['date_vanzator']['cuiVanzator'];
    companytel.innerHtml = _json['date_vanzator']['telVanzator'];
    companyemail.innerHtml = _json['date_vanzator']['emailVanzator'];
    companybanca.innerHtml = _json['date_vanzator']['contVanzator'];
    companyName.innerHtml = _json['date_vanzator']['numeVanzator'];
    dataDoc1.innerHtml = _json['data_fact'];
    dataDoc2.innerHtml = _json['data_fact'];
    dataDoc3.innerHtml = _json['data_fact'];

    //Incarc zona client
    clientName.innerHtml = _json['date_cumparator']['denumire'];
    clientAddress.innerHtml = _json['date_cumparator']['adresa'];
    clientcif.innerHtml = _json['date_cumparator']['cif'];
    delegat.innerHtml = _json['date_cumparator']['delegat'];
    clientcui.innerHtml = _json['date_cumparator']['cui'];
    clienttel.innerHtml = _json['date_cumparator']['tel'];
    ciDelegat.innerHtml = _json['date_cumparator']['ciNr'];
    masina.innerHtml = _json['date_cumparator']['masina'];
    ciPol.innerHtml = _json['date_cumparator']['ciPol'];
  }
}
