import 'dart:html';
import '../clase/load_detalii.dart';
import '../clase/load_factura.dart';

class CautareFactura {
  static void cautareFactura(String titlu) async {
    //Se foloseste atat la cautare cat si la actualizare
    FormElement _formDetalii = querySelector("#formDetalii") as FormElement;
    LoadDetalii.incarcFormular('html/form_cautare.html');
    await Future.delayed(const Duration(milliseconds: 50));

    Element _btnOK = querySelector('#btnOK') as Element;
    FormElement _formCautare = querySelector('#formCautare') as FormElement;
    _formDetalii.replaceWith(_formCautare);

    InputElement _txtCautare = querySelector("#txtCautare") as InputElement;

    _btnOK.onClick.listen((e) {
      String? caut = _txtCautare.value;
      LoadFactura lf = LoadFactura();
      if (titlu == "FACTURA") {
        if (caut != null) {
          _formCautare.remove();

          lf.loadInterogare('fe', caut, "tbl_facturi", "serverFactura", "");
        } else {
          window.location.reload(); //echivalent cu refresh pagina
        }
      } else if (titlu == 'AVIZ') {
        if (caut != null) {
          _formCautare.remove();
          lf.loadInterogare('av', caut, "tbl_avize", "serverFactura", "");
        } else {
          window.location.reload(); //echivalent cu refresh pagina
        }
      }
    });
  }
}
