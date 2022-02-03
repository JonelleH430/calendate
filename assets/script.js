$(document).ready(function () {
    
    $(".saveBtn").click(function () {
     
      var userInput = $(this).siblings(".description").val();
      var timeBlock = $(this).parent().attr("id");
  
      console.log("parent ID and userINPUT", userInput, timeBlock);
      localStorage.setItem(timeBlock, userInput);
    });
  
    function getCurrentDate() {
      
        document.getElementById("currentDay").innerHTML =
        moment().format("dddd MMMM YYYY");
    }
    
    getCurrentDate();
    
    function getCurrentTime() {
     
        var currentTime = moment().hours();
  
      $(".time-block").each(function () {
       
        var timeBlockValue = parseInt($(this).attr("value"));
        console.log(timeBlockValue);
  
        if (timeBlockValue < currentTime) {
          
            $(this).addClass("past");
       
        } else if (timeBlockValue === currentTime) {
          
            $(this).addClass("present");
       
        } else {
          
            $(this).addClass("future");
        }
      });
    }
    
    getCurrentTime();
  
    $("#hour-8 .description").val(localStorage.getItem("hour-8"));
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-1 .description").val(localStorage.getItem("hour-1"));
    $("#hour-2 .description").val(localStorage.getItem("hour-2"));
    $("#hour-3 .description").val(localStorage.getItem("hour-3"));
    $("#hour-4 .description").val(localStorage.getItem("hour-4"));
    $("#hour-5 .description").val(localStorage.getItem("hour-5"));
    $("#hour-6 .description").val(localStorage.getItem("hour-6"));
  });

