/**********************************************************************

    TOMAR LOS DATOS DE LOS INPUT.

**********************************************************************/
var nombre = document.getElementById("nombreEmpleado");
var horas = document.getElementById("horasTrabajadas");
var pago = document.getElementById("pagoHora");



/**********************************************************************

    FUNCION DE LOS BOTONES.

**********************************************************************/
/* Botón de calcular */
var boton = document.getElementById("botonCalcular");
boton.addEventListener("click", calcularSueldo );

function calcularSueldo() {
  var nom = nombre.value;
  var hor = parseInt(horas.value);
  var pag = parseInt(pago.value);
  
  var sueldo, seguro, bono, sueldoNeto;
  
  sueldo = hor * pag;
  seguro = sueldo * 0.0945;
  
  if(sueldo <= 300) {
    bono = sueldo * 0.02;
    sueldoNeto = sueldo + bono - seguro;
    document.getElementById('resultado').innerHTML = "El sueldo de " + nom + " queda de la siguiente manera: <br>Sueldo: $" + sueldo.toFixed(2) + "<br>Descuento de seguridad social: $" + seguro.toFixed(2) + "<br>Bonificación: $" + bono.toFixed(2) + "<br>Sueldo neto: $" + sueldoNeto.toFixed(2);
  }
  else {
    sueldoNeto = sueldo - seguro;
    document.getElementById('resultado').innerHTML = "El sueldo de " + nom + " queda de la siguiente manera: <br>Sueldo: $" + sueldo.toFixed(2) + "<br>Descuento de seguridad social: $" + seguro.toFixed(2) + "<br>Sueldo neto: $" + sueldoNeto.toFixed(2);
  }
}


/* Botón de borrar */
var boton = document.getElementById("botonBorrar");
boton.addEventListener("click", borrarDatos);

function borrarDatos() {
  document.getElementById('resultado').innerHTML = "";
  document.getElementById('nombreEmpleado').value = "";
  document.getElementById('horasTrabajadas').value = "";
  document.getElementById('pagoHora').value = "";
}



//Borrar contenido del input al volver a hacer click en él. 
var borrar_input = document.getElementById("nombreEmpleado");
borrar_input.addEventListener("click", borraInput);

var borrar_input = document.getElementById("horasTrabajadas");
borrar_input.addEventListener("click", borraInput);

var borrar_input = document.getElementById("pagoHora");
borrar_input.addEventListener("click", borraInput);

function borraInput ()
{
  borrar_input = this.value="";
}