$(document).ready(function() {
  $options = $('#options');

  // evento que marcara las opciones seleccionadas

  $options.click(function() {
    $options.addClass('select');
  });
});