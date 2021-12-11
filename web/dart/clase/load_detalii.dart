import 'dart:convert';
import 'dart:html';
import 'ubf_document.dart';
import 'ubf_user.dart';
import 'loader.dart';
import 'tabelare.dart';
import 'raspuns_tabel.dart';
import 'global.dart';
import 'detalii_element.dart';

class LoadDetalii {
  Future loadElement(String caut, String tabel, String numeServer) async {
    //cauta pe serverul primar ceea ce primeste din meniul cautare si afiseaza detaliile primite de pe serverul secundar
    //de pe serverul primar primeste o lista clickabila si de pe cel secundar primeste un tabel cu detaliile elementului selectat din lista

    FormElement _formCautare = querySelector("#formCautare") as FormElement;
    LoadDetalii.incarcFormular('html/form_detalii.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    _formCautare.replaceWith(_formDetalii);

    late final UListElement lista =
        querySelector('#listaDetalii') as UListElement;
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
      //window.alert(rezultat);
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        elem.onClick.listen((e) async {
          Global.cod_elem = _json[i]['cod_elem'];
          Global.denumire = _json[i]['denumire'];
          DetaliiElement detaliiElement = DetaliiElement();

          detaliiElement.detaliiElement();
        });
      }
    });
  }

  loadInterogare(String caut, String tabel, String numeServerPrimar,
      [String numeServerSecundar = '']) {
    //cauta pe serverul primar ceea ce primeste din meniul cautare si afiseaza detaliile primite de pe serverul secundar
    //de pe serverul primar primeste o lista clickabila si de pe cel secundar primeste un tabel cu detaliile elementului selectat din lista
    late final UListElement lista =
        querySelector('#listaDetalii') as UListElement;
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
      //   window.alert(rezultat);
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i]['denumire']);
        elem.onClick.listen((e) {
          String crit = elem.innerHtml.toString();
          kk
              .cautaPeServer(
                  criteriu: crit,
                  tabel: tabel,
                  numeServer: numeServerSecundar,
                  opt: "r")
              .then((value) async {
            value = value.replaceAll("[", "");
            value = value.replaceAll("]", "");

            final _js = json.decode(value);

            lista.children.clear();
            //       FormElement formDetalii =querySelector("#formDetalii") as FormElement;

            incarcFormular('html/form_tabel.html');
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

  loadIncarcareDoc(String tabel, String numeServer, UBFDocument? docData) {
//Incarca date pe server. Despre Useri sau Documente
    Loader kk = Loader();
    kk
        .adaugaPeServer(
            numeServer: numeServer, opt: "c", tabel: tabel, docData: docData)
        .then((rezultat) async {
      //await Future.delayed(const Duration(milliseconds: 50));
      //window.alert(rezultat);
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

  loadIncarcareUser(String tabel, String numeServer, UBFUser? docUser) {
//Incarca date pe server. Despre Useri sau Documente
    Loader kk = Loader();
    kk
        .adaugaPeServer(
            numeServer: numeServer, opt: "c", tabel: tabel, userData: docUser)
        .then((rezultat) {
      final _json = json.decode(rezultat);
    });
  }

  static void incarcFormular(String url) async {
//Metoda care insereaza formularele html in index.html
    //String url = 'html/top_nav.html';
    Element? _el = querySelector('#output');
    await HttpRequest.postFormData(url, {}).then((HttpRequest response) {
      String formular;

      if (response.status == 200) {
        formular = response.responseText!;
        _el!.insertAdjacentHtml('beforebegin', formular);
      }
    });
  }
}
