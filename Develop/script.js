$(function () {
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).closest(".time-block").attr("id");

    var userInput = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, userInput);
  });

  var currentHour = dayjs().format("H");

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }

    var timeBlockId = $(this).attr("id");

    var savedInput = localStorage.getItem(timeBlockId);

    $(this).find(".description").val(savedInput);
  });

  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
