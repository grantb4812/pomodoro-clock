$(document).ready(function(){
  $('.increase-button').on('click', function(){
    increase();
  });
});

var increase = function () {
  var num = 0;
  num =+ 1;
  $('.break-length').replaceWith(num);
};