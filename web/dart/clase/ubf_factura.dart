import 'ubf_client.dart';
import 'global.dart';

class UBFFactura {
  static int? idx;
  static String prefix = 'UBF';
  static int? nrFact = 1006;
  static String? dataFact;
  static double totalFactFaraTva = 0.00;
  static double totalFactura = 0.00;
  static double tva9 = 0.00;
  static double tva19 = 0.00;
  static double tva = 0.00;
  static double valDiscount = 0.00;
  static double tvaDiscount = 0.00;
  static int discount = 0;
  static int termenPlata = 0;
  static int achitata = 1; //0 pt fact neachitate
  static String operator = Global.operator;

//Sectiunea Vanzator

  static String numeVanzator = "ALEX AND THEO PARTY SRL";
  static String cuiVanzator = "RO16811327";
  static String cifVanzator = "J03/1647/2004";
  static String adresaVanzator = "Campulung, jud.Arges";
  static String contVanzator = "RO42BTRLRONCRT0P38620102";
  static String bancaVanzator = "Banca Transilvania";
  static String contTrezVanzator = "RO86TREZ0475069XXX1467";
  static String trezVanzator = "Trezoreria Campulung";
  static String telVanzator = "0248 511 099";
  static String emailVanzator = "office@unbaiatsiofata.ro";
  static String webVanzator = "www.unbaiatsiofata.ro";

  static Map<String, dynamic> dateVanzator = {
    "numeVanzator": numeVanzator,
    "cuiVanzator": cuiVanzator,
    "cifVanzator": cifVanzator,
    "adresaVanzator": adresaVanzator,
    "contVanzator": contVanzator,
    "bancaVanzator": bancaVanzator,
    "contTrezVanzator": contTrezVanzator,
    "emailVanzator": emailVanzator,
    "trezVanzator": trezVanzator,
    "telVanzator": telVanzator,
    "webVanzator": webVanzator
  };
//sectiunea Cumparator
  static Map<String, dynamic> dateCumparator = UBFClient().toJson();

//Sectiunea date
  static Map<String, dynamic> articol = {
    'codElem': '',
    'denumire': '',
    'unit_mas': 'buc',
    'cantitate': 0,
    'valabilitate': 0,
    'pret': 0,
    'ctva': 9,
    'valoare': 0,
    'tva': 0
  };

  //static Map<String, dynamic> articoleFactura = {"produs": produs, "cantitate": cantitate, "pret": pret, "ctva": ctva};
  static String articoleFactura = ''; //Aici preia articolele in format JSON pt import ulterior in articole_factura din tbl_facturi

  Map<String, dynamic> toJson() => {
        'idx': idx,
        'nr_fact': nrFact,
        'data_fact': dataFact,
        'total_fara_tva': totalFactFaraTva,
        'date_cumparator': dateCumparator,
        'total_factura': totalFactura,
        'tva19': tva19,
        'tva9': tva9,
        'total_tva': tva,
        'date_vanzator': dateVanzator,
        'discount': discount,
        'val_discount': valDiscount,
        'tva_discount': tvaDiscount,
        'termen_plata': termenPlata,
        'achitata': achitata,
        'operator': operator,
        'articole_fact': articoleFactura
      };
}
