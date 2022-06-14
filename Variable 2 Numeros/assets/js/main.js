var numero1 = prompt("Ingrese un número mayor a '0':", "");
var numero2 = prompt("Ingrese otro número mayor a '0':", "");

document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<tr>");
document.write("<th scope='row'>Numero 1 Ingresado</th>");
document.write("<td>" +numero1+"</td>");
document.write("<tr>");
document.write("<th scope='row'>Numero 2 Ingresado</th>");
document.write("<td>" +numero2+"</td>");


document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<th scope='col'>Operación</th>");
document.write("<th scope='col'>Resultado</th>");



numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

total_suma = numero1 + numero2;
total_resta = numero1 - numero2;
total_mult = numero1 * numero2;
total_div = numero1 / numero2;
total_modulo = numero1 % numero2;

document.write("<tr>");
document.write("<th scope='row'>La SUMA de los 2 números es</th>");
document.write("<td>" +total_suma+"</td>");
document.write("<tr>");
document.write("<th scope='row'>La RESTA de los 2 números es</th>");
document.write("<td>" +total_resta+"</td>");
document.write("<tr>");
document.write("<th scope='row'>La MULTIPLICACIÓN de los 2 números es</th>");
document.write("<td>" +total_mult+"</td>");
document.write("<tr>");
document.write("<th scope='row'>La DIVISIÓN de los 2 números es</th>");
document.write("<td>" +total_div+"</td>");
document.write("<tr>");
document.write("<th scope='row'>El MÓDULO de los 2 números es</th>");
document.write("<td>" +total_modulo+"</td>");
