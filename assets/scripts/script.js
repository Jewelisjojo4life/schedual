var timeday = dayjs();
$("#currentDay").text(timeday.format("dddd, MMMM Do"));
var myVar = setInterval(myTimer, 1000);

function myTimer() {
  let date = new Date();
  let time = date.toLocaleTimeString();
  document.getElementById("clock").innerHTML = time;

  $(".time-block").each(function () {
    var clockNow = parseInt($(this).attr("id").split("hour-")[1].slice(0, 2));
    var currentHour = parseInt(date.getHours());

    if (currentHour > clockNow) {
      $(this).addClass("past");
    } else if (currentHour === clockNow) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
}

const textBox = $(".description");

textBox.each(function () {
  var timeId = $(this).parent().attr("id");
  var descr = localStorage.getItem(timeId);

  if (descr) {
    $(this).val(descr);
  }
});

var saveBtn = $(".saveBtn");

saveBtn.each(function () {
  var text = $(this).siblings(".description");
  var timeId = $(this).parent().attr("id");

  $(this).on("click", function () {
    var descr = text.val();

    localStorage.setItem(timeId, descr);
  });
});
