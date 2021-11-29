class UBFDocument {
  int? idx;
  DateTime? dataDoc;
  String? nrDoc;
  String? emitentDoc;
  String? destinatarDoc;
  String? tipDoc;
  String? continutDoc; //aici va fi un sir de tip JSON
  String? dateEmitentDoc; //si aici la fel
  String? dateDestinatarDoc; //si aici la fel
  String? obsDoc; //optional named param

  UBFDocument(
      {this.idx,
      this.dataDoc,
      this.nrDoc,
      this.emitentDoc,
      this.destinatarDoc,
      this.tipDoc,
      this.continutDoc,
      this.dateEmitentDoc,
      this.dateDestinatarDoc,
      this.obsDoc});
}
