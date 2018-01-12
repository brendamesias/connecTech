$(document).ready(function() {
  // variables del dom declaradas (modal)
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

  var inputTitlePostVal = $('.title-post-input');
  var descriptionPostVal = $('.description-post');

  // trayenpo del dom (estructura de una publicaciopn contenido)
  var titlePost = $('#title_post').text();
  // console.log(titlePost); --> Nuevo Lenguaje de programación cuántico
  var descriptionPost = $('#description_post').text();

  var btnSubmitFormPost = $('#submit_form_post');
  var containerPublications = document.getElementById('all_publications');
  console.log(containerPublications);
  var structurePublication = document.getElementById('publication');
  console.log(structurePublication);
  // console.log(structurePublication.children());

  // funciones que capturen las entradas de los inputs y formularios

  $(tagsForPost).click(function(event) {
    valorInputTag = $(this).val();
    console.log(valorInputTag);
  });

  $(typePost).click(function(event) {
    valorInputTypePost = $(this).val();
    console.log(valorInputTypePost);
  });

  inputTitlePostVal.on('input', function() {
    inputTitlePostVal = event.target.value ;
    // console.log('newtitle:  ' + inputTitlePostVal);
  });

  descriptionPostVal.on('input', function() {
    inputDescriptionPostVal = event.target.value ;
    // console.log('newdescription :  ' + descriptionPostVal);
  });

  btnSubmitFormPost.click(function(event) {
    var clonePost = structurePublication.cloneNode(true);
    console.log(clonePost);
    // var textTitlePostclone = clonePost.children[0].children[0].children[0].children[1].children[0].children[0].children[0].firstElementChild.textContent ;
    clonePost.children[0].children[0].children[0].children[1].children[0].children[0].children[0].firstElementChild.textContent = inputTitlePostVal ;
    clonePost.children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].textContent = inputDescriptionPostVal ;
    // console.log(clonePost.children[0].children[0].children[0].children[1].children[0].children[0].children[1].children[0].textContent);
    // textTitlePostclonet --> nuevo lenguaje de programacion cuantico
    // textTitlePostclone = inputTitlePostVal ;
    // console.log(textTitlePostclone);
    clonePost.classList.remove('display_none');


    containerPublications.prepend(clonePost);
    // containerPublications.appendChild(clonePost);
  });
});
