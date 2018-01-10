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

  var inputTitlePostVal = $('.title-post-input');
  var descriptionPostVal = $('.description-post');
  var titlePost = $('#title_post').text();
  // console.log(titlePost); --> Nuevo Lenguaje de programación cuántico
  var descriptionPost = $('#description_post').text();
  var btnSubmitFormPost = $('#submit_form_post');
  var containerPublications = $('.all_publications');
  var publicationClone = $('.publication');

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
    // console.log(inputTitlePostVal);
  });

  descriptionPostVal.on('input', function() {
    descriptionPostVal = event.target.value ;
    // console.log(descriptionPostVal);
  });

  btnSubmitFormPost.click(function(event) {
    titlePost = inputTitlePostVal;
    descriptionPost = descriptionPostVal;
    console.log('new titlePost :' + titlePost);
    console.log('new descriptionPost :' + descriptionPost);
    var clonePost = publicationClone.clone();
    containerPublications.prepend(clonePost.html());
  });
});
