import 'meniu.dart';

void main() async {
  Meniu.topMeniu();
  await Future.delayed(
      const Duration(milliseconds: 50)); //sa apuce sa incarce formularele
}
