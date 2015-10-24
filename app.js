$(document).ready(function(){
    counter();
    sessionTimer();
});

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

var sessionTimer = function () {

    $('.countdown-button').on('click', function (){
        var sessionTimer = setInterval(function(){
          var countdown = parseInt($('.countdown').text());
             var newCountdown = countdown - 1;
              $('.countdown p').text(newCountdown);
              if (newCountdown == 0) {
               clearInterval(sessionTimer); 
             }
        }, 1000)
    });
};
