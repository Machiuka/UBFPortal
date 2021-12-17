import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/css.dart';

class IncarcDocument {
  static void invoice() async {
    //incarca documentul in invoice.html
    CSS.eliminaCSS("css/styles.css");
    CSS.eliminaCSS("css/styles_button.css");
    CSS.eliminaCSS("css/styles_formular.css");
    CSS.aplicaCSS("css/invoice.css");

    String _dataFact = "14.03.2022";

    DivElement _topNav = querySelector('#top_nav') as DivElement;
    _topNav.remove();
    LoadDetalii.incarcFormular('html/invoice.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element dataFact1 = querySelector(".dataDoc1") as Element;
    Element dataFact2 = querySelector(".dataDoc2") as Element;
    Element dataFact3 = querySelector(".dataDoc3") as Element;
    SpanElement totalGeneral = querySelector("#totalGeneral") as SpanElement;

    dataFact1.innerHtml = _dataFact;
    dataFact2.innerHtml = _dataFact;
    dataFact3.innerHtml = _dataFact;
    totalGeneral.innerHtml = "3333.33";
  }

  //************************************ */
  static void aviz() async {
    //incarca documentul in aviz.html
    CSS.eliminaCSS("css/styles.css");
    CSS.eliminaCSS("css/styles_button.css");
    CSS.eliminaCSS("css/styles_formular.css");
    CSS.aplicaCSS("css/invoice.css");

    String _dataFact = "14.03.2022";

    DivElement _topNav = querySelector('#top_nav') as DivElement;
    _topNav.remove();
    LoadDetalii.incarcFormular('html/invoice.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element dataFact1 = querySelector(".dataDoc1") as Element;
    Element dataFact2 = querySelector(".dataDoc2") as Element;
    Element dataFact3 = querySelector(".dataDoc3") as Element;
    SpanElement totalGeneral = querySelector("#totalGeneral") as SpanElement;

    dataFact1.innerHtml = _dataFact;
    dataFact2.innerHtml = _dataFact;
    dataFact3.innerHtml = _dataFact;
    totalGeneral.innerHtml = "3333.33";
  }
}
