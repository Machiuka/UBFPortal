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
import '../meniuri/adaugare_factura.dart';
import '../meniuri/formular_meniu.dart';

class LoadFactura {
  Future loadArticol(String caut, String tabel, String numeServer) async {
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
      opt: "r",
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
          CautareElement.cautareElement('FACTURA');
        }
        elem.onClick.listen((e) async {
          UBFFactura.articol['codElem'] = _json[i]['cod_elem'];
          UBFFactura.articol['denumire'] = _json[i]['denumire'];
          UBFFactura.articol['pret'] = _json[i]['pret_vanzare'];
          UBFFactura.articol['ctva'] = _json[i]['cota_tva'];

          DetaliiFactura detaliiFactura = DetaliiFactura();
          detaliiFactura.detaliiArticol();
        });
      }
    });
  }

  //****************************** */
  Future loadClient(String caut, String tabel, String numeServer) async {
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
      opt: "r",
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
            UBFClient.ciPol = _json[i]['ci_pol'];
            UBFClient.delegat = _json[i]['delegat'];
            UBFClient.masina = _json[i]['masina'];
            UBFClient.discount = int.parse(_json[i]['discount']);
            UBFClient.tPlata = int.parse(_json[i]['t_plata']);
            //Am stabilit clientul acum cautam articolele din factura
            _formDetalii.remove();
            CautareElement.cautareElement('FACTURA');
          });
        }
      }
    });
  }

  loadInterogare(String caut, String tabel, String numeServerPrimar, [String numeServerSecundar = '']) {
    //cauta pe serverul primar ceea ce primeste din meniul cautare si afiseaza detaliile primite de pe serverul secundar
    //de pe serverul primar primeste o lista clickabila si de pe cel secundar primeste un tabel cu detaliile elementului selectat din lista
    late final UListElement lista = querySelector('#listaDetalii') as UListElement;
    FormElement formDetalii = querySelector("#formDetalii") as FormElement;
    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: caut,
      numeServer: numeServerPrimar,
      opt: "r",
      tabel: tabel,
    )
        .then((rezultat) {
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        elem.onClick.listen((e) {
          String crit = elem.innerHtml.toString();
          kk.cautaPeServer(criteriu: crit, tabel: tabel, numeServer: numeServerSecundar, opt: "r").then((value) async {
            value = value.replaceAll("[", "");
            value = value.replaceAll("]", "");
            //     window.alert('Value este $value');
            final _js = json.decode(value);

            lista.children.clear();
            //       FormElement formDetalii =querySelector("#formDetalii") as FormElement;

            LoadDetalii.incarcFormular('html/form_tabel.html');
            await Future.delayed(const Duration(milliseconds: 50));
            Tabelare tabelul = Tabelare();
            FormElement formTabel = querySelector("#formTabel") as FormElement;
            Element titluTabel = querySelector("#titluTabel") as Element;
            Element btnInapoi = querySelector("#btnCCC") as Element;
            formDetalii.replaceWith(
                formTabel); //inlocuie formDetalii cu formTabel. Proprietatea hidden nu a functionat, iar remove() pierde metodele atasate butoanelor
            tabelul.adauga(_js, 'tabelDetalii', 0);
            btnInapoi.onClick.listen((event) {
              formTabel.replaceWith(formDetalii);
            });

            titluTabel.innerHtml = "Detalii pt $crit";
            //   window.alert(titluTabel.innerHtml);

            //window.alert(_js.toString());
          });
        });
      }
    });
  }

  loadStergere(String caut, String tabel, String numeServer) {
    //cauta pe serverul si primeste o lista clickabila. Sterge apoi elementul selectat, dupa id
    late final UListElement lista = querySelector('#listaDetalii') as UListElement;
    FormElement formDetalii = querySelector("#formDetalii") as FormElement;
    Loader kk = Loader();
    kk
        .cautaPeServer(
      criteriu: caut,
      numeServer: numeServer,
      opt: "r",
      tabel: tabel,
    )
        .then((rezultat) {
      //   window.alert(rezultat);
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        elem.onClick.listen((e) {
          bool confirmare = window.confirm("Elementul ${_json[i]['denumire']} va fi sters. Ok, pt confirmare, Cancel pt anulare");
          if (confirmare) {
            String crit = _json[i]['id'].toString();
            //    window.alert('Criteriul de stergere este $crit');
            kk.cautaPeServer(criteriu: crit, tabel: tabel, numeServer: numeServer, opt: "d").then((value) async {
              value = value.replaceAll("[", "");
              value = value.replaceAll("]", "");

              final _js = json.decode(value);

              lista.children.clear();
              //       FormElement formDetalii =querySelector("#formDetalii") as FormElement;

              LoadDetalii.incarcFormular('html/form_tabel.html');
              await Future.delayed(const Duration(milliseconds: 50));
              Tabelare tabelul = Tabelare();
              FormElement formTabel = querySelector("#formTabel") as FormElement;
              Element titluTabel = querySelector("#titluTabel") as Element;
              Element btnInapoi = querySelector("#btnCCC") as Element;
              formDetalii.replaceWith(
                  formTabel); //inlocuie formDetalii cu formTabel. Proprietatea hidden nu a functionat, iar remove() pierde metodele atasate butoanelor
              tabelul.adauga(_js, 'tabelDetalii', 0);
              btnInapoi.onClick.listen((event) {
                formTabel.replaceWith(formDetalii);
              });

              titluTabel.innerHtml = "Detalii pt ${_json[i]['denumire']}";
              //   window.alert(titluTabel.innerHtml);

              //window.alert(_js.toString());
            });
          } else {
            window.location.reload(); //echivalent cu refresh pagina
          }
        });
      }
    });
  }

  loadIncarcareDoc(String tabel, String numeServer, UBFDocument? docData) {
//Incarca date pe server. Despre Useri sau Documente
    Loader kk = Loader();
    kk.adaugaPeServer(numeServer: numeServer, opt: "c", tabel: tabel, docData: docData).then((rezultat) async {
      //await Future.delayed(const Duration(milliseconds: 50));
      // window.alert(rezultat);
      try {
        //     rezultat = rezultat.replaceAll("[", "");
        // rezultat = rezultat.replaceAll("]", "");
        final _json = json.decode(rezultat);
        RaspunsTabel.raspunsTabel(_json);
      } catch (e) {
        window.alert('EROARE!!!...' + e.toString());
      }
    });
  }
}
