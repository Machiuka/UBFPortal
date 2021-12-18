import 'dart:html';

//Aici incarca fisierele .css
class CSS {
  static void aplicaCSS(String fisierCSS) {
    LinkElement link = LinkElement();
    document.head!.append(link);
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fisierCSS;
  }

  static void eliminaCSS(String fisierCSS) {
    LinkElement link = LinkElement();
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = fisierCSS;
    link.remove();
  }
}
