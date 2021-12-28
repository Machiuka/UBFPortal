import 'dart:convert';
import 'dart:html';
import '../meniuri/cautare_element.dart';
import 'ubf_document.dart';
import 'loader.dart';
import 'tabelare.dart';
import 'raspuns_tabel.dart';
import 'ubf_factura.dart';
import 'detalii_element.dart';
import 'ubf_client.dart';
import 'load_detalii.dart';
import 'detalii_factura.dart';

import '../forms/invoice.dart';
import '../forms/form_factura.dart';

class LoadFactura {
  Future loadArticol(String tipDoc, String caut, String tabel, String numeServer) async {
    //cauta produse pt factura

    FormElement _formCautare = querySelector("#formCautare") as FormElement;
    LoadDetalii.incarcFormular('html/form_detalii.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    DivElement _divButoane = querySelector('.butoane') as DivElement;
    _divButoane.hidden = true;
    _formCautare.replaceWith(_formDetalii);

    late final UListElement lista = querySelector('#listaDetalii') as UListElement;
    FormElement formDetalii = querySelector("#formDetalii") as FormElement;
    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: caut,
      numeServer: numeServer,
      optiune: "r",
      tabel: tabel,
    )
        .then((rezultat) async {
      //   window.alert(rezultat);
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        if (_json[i]['denumire'] == "Nu s-au gasit rezultate") {
          await Future.delayed(const Duration(seconds: 1));
          _formDetalii.remove();
          if (tipDoc == 'fe') {
            CautareElement.cautareElement('FACTURA');
          }
          if (tipDoc == 'av') {
            CautareElement.cautareElement('AVIZ');
          }
        }
        elem.onClick.listen((e) async {
          UBFFactura.articol['codElem'] = _json[i]['cod_elem'];
          UBFFactura.articol['denumire'] = _json[i]['denumire'];
          UBFFactura.articol['pret'] = _json[i]['pret_vanzare'];

          UBFFactura.articol['ctva'] = _json[i]['cota_tva'];

          if (_json[i]['gramaj'] == '1000') {
            UBFFactura.articol['unit_mas'] = 'kg';
          } else {
            UBFFactura.articol['unit_mas'] = 'buc';
          }

          DetaliiFactura detaliiFactura = DetaliiFactura();
          detaliiFactura.detaliiArticol(tipDoc);
        });
      }
    });
  }

  //****************************** */
  Future loadClient(String tipDoc, String caut, String tabel, String numeServer) async {
    //Cauta clientul dupa criteriul de cautare si returneaza datele lui, spre a fi adaugate in factura

    // FormElement _formCautare = querySelector("#formCautare") as FormElement;
    // LoadDetalii.incarcFormular('html/form_detalii.html');
    //await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    DivElement _divButoane = querySelector('.butoane') as DivElement; //nu am nevoie de butoane
    _divButoane.hidden = true;

    late final UListElement lista = querySelector('#listaDetalii') as UListElement;

    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: caut,
      numeServer: numeServer,
      optiune: "r",
      tabel: tabel,
    )
        .then((rezultat) async {
      //   window.alert(rezultat);
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        if (_json[i]['denumire'] == "Nu s-au gasit rezultate") {
          window.location.reload();
        } else {
          elem.onClick.listen((e) async {
            UBFClient.adresa = _json[i]['adresa'];
            UBFClient.denumire = _json[i]['denumire'];
            UBFClient.ciNr = _json[i]['ci_nr'];
            UBFClient.cui = _json[i]['cod_fiscal'];
            UBFClient.cif = _json[i]['reg_com'];
            UBFClient.ciPol = _json[i]['ci_pol'];
            UBFClient.delegat = _json[i]['delegat'];
            UBFClient.analitic = _json[i]['analitic'];
            UBFClient.masina = _json[i]['masina'];
            if (tipDoc == 'fe') {
              UBFClient.discount = int.parse(_json[i]['discount']);
              UBFClient.tPlata = int.parse(_json[i]['t_plata']);
            }
            //Am stabilit clientul acum cautam articolele din factura
            _formDetalii.remove();
            FormFactura.dateClient(tipDoc);
          });
        }
      }
    });
  }

  loadInterogare(String tipDoc, String caut, String tabel, String numeServerPrimar, [String numeServerSecundar = '']) {
    //cauta pe serverul primar ceea ce primeste din meniul cautare si afiseaza detaliile primite de pe serverul secundar
    //de pe serverul primar primeste o lista clickabila si de pe cel secundar primeste un tabel cu detaliile elementului selectat din lista

    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: caut,
      numeServer: numeServerPrimar,
      optiune: "r",
      tabel: tabel,
    )
        .then((rezultat) async {
      try {
        //Elimina \ si " din rezulttat
        rezultat = rezultat.replaceAll("\\", "");
        rezultat = rezultat.replaceAll('"{', '{');
        rezultat = rezultat.replaceAll('}"', '}');
        //print(rezultat);

        final _json = json.decode(rezultat);
        //window.alert(rezultat);
        //print(rezultat);
        Invoice.afisFactura(tipDoc, _json);
      } catch (e) {
        window.alert('EROARE!!!...' + e.toString());
      }
    });
  }

  loadStergere(String tipDoc, String tabel, String numeServer) {
    //cauta pe serverul si primeste o lista clickabila. Sterge apoi elementul selectat, dupa id
    late final UListElement lista = querySelector('#listaDetalii') as UListElement;
    FormElement formDetalii = querySelector("#formDetalii") as FormElement;
    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: tipDoc,
      numeServer: numeServer,
      optiune: "d",
      tabel: tabel,
    )
        .then((rezultat) {
      //window.alert(rezultat);
      final _json = json.decode(rezultat);
      window.alert(_json['STERGERE']);
      window.location.reload();
    });
  }

  loadIncarcareFact(String tabel, String numeServer, String tipDoc, UBFFactura? factData) {
//Incarca date pe server. Despre Useri sau Documente
    Loader kk = Loader();
    if (factData != null) {
      kk.adaugaPeServer(numeServer: numeServer, opt: "c", tipDoc: tipDoc, tabel: tabel, factData: factData).then((rezultat) async {
        //await Future.delayed(const Duration(milliseconds: 50));

        try {
          //Elimina \ si " din rezulttat
          rezultat = rezultat.replaceAll("\\", "");
          rezultat = rezultat.replaceAll('"{', '{');
          rezultat = rezultat.replaceAll('}"', '}');
          //print(rezultat);

          final _json = json.decode(rezultat);
          //   window.alert(rezultat);
          //print(rezultat);
          Invoice.afisFactura(tipDoc, _json);
        } catch (e) {
          window.alert('EROARE!!!...' + e.toString());
        }
      });
    } else {
      window.alert('factData NULL');
    }
  }
}
