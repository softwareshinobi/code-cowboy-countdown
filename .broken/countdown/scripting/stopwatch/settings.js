desiredMinutesDefault=8;

desiredMinutes=desiredMinutesDefault;

$(document).ready(function () {

    $("#minuteSlider").val(desiredMinutesDefault);
    
    onSliderChange();

    resetTimer();

});

// user event handling //////

function onBoxChange(){

    console.log("updating box");

    desiredMinutes = $("#minuteBox").val();

    console.log("desiredMinutes / " + desiredMinutes);

    $("#minuteSlider").val(desiredMinutes);

}

function onSliderChange(){

    desiredMinutes = $("#minuteSlider").val();

    $("#minuteBox").val(desiredMinutes);

}
