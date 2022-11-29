window.addEventListener("DOMContentLoaded", function(){
    document.getElementById("submit_button")
        .addEventListener("click",runValidate);
});
function runValidate(){
    hotelValidate();
    durationValidate();
    bedsValidate();
    locationValidate();
    if(hotelValidate() && durationValidate() && bedsValidate() && locationValidate){
        calculateCost();
        return false;
    }
    else{
        return true;
    }
}
function hotelValidate(){
    var hotelStars = document.getElementById("hotel_rating");
    if(hotelStars.validity.valueMissing){
        hotelStars.setCustomValidity("Please enter a number between 1 and 5 here")
        hotelStars.reportValidity();
        return false;
    }
    else if(hotelStars.validity.rangeOverflow){
        hotelStars.setCustomValidity("Must be 5 or less")
        hotelStars.reportValidity();
        return false;
    }
    else if(hotelStars.validity.rangeUnderflow){
        hotelStars.setCustomValidity("Must be 1 or higher")
        hotelStars.reportValidity();
        return false;
    }
    else if(hotelStars.validity.badInput){
        hotelStars.setCustomValidity("Must be a number")
        hotelStars.reportValidity();
        return false;
    }
    else{
        hotelStars.setCustomValidity("")
        return true;
    }
}
function locationValidate(){
    var location = document.getElementById("location");
    if(!location.options.selectedIndex == 1 || !location.options.selectedIndex == 2 || !location.options.selectedIndex == 3){
        location.setCustomValidity("Please choose a destination")
        location.reportValidity();
        return false;
    }
    else{
        location.setCustomValidity("")
        return true;
    }
}
function durationValidate(){
    var duration = document.getElementById("stay_length");
    if(duration.valid){
        duration.setCustomValidity("Try again")
        duration.reportValidity();
        return false;
    }
    else{
        duration.setCustomValidity("")
        return true;
    }
}
function bedsValidate(){
    var numOfBeds1 = document.getElementById("num_of_beds1");
    var numOfBeds2 = document.getElementById("num_of_beds2");
    var numOfBeds3 = document.getElementById("num_of_beds3");
    var numOfBeds4 = document.getElementById("num_of_beds4");

    if(numOfBeds1.checked || numOfBeds2.checked || numOfBeds3.checked || numOfBeds4.checked){
        numOfBeds1.setCustomValidity("")
        return true;
    }
    else{
        numOfBeds1.setCustomValidity("Please choose number of beds")
        numOfBeds1.reportValidity();
        return false;
    }
}