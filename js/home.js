$(document).ready(function() {
  // variables del dom declaradas
  var tagsForPost = $('#tag')[0];
  console.log(tagsForPost);

  var valorInputTag = $('#tag').val();
  console.log(valorInputTag);

  var optionsTagPost = $('#tag').children();
  console.log(optionsTagPost);

  var typePost = $('#type_post')[0];
  console.log(typePost);

  var valorInputTypePost = $('#type_post').val();
  console.log(valorInputTypePost);

  var optionsTypePost = $('#type_post').children();
  console.log(optionsTypePost);

  // funciones que capturen las entradas de los inputs y formularios

  $(tagsForPost).click(function(event) {
    valorInputTag = $(this).val();
    console.log(valorInputTag);
  });

  $(typePost).click(function(event) {
    valorInputTypePost = $(this).val();
    console.log(valorInputTypePost);
  });


  console.log($('#title_post').val());


/*
    tagsForPost.addEventListener('click', function(event){
      for (var i = 0; i < optionsTagPost.length; i++) {
       optionsTagPost[i].addEventListener('click', function(event) {
          console.log(event.target);

       });// función o evento general click en cualquier  sede  multiples eventos
     };// for que recorre sedes para hacer ventos click en cualquier sede
    })
    */




    /*
    $optionInterestsForm.each(function() {
      // console.log($(this)); --> r.fn.init [option]
      var elementInterestForm = $(this)[0];
      console.log(elementInterestForm);
      var x = Object.values($(this))[0];
      console.log(x);
      var textInterest = $(this).val();
      $(elementInterestForm).click(function() {
        alert('hola mundo');
      });
      */
  // });

/*
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
  */
});
