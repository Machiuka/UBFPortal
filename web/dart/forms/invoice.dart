import 'dart:html';
import '../clase/ubf_client.dart';
import '../clase/ubf_factura.dart';
import '../clase/load_detalii.dart';
import 'dart:convert';
import '../clase/css.dart';
import 'package:intl/intl.dart';

class Invoice {
  static void afisFactura(Map<String, dynamic> _json) async {
    if (_json['nr_fact'] == null) {
      window.alert('Factura Inexistenta!!!');
      window.location.reload();
    } else {
      CSS.eliminaCSS("css/styles.css");
      CSS.eliminaCSS("css/styles_button.css");
      CSS.eliminaCSS("css/styles_formular.css");
      CSS.aplicaCSS("css/invoice.css");

      // ignore: unnecessary_null_comparison

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
      SpanElement totalGeneral = querySelector('#totalGeneral') as SpanElement;
      SpanElement totalTVA19 = querySelector('#totalTVA19') as SpanElement;
      SpanElement totalTVA9 = querySelector('#totalTVA9') as SpanElement;
      SpanElement totalFact = querySelector('#totalFact') as SpanElement;
      SpanElement tPlata = querySelector('#tPlata') as SpanElement;

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

      final DateFormat formatareData = DateFormat('dd.M.yyyy');

      int termenPlata = int.parse(_json['termen_plata']);
      DateTime dataF = DateTime.parse(_json['data_fact']);
      DateTime dataP = dataF.add(new Duration(days: termenPlata));
      String dataFs = formatareData.format(dataF);
      String dataFp = formatareData.format(dataP);
      tPlata.innerHtml = _json['termen_plata'];

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

      dataDoc1.innerHtml = dataFs;
      dataDoc2.innerHtml = dataFs;
      dataDoc3.innerHtml = dataFp;
      totalGeneral.innerHtml = _json['total_factura'];
      totalFact.innerHtml = _json['total_fara_tva'];
      totalTVA9.innerHtml = _json['tva_9'];
      totalTVA19.innerHtml = _json['tva_19'];

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
      double valDiscount = double.parse(_json['val_discount']);
      double tvaDiscount = double.parse(_json['tva_discount']);
      String discount = _json['discount'];

      //Zona tabel factura
      //Map<String, dynamic> articoleFact = _json['articole_fact'];
      TableSectionElement tabel = querySelector('#tableBody') as TableSectionElement;
      TableRowElement row = TableRowElement();
      TableCellElement cell = TableCellElement();

      int j = 0;
      Map<String, dynamic> articol;

      List<dynamic> articoleFact = _json['articole_fact'];
      for (var i = 0; i < articoleFact.length; i++) {
        //articoleFact este o lista. Fiecare articol este un sir de tip Json.
        // Pentru a o transforma in map trebuie intai sa folosesc encode, sa il recunoasca ca
        //json nu sir. Apoi cu decode din json il facem map

        var articolul = jsonEncode((articoleFact[i]));
        articol = jsonDecode(articolul);

        row = tabel.insertRow(-1); //insereaza rand in tabel
        cell = row.insertCell(0);
        cell.text = (i + 1).toString();
        cell = row.insertCell(1);
        cell.text = articol['denumire'];
        cell = row.insertCell(2);
        cell.text = articol['unit_mas'];
        cell = row.insertCell(3);
        cell.text = articol['ctva'];
        cell = row.insertCell(4);
        cell.text = articol['cantitate'];
        cell = row.insertCell(5);
        cell.text = articol['pret'];
        cell = row.insertCell(6);
        cell.text = articol['valoare'];
        cell = row.insertCell(7);
        cell.text = articol['tva'];

        //window.alert(articol['denumire']);
        j = i + 1;
      }
      j = j + 1;
      if (int.parse(discount) > 0) {
        row = tabel.insertRow(-1); //insereaza rand in tabel
        cell = row.insertCell(0);
        cell.text = j.toString();
        cell = row.insertCell(1);
        cell.text = 'Discount $discount %';
        cell = row.insertCell(2);
        cell.text = '';
        cell = row.insertCell(3);
        cell.text = ' ';
        cell = row.insertCell(4);
        cell.text = ' ';
        cell = row.insertCell(5);
        cell.text = '';
        cell = row.insertCell(6);
        cell.text = '-' + valDiscount.toStringAsFixed(2);
        cell = row.insertCell(7);
        cell.text = '-' + tvaDiscount.toStringAsFixed(2);
      }
    }
  }
}
