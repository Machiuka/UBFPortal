import 'global.dart';
import 'loader.dart';
import 'dart:convert';

class UltimNumar {
  static void ultimNumar() {
    Loader ld = Loader();
    ld.cautaPeServer(criteriu: 'criteriu', tabel: 'tabel', numeServer: 'serverUltimNumar', optiune: 'optiune').then((value) {
      final _json = json.decode(value);

      Global.ultimNumar['nrFactura'] = int.parse(_json['nrFactura']);
      Global.ultimNumar['nrAviz'] = int.parse(_json['nrAviz']);
      Global.ultimNumar['nrReteta'] = int.parse(_json['nrReteta']);
      Global.ultimNumar['nrClient'] = int.parse(_json['nrClient']);
      Global.ultimNumar['nrProdus'] = int.parse(_json['nrProdus']);
      // Global.ultimNumar['nrUser'] = int.parse(_json['nrUser']);
      //    Global.ultimNumar['nrGestiune'] = int.parse(_json['nrGestiune']);
    });
  }
}
