$(document).ready(function() {
  // trayenpo del dom (estructura html de una publicacion contenido)
  var btnSubmitFormPost = $('#submit_form_post');
  var containerPublications = document.querySelector('#all_publications');
  var structurePublication = document.querySelector('#publication');

  // variables del modal para realizar un apblicación traidas del dom
  var tagsForPost = $('#tag')[0];
  // console.log(tagsForPost);
  var valorInputTag = $('#tag').val();
  // console.log(valorInputTag);
  var optionsTagPost = $('#tag').children();
  // console.log(optionsTagPost);
  var typePost = $('#type_post')[0];
  // console.log(typePost);
  var valorInputTypePost = $('#type_post').val();
  // console.log(valorInputTypePost);
  var optionsTypePost = $('#type_post').children();
  // console.log(optionsTypePost);
  var descriptionPostVal = $('.description-post');
  // console.log(descriptionPostVal);

  // funciones que capturen las entradas de los inputs y formularios
  $(tagsForPost).click(function(event) {
    valorInputTag = $(this).val();
  });

  $(typePost).click(function(event) {
    valorInputTypePost = $(this).val();
  });

  descriptionPostVal.on('input', function() {
    inputDescriptionPostVal = event.target.value ;
  });

  btnSubmitFormPost.click(function(event) {
    var clonePost = structurePublication.cloneNode(true);
    var inputImgmodal = document.querySelector('#input_img_post');
    clonePost.querySelector('#tag_of_post').textContent = valorInputTag ;
    clonePost.querySelector('#TypeOfpost').textContent = valorInputTypePost ;
    clonePost.querySelector('#description_post').textContent = inputDescriptionPostVal ;
    clonePost.querySelector('#timeOfPost').textContent = moment().subtract(10, 'days').calendar() + '  ' + moment().format('LT'); ;

    // trayendo elemento html img por defecto del post clonado
    var imgPostClone = clonePost.querySelector('#img_post');

    // trayendo img del input del modal
    var fileImgInputNewPost = inputImgmodal.files[0].name ;
    // console.log(fileImgInputNewPost);
    var reader = new FileReader();

    reader.onload = function(event) {
      // console.log(event.target.result);
      imgPostClone.setAttribute('src', event.target.result);
    };
    reader.readAsDataURL(inputImgmodal.files[0]);

    clonePost.classList.remove('display_none');
    containerPublications.prepend(clonePost);
  });// termina el evento de clik en boton submit
});
