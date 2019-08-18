// Set the date we're counting down to
var First = new Date("Aug 29, 2019 09:00:00").getTime();
var Second = new Date("Oct 28, 2019 09:00:00").getTime();
var Check = 0
var word=['개강','특별한 날']

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  if (Check == 0)
    var distance = First - now;
  else if (Check == 1)
    var distance = Second - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("jsp").innerHTML = word[Check]+" 까지 "+days + "일 " + hours + "시 " +
    minutes + "분 " + seconds + "초 남았습니다 "

  // If the count down is finished, write some text
  if (distance < 0 && Check == 0)
    Check = 1;
  else if (distance < 0 && Check == 1) {
    clearInterval(x);
    document.getElementById("jsp").innerHTML = "데이터가 없습니다"
  }

}, 1000);
