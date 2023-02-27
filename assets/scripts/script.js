var myVar = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;

  $(".time-block").each(function () {
    var clockNow = parseInt($(this).attr("id").split("hour")[1]);

    if (myVar < clockNow) {
      $(this).addClass("past");
    } else if (myVar === clockNow) {
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
