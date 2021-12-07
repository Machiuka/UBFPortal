import 'dart:html';
import 'load_detalii.dart';
import 'tabelare.dart';

class RaspunsTabel {
  static void raspunsTabel(Map<String, dynamic> js) async {
    FormElement formDocument = querySelector('#formDocument') as FormElement;
    LoadDetalii.incarcFormular('html/form_tabel.html');
    await Future.delayed(const Duration(milliseconds: 50));
    FormElement formTabel = querySelector("#formTabel") as FormElement;
    Element titluTabel = querySelector("#titluTabel") as Element;
    Element btnInapoi = querySelector("#btnCCC") as Element;

    Tabelare tabelul = Tabelare();

    formDocument.replaceWith(
        formTabel); //inlocuie formDetalii cu formTabel. Proprietatea hidden nu a functionat, iar remove() pierde metodele atasate butoanelor
    tabelul.adauga(js, 'tabelDetalii', 0);
    btnInapoi.onClick.listen((event) {
      window.location.reload(); //echivalent cu refresh pagina
    });

    titluTabel.innerHtml = "Raspuns OK";
  }
}
