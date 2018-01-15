// Inicializamos el document
$(document).ready(function() {
  // Declaramos nodos  del dom (estructura html de una publicacion contenido)
  var btnSubmitFormPost = $('#submit_form_post');
  var containerPublications = document.querySelector('#all_publications');
  var structurePublication = document.querySelector('#publication');

  // Variables del modal 
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

  // Funciones que capturan las entradas de los inputs y formularios
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
    var user = firebase.auth().currentUser;
    var clonePost = structurePublication.cloneNode(true);
    var inputImgmodal = document.querySelector('#input_img_post');
    clonePost.querySelector('#tag-of-post').textContent = valorInputTag ;
    $('#tag-of-post').attr('class', 'tags-posts');
    clonePost.querySelector('#type-of-post').textContent = valorInputTypePost ;
    $('#type-of-post').attr('class', 'tags-posts')
    clonePost.querySelector('#description_post').textContent = inputDescriptionPostVal ;
    clonePost.querySelector('#time-of-post').textContent = moment().subtract(10, 'days').calendar() + '  ' + moment().format('LT');

    // Cambiamos la imagen default por la imagen del usuario en los posts
    $('#photo_user_post').attr('src', user.photoURL);
    $('#name_user_post').text(user.displayName);

    // Extraemos elemento html img por defecto del post clonado
    var imgPostClone = clonePost.querySelector('#img_post');

    // Extraemos img del input del modal
    var fileImgInputNewPost = inputImgmodal.files[0].name ;
    // console.log(fileImgInputNewPost);
    var reader = new FileReader();

    reader.onload = function(event) {
      // console.log(event.target.result);
      imgPostClone.setAttribute('src', event.target.result);
      imgPostClone.setAttribute('class', 'img-responsive');
    };
    reader.readAsDataURL(inputImgmodal.files[0]);

    clonePost.classList.remove('display_none');
    containerPublications.prepend(clonePost);
  });// Termina el evento de clik en  el boton submitt
});
