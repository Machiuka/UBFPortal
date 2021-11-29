import 'dart:convert';
import 'dart:html';

import 'loader.dart';
import 'tabelare.dart';

class LoadDetalii {
  loadRetetar(String caut, String camp, String tabel, String numeServer) {
    late final UListElement lista =
        querySelector('#listaDetalii') as UListElement;
    FormElement formDetalii = querySelector("#formDetalii") as FormElement;
    Loader kk = Loader();
    kk
        .cautaPeServer(
            criteriu: caut,
            numeServer: numeServer,
            optiune: 1,
            tabel: tabel,
            camp: camp)
        .then((rezultat) {
      final _json = json.decode(rezultat);
      lista.children.clear();
      for (int i = 0; i < _json.length; i++) {
        LIElement elem = LIElement();
        lista.children.add(elem..text = _json[i][camp]); //['den_pf']);
        elem.onClick.listen((e) {
          String crit = elem.innerHtml.toString();
          kk
              .cautaPeServer(
                  criteriu: crit,
                  tabel: tabel,
                  camp: camp,
                  numeServer: "servReteta",
                  optiune: 1)
              .then((value) async {
            final _js = json.decode(value);

            lista.children.clear();
            //       FormElement formDetalii =querySelector("#formDetalii") as FormElement;

            barMeniu('html/form_tabel.html');
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

            titluTabel.innerHtml = "Reteta pt $crit";
            //   window.alert(titluTabel.innerHtml);

            //window.alert(_js.toString());
          });
        });
      }
    });
  }

  static void barMeniu(String url) async {
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
