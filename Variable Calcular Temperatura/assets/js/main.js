var numero1 = prompt("Ingrese una temperatura en grados celsius:", "");

document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<tr>");
document.write("<th scope='row'>Grados Celsius Ingresados</th>");
document.write("<td>" +numero1+"</td>");

document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<th scope='col'>Operación</th>");
document.write("<th scope='col'>Resultado</th>");

numero1 = parseInt(numero1);

total_farh = numero1 + 273,15;
total_kelv = (numero1 * 9/5) + 32;

document.write("<tr>");
document.write("<th scope='row'>El valor Celsius Transformado en Grados FAHRENHEIT es: </th>");
document.write("<td>" +total_farh+" °F</td>");
document.write("<tr>");
document.write("<th scope='row'>El valor Celsius Transformado en Grados KELVIN es:</th>");
document.write("<td>" +total_kelv+" K</td>");

