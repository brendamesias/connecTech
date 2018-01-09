$(document).ready(function() {
  var indice = 0;
  frases = new Array();
  frases[0] = "El problema real no es si las maquinas piensan, sino si lo hacen los hombres.-B. F. Skinner.";
  frases[1] = "Tienes que aprender a aprovechar la tecnología para poder usarla para cosas positivas sin estar desconectado de la naturaleza.-Talib Kweli.";
  frases[2] = "El verdadero progreso es el que pone la tecnología al alcance de todos. (Henry Ford)";

  indice = Math.random()*(frases.length);
  indice = Math.floor(indice);

  function rotar() {
  if (indice == frases.length) {indice = 0;}
  document.getElementById("rotando").innerHTML = frases[indice];
  indice++;
  setTimeout("rotar();",7000);
  }
  rotar();

});
