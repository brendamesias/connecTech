$(document).ready(function() {
  var $listOptionsInterest = $('.list_options_interests').children() ;
  var $textOptionInterest = $listOptionsInterest.children().text() ;
  console.log($listOptionsInterest);
  console.log($textOptionInterest); // me devuelve los textos : ux/ui frotend....
  var interestsOfUser = {};

  for (let i = 0; i < $listOptionsInterest.length - 1; i++) {
    $listOptionsInterest[i].addEventListener('click', function(event) {
      // quiero dos eventos: 1. que cambie el estilo del interest seleccionado (ux) con toggle para que parezca seleccionado 2. que almacene el texto de los intereses selccionados en el array de la variable (interestsOfUser)
      $textOptionInterest[i].push(interestsOfUser);
      console.log(interestsOfUser);
    });
  };
});





















/* ejemplos de eventos con for

$('#enviar').click(function(event) {
    event.preventDefault();
    $('#fotos_comidas').children().remove();
    let valorDeInput = $('#buscar_comida').val();
    for (let i = 0; i < tiposDeComida.length; i++) {
      if (tiposDeComida[i].name === valorDeInput) {
        let valor = tiposDeComida[i][valorDeInput]['platos'];
        valor.forEach(function(elemento) {
          let valorImg = elemento.photo;
          $('#fotos_comidas').append(`<img src=${valorImg} class = 'border_radius' data-toggle="modal" data-target="#modal"/>`);
          $('.imagen_comida').addClass('display_none');
        });
      }
    }
  });

for (let i = 0; i < sedes.length; i++) {
    sedes[i].addEventListener('click', function(event) {
      // console.log(event.target); //  <a href="#" class="sede" data-sede ="AQP">Arequipa</a>
      let sede = event.target.dataset.sede;
      console.log('la sede es : ' + sede); // AQP
      // console.log(typeof sede); // string

    });// función o evento general click en cualquier  sede  multiples eventos
  };// for que recorre sedes para hacer ventos click en cualquier sede

*/
