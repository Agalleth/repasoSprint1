var fila = [1,2,3,4];
var objeto ={perrito:"perrito "};
fila.shift();
document.write(fila);
fila.push("Hola");
document.write("<br>"+fila);
fila.pop();
document.write("<br>"+fila);
fila.unshift(objeto.perrito)
document.write("<br>"+fila);
