/* Apartado 6
 Un atributo nombre que pasaremos como parámetro al crear el objetos. El objeto permitirá gestionar cuentas 
 (de 6 dígitos del 000001 al 599999) y el saldo de las cuentas, para lo que utilizaremos los siguientes métodos:*/
class Banco {
  constructor(nombre) {
    this.nombre = nombre;
    this.cuentas = [];
  }
  /* Apartado 7
   Crear cuenta: Recibe como parámetros el código de cuenta y el saldo inicial 
   (por defecto tomará el valor 0 si no se pasa el parámetro). */
  crearCuenta(numeroCuenta, saldo) {

    saldo = saldo || 0;
    if (numeroCuenta >= 599999) {
      console.log("Nº de cuenta no válido, deb estar entre 000001 y 599999 (>599999)");
    }
    else if (numeroCuenta < 1) {
      console.log("Nº de cuenta no válido, deb estar entre 000001 y 599999 (<000001)");
    } else {
      this.cuentas.push({ numeroCuenta: numeroCuenta, saldo: saldo });
    }
  }
  /* Apartado 8
   Actualizar cuenta: Recibe como parámetros el código de cuenta y el ingreso (o extracción en negativo) y actualiza el saldo de la cuenta. 
   Mostrará error si la cuenta no existe.  */
  actualizarCuenta(numeroCuenta, modificacionSaldo) {
    let existe = false;
    for (let cuenta of this.cuentas) {
      if (cuenta.numeroCuenta === numeroCuenta) {
        cuenta.saldo = cuenta.saldo + modificacionSaldo;
        existe = true;
        break;
      }
    }
    if (existe === false) {
      console.log("Error al actualizar. Ese número de cuenta no existe");
    }
  }
  /* Apartado 9
   Eliminar cuenta: Recibe como parámetro el código de cuenta y la elimina. 
   Mostrará error si la cuenta no existe o si no tiene saldo 0, indicando cada caso. */
  eliminarCuenta(numeroCuenta) {
    let existe = false
    for (let cuenta of this.cuentas) {
      if (cuenta.numeroCuenta === numeroCuenta) {
        existe = true;
        if (cuenta.saldo === 0) {
          let indice = this.cuentas.findIndex(cuenta => cuenta.numeroCuenta === numeroCuenta);
          this.cuentas.splice(indice, 1);
        } else {
          console.log("Error al eliminar. La cuenta todavía tiene saldo");
        }
      }
    }
    if (existe === false) {
      console.log("Error al eliminar. Ese número de cuenta no existe");
    }
  }
  /* Apartado 10
   Listar cuentas: Escribe en el documento el nombre del banco y la lista de cuentas con sus saldos 
   de forma similar a la mostrada en la imagen siguiente. 
   Realiza 3 llamadas al método para crear cuentas, y una llamada a cada uno de los otros métodos para demostrar su funcionamiento. */
  listarCuentas(nombre) {
    let existe = false;
    if (nombre === this.nombre) {
      existe = true;
      let contenido = "";
      document.getElementById("nombreBanco").innerHTML = "<h1>" + nombre + "</h1>";
      for (let cuenta of this.cuentas) {
        contenido = contenido + "<h4>" + cuenta.numeroCuenta + " - " + cuenta.saldo + " € </h4>";
      }
      document.getElementById("listaCuentas").innerHTML = contenido;
    }
    if (existe === false) {
      document.getElementById("listaCuentas").innerHTML = "<h2> " + nombre + " no es un nombre de banco válido.</h2>";
    }
  }
}
//     if (nombre instanceof Banco) {
//       for (let cuenta of this.cuentas) {
//         document.getElementById("listaCuentas").innerHTML = cuenta.numeroCuenta + " - " + cuenta.saldo;
//       }
//     } else {
//       document.getElementById("listaCuentas").innerHTML = nombreBanco + "no es un banco válido.";
//     }
//   }
// }

let banco1 = new Banco("BancoAndres");
// console.log(banco1.nombre)

banco1.crearCuenta(123456);
banco1.crearCuenta(223344, 1000);
banco1.crearCuenta(0, 100);
banco1.crearCuenta(600000, 100);
banco1.crearCuenta(556677, 2000);
// console.log(banco1.cuentas);

banco1.actualizarCuenta(123456, 1500);
banco1.actualizarCuenta(223344, 500);
banco1.actualizarCuenta(111111, 1);
banco1.actualizarCuenta(556677, -500);
// console.log(banco1.cuentas);

banco1.eliminarCuenta(555555);
banco1.crearCuenta(555555, 5);
banco1.eliminarCuenta(555555);
banco1.actualizarCuenta(555555, -5);
banco1.eliminarCuenta(555555);
console.log(banco1.cuentas);

banco1.listarCuentas("BancoRaul");
banco1.listarCuentas("BancoAndres");