// Set the date we're counting down to
var Check = 0
var Word = ['개강', '변경','특별한 날']
var Dt = {
  id: [new Date("Aug 29, 2019 00:00:00").getTime(), new Date("Sep 4, 2019 23:59:59").getTime(),new Date("Oct 29, 2019 00:00:00").getTime()]
};

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  var distance = Dt.id[Check] - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("jj").innerHTML = Word[Check] + " 까지 " + days + "일 " + hours + "시 " +
    minutes + "분 " + seconds + "초 남았습니다 "

  // If the count down is finished, write some text
  if (distance < 0 && Check < Word.length)
    Check += 1;
}, 1000);
