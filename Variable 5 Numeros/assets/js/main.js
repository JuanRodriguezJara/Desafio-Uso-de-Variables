var num1 = prompt("Deberás ingresar 5 números, ingresa un primer número mayor a '0':", "");
var num2 = prompt("Ahora ingresa un segundo número mayor a '0':", "");
var num3 = prompt("Ahora ingresa un Tercer número mayor a '0':", "");
var num4 = prompt("Ahora un cuarto número mayor a '0':", "");
var num5 = prompt("Y ahora ingresa el último valor mayor a '0':", "");

document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<tr>");
document.write("<th scope='row'>Los valores ingresados fueron... </th>");
document.write("<th>"+num1+" ; "+num2+" ; "+num3+" ; "+num4+" ; "+num5+"</th>");

document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<th scope='col'>Operación</th>");
document.write("<th scope='col'>Resultado</th>");

num1 = parseInt(num1);
num2 = parseInt(num2);
num3 = parseInt(num3);
num4 = parseInt(num4);
num5 = parseInt(num5);

total_sum = num1 + num2 + num3 + num4 + num5;
total_prom = total_sum / 5;

document.write("<tr>");
document.write("<th scope='row'>La suma de todos los números es.. </th>");
document.write("<td>" +total_sum+" </td>");
document.write("<tr>");
document.write("<th scope='row'>El promedio de los 5 números ingresados es..</th>");
document.write("<td>" +total_prom+" </td>");

