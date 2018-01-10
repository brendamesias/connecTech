$(document).ready(function() {
  /**
   * $optionInterestsForm.each(function() {
     // console.log($(this)); --> r.fn.init [option]
     var elementInterestForm = $(this)[0];
     console.log(elementInterestForm);
     var x = Object.values($(this))[0];
     console.log(x);
     var textInterest = $(this).val();
     $(elementInterestForm).click(function() {
       alert('hola mundo');
     });
   });
   */
  let valorInputTag = $('#tag').val();

  $('#tag').click(function(event) {
    event.preventDefault();


    for (let i = 0; i < tiposDeComida.length; i++) {
      if (tiposDeComida[i].name === valorDeInput) {
        let valor = tiposDeComida[i][valorDeInput]['platos'];
        valor.forEach(function(elemento) {
          let valorImg = elemento.photo;
          $('#fotos_comidas').append(`<img src=${valorImg} />`);
        });
      }
    }
  });


});
