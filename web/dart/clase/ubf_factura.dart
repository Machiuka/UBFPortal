import 'ubf_client.dart';

class UBFFactura {
  static int? nrFact;
  static DateTime? dataFact;
  static double? totalFactFaraTva;
  static double? totalFactura;
  static double? tva9;
  static double? tva19;
  static double? valDiscount;
  static int? discount;
  static int? termenPlata;
  static int achitata = 1; //0 pt fact neachitate

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
  static String webVanzator = "https://unbaiatsiofata.ro/";

  static Map<String, dynamic> dateVanzator = {
    "numeVanzator": numeVanzator,
    "cuiVanzator": cuiVanzator,
    "cifVanzator": cifVanzator,
    "adresaVanzator": adresaVanzator,
    "contVanzator": contVanzator,
    "bancaVanzator": bancaVanzator,
    "contTrezVanzator": contTrezVanzator,
    "trezVanzator": trezVanzator,
    "telVanzator": telVanzator,
    "webVanzator": webVanzator
  };
//sectiunea Cumparator o ia din clasa UBFClient

//Sectiunea date
  static Map<String, dynamic> articol = {'codElem': '', 'denumire': '', 'cantitate': 0, 'pret': 0, 'ctva': 9};

  //static Map<String, dynamic> articoleFactura = {"produs": produs, "cantitate": cantitate, "pret": pret, "ctva": ctva};
  static String articoleFactura = ''; //Aici preia articolele in format JSON pt import ulterior in articole_factura din tbl_facturi
}
