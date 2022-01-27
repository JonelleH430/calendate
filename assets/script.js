var containerEl = document.querySelector(".container");


var events = [];


var displayDate = function() {
    var date = moment().format('dddd, MMMM Do');

    $('#currentDay').text(date);
};


setInterval (function(){
    colourCoded();
}, (1000 * 60) * 60);


var colourCoded = function() {
    
    $('.description').each(function() {
        
        var eventTime = $(this).attr("id");

        
        var currentTime = moment().hour();

    
        if (currentTime == eventTime) {
            $(this).removeClass();
            $(this).addClass("present col-10 description");
        } else if (currentTime > eventTime) {
            $(this).removeClass();
            $(this).addClass("past col-10 description");
        } else if (currentTime < eventTime) {
            $(this).removeClass();
            $(this).addClass("future col-10 description");
        }
    });
};


$(".time-block").on("click", ".saveBtn", function() {
    
    var eventTime = $(this)
    .closest(".time-block")
    .find(".description")
    .attr("id");

    var eventDescription = $(this)
    .closest(".time-block")
    .find(".description")
    .val()
    .trim();

    var savedEvent = {
        time: eventTime,
        description: eventDescription
    }
    console.log(savedEvent);
    
    events.push(savedEvent);
    console.log(events);
    
    saveEvent();
});

var saveEvent = function() {
    localStorage.setItem("events", JSON.stringify(events));
};


var loadEvents = function() {
    var localStorageEvents = JSON.parse(localStorage.getItem("events"));


    
    for (var i =0; i < localStorageEvents.length; i++) {
        console.log();
    var selectorId = localStorageEvents[i].time;
    
       document.getElementById(selectorId).value = localStorageEvents[i].description;
    }
};

loadEvents();
displayDate();
colourCoded();