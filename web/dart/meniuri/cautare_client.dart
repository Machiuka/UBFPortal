import 'dart:html';
import '../clase/load_detalii.dart';
import 'actualizare_reteta.dart';
import '../clase/load_factura.dart';

class CautareClient {
  static void cautareClient(String titlu) async {
    //Se foloseste atat la cautare cat si la actualizare
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_cautare.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnOK = querySelector('#btnOK') as Element;
    FormElement _formCautare = querySelector('#formCautare') as FormElement;
    _formDetalii.replaceWith(_formCautare);

    Element titluDetalii = querySelector('#titluDetalii') as Element;
    titluDetalii.innerHtml = 'Cautare Client';

    InputElement _txtCautare = querySelector("#txtCautare") as InputElement;

    _btnOK.onClick.listen((e) {
      String? caut = _txtCautare.value;
      if (titlu == "FACTURA") {
        //Aici se ocupa de butonul Adaugare factura

        if (caut != null) {
          _formCautare.replaceWith(_formDetalii); //sterg formularul pentru a nu se adauga cautare peste cautare
          LoadFactura lf = LoadFactura();
          lf.loadClient('fe', caut, 'tbl_clienti', 'serverCautStergClient');
          //AdaugareFactura.adaugareFactura(caut, "tbl_clienti", "serverCautStergClient");
        } else {
          window.location.reload(); //echivalent cu refresh pagina
        }
      } else if (titlu == 'MODIFICARE FACTURA') {
        //modifica doar ultima factura
        if (caut != null) {
          _formCautare.replaceWith(_formDetalii); //sterg formularul pentru a nu se adauga cautare peste cautare
          ActualizareReteta actualizareReteta = ActualizareReteta();
          actualizareReteta.actualizareReteta(caut, "tbl_produse", "serverCautStergClient");
        } else {
          window.location.reload(); //echivalent cu refresh pagina
        }
      }
    });
  }
}
