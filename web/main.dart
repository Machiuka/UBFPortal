import 'dart/clase/login.dart';
import 'dart/clase/local_storage.dart';

void main() async {
  LocalStorage local = LocalStorage();
  Login login = Login();

  String utilizator = local.cauta('utilizator').toString();

  if (utilizator.length < 5) {
    login.incarcaUser();
  } else {
    login.verificaParola();
  }
}
