$(document).ready(function(){
  increase();
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

var increase = function() {
  var counter = 0;
  $('.increase').click(function(){
      $(this).click(function(){
          counter += 1;
          $(this).prev().replaceWith('<span class="break-length">'+counter+'</span>');
        });
      });
  
 
};