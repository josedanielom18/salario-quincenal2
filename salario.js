// Pedir datos personales del empleado
const nombre = prompt("Ingrese el nombre del empleado:");
const apellido = prompt("Ingrese el apellido del empleado:");
const cedula = prompt("Ingrese la cédula del empleado:");

// Pedir horas trabajadas por turno
const horasDiurnas = parseInt(prompt("Ingrese las horas diurnas trabajadas:"));
const horasVespertinas = parseInt(prompt("Ingrese las horas vespertinas trabajadas:"));
const horasNocturnas = parseInt(prompt("Ingrese las horas nocturnas trabajadas:"));

// Calcular el salario bruto
const costoHoraDiurna = 675;
const costoHoraVespertina = 700;
const costoHoraNocturna = 956.23;
const salarioDiurno = horasDiurnas * costoHoraDiurna;
const salarioVespertino = horasVespertinas * costoHoraVespertina;
const salarioNocturno = horasNocturnas * costoHoraNocturna;
const salarioBruto = salarioDiurno + salarioVespertino + salarioNocturno;

// Calcular el descuento por ahorro habitacional y seguro social
let descuentoAhorroHabitacional = 0;
let descuentoSeguroSocial = 0;
if (salarioBruto < 85000) {
  descuentoAhorroHabitacional = salarioBruto * 0.001;
  descuentoSeguroSocial = salarioBruto * 0.0015;
} else if (salarioBruto >= 85000 && salarioBruto <= 150000) {
  descuentoAhorroHabitacional = salarioBruto * 0.0015;
  descuentoSeguroSocial = salarioBruto * 0.002;
} else {
  descuentoAhorroHabitacional = salarioBruto * 0.003;
  descuentoSeguroSocial = salarioBruto * 0.0025;
}

// Calcular el salario neto
const salarioNeto = salarioBruto - descuentoAhorroHabitacional - descuentoSeguroSocial;
const resultadoDiv = document.getElementById("resultado");
document.getElementById("sueldoConDeduccion").innerHTML = "El sueldo quincenal es: " + salarioNeto.toFixed(2) + " Bs. F.";

// Mostrar resultados por pantalla
document.getElementById("nombre").textContent = nombre;
document.getElementById("apellido").textContent = apellido;
document.getElementById("cedula").textContent = cedula;
document.getElementById("sueldoSinDeduccion").textContent = salarioBruto.toFixed(2) + " Bs. F.";
document.getElementById("descuentoAhorroHabitacional").textContent = descuentoAhorroHabitacional.toFixed(2) + " Bs. F.";
document.getElementById("descuentoSeguroSocial").textContent = descuentoSeguroSocial.toFixed(2) + " Bs. F.";
document.getElementById("sueldoConDeduccion").textContent = salarioNeto.toFixed(2) + " Bs. F.";
