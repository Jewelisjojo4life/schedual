var myVar = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;

  // loop over time blocks
  $(".time-block").each(function () {
    var myTimer = parseInt($(this).attr("id").split("hour")[1]);
    console.log(myTimer, time);

    //check if we've moved past this time, click into css/html given classes of past, present, or future
    if (myTimer < time) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    } else if (myTimer === time) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });
}
hourTracker();
