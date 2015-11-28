$(document).ready(function(){
    counter();
    sessionTimer();
});

var counter = function() {

  var countdown = parseInt($('#session-length').val());
  $('.session-timer').text(countdown);

  var breakCount = parseInt($('#break-length').val());
  $('.break-timer').text(breakCount);

  
  $('.button').on('click', function(){

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
      $('.session-timer').text(newValue);
     
    } else if ($(this).parent().find('input').attr('id') == 'break-length') {
      $('.break-timer').text(newValue);
     
      } 
    
  });

}; 

var sessionTimer = function () {

    $('.countdown-button').on('click', function (){
        
        var sessionTimer = setInterval(function(){
             var countdown = parseInt($('.session-timer').text());
             var newCountdown = countdown - 1;
              $('.session-timer').text(newCountdown);
              if (newCountdown == 0) {
                clearInterval(sessionTimer);
                secondCount();
              }   
        }, 1000)

        
        
    });
};

var secondCount = function () {
    
    var breakCount = setInterval(function(){
    var breakDown = parseInt($('.break-timer').text());
                var newBreak = breakDown - 1;
                $('.break-timer').text(newBreak);
                if(newBreak == 0) {
                  clearInterval(breakCount);
                }
      }, 1000);
    
};