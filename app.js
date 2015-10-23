$(document).ready(function(){
    counter();
});

// this increases / decrease individual 
/*
var counter = 0;
var increaseDecrease = function () {
  $('.break-increase-button').on('click', function(){
      counter += 1;
      $('.break-length').replaceWith('<span class="break-length">'+counter+'</span>');
  });

  $('.break-decrease-button').on('click', function(){
      if (counter > 0) {
      counter -= 1;
      $('.break-length').replaceWith('<span class="break-length">'+counter+'</span>');
      }
  }); 
};
*/
// working on code that increase / decrease but not specific

var counter = function() {
  
  $('button').on('click', function(){

    var oldValue = parseInt($(this).parent().find('input').val());
    
    if ($(this).text() == "+") {
      var newValue = oldValue + 1;
    } else if (oldValue > 0) {
      var newValue = oldValue - 1;
    } else {
      var newValue = 0;
    }

    $(this).parent().find('input').val(newValue);
    
    if ($(this).parent().find('input').attr('id') == 'session-length') {
      $('.countdown').children().text(newValue);
    }
    
  });

}; 