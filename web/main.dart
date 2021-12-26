import 'meniu.dart';
import 'dart/clase/ultim_numar.dart';

void main() async {
  UltimNumar.ultimNumar();
  Meniu.topMeniu();
  await Future.delayed(const Duration(milliseconds: 50)); //sa apuce sa incarce formularele
}
