$(document).ready(function(){
  $('.break-increase-button').on('click', function(){
    increase();
  });
  $('.break-decrease-button').on('click', function(){
    decrease();
  });
});

var breakIncreaseNum = 0;
console.log(breakIncreaseNum);
var increase = function() {
  breakIncreaseNum += 1;
  $('.break-length').replaceWith('<span class="break-length">'+breakIncreaseNum+'</span>')
  return breakIncreaseNum;
};

console.log(breakIncreaseNum);
var breakDecreaseNum = breakIncreaseNum;
var decrease = function() {
  breakDecreaseNum -= 1;
  $('.break-length').replaceWith('<span class="break-length">'+breakDecreaseNum+'</span>')
  console.log(breakDecreaseNum);
}; 