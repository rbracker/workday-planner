$(function () {
  // Add click event listener for the save button
  $(".saveBtn").on("click", function () {
    // Use DOM traversal to get the id of the containing time-block
    var timeBlockId = $(this).closest(".time-block").attr("id");

    // Get user input from the textarea within this time-block
    var userInput = $(this).siblings(".description").val();

    // Save the user input in local storage using the time block id as a key
    localStorage.setItem(timeBlockId, userInput);
  });

  // Get the current hour using Day.js in 24-hour format
  var currentHour = dayjs().format("H");

  // Iterate over each time block
  $(".time-block").each(function () {
    // Get the hour from the time block's id
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    // Compare the time block hour with the current hour
    if (blockHour < currentHour) {
      // If the block hour is in the past
      $(this).addClass("past");
    } else if (blockHour == currentHour) {
      // If the block hour is the current hour
      $(this).addClass("present");
    } else {
      // If the block hour is in the future
      $(this).addClass("future");
    }

    // Get the time block id
    var timeBlockId = $(this).attr("id");

    // Get user input from localStorage using the time block id as the key
    var savedInput = localStorage.getItem(timeBlockId);

    // Set the textarea value with the saved input
    $(this).find(".description").val(savedInput);
  });

  // Display the current date in the header
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});
