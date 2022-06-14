//Intrucción para solicitar un número al usuario
var numero1 = prompt("Ingrese una cantidad de días mayor a '0':", "");

//Contenedor para indicar en pantalla el valor ingresado por el usuario
document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<tr>");
document.write("<th scope='row'>Cantidad de días ingresado</th>");
document.write("<td>" +numero1+"</td>");

//Contenedor para indicar el resultado en pantalla
document.write("<div class='container'>");
document.write("<table class='table'>");
document.write("<th scope='col'>Operación</th>");
document.write("<th scope='col'>Resultado</th>");

//Transformar valor ingresado en número para poder hacer operaciones matematicas
numero1 = parseInt(numero1);

//Cálculo de las operaciones
total_años = Math.floor( numero1 / 365);
total_semanas = Math.floor (numero1 % 365 / 7);
total_dias = (numero1 % 365) % 7;

//Indicador de resultados en pantalla
document.write("<tr>");
document.write("<th scope='row'>La cantidad de Años es.. </th>");
document.write("<td>"+total_años+" años </td>");
document.write("<tr>");
document.write("<th scope='row'>La cantidad de Semanas es.. </th>");
document.write("<td>"+total_semanas+" semanas </td>");
document.write("<tr>");
document.write("<th scope='row'>La cantidad de Años, Semanas y días es.. </th>");
document.write("<td>"+total_años+" años "+total_semanas+" semanas "+total_dias+" días</td>");

