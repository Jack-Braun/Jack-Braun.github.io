window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("stay_length")
        .addEventListener("input",stayUpdater);
});
// to show how many days are currently selected in the slider
function stayUpdater(){
    var duration = document.getElementById("stay_length");
    var target = document.getElementById("days_target");
    target.innerText = duration.value + " Days";
};
// calculate cost function is called in formValidation_JBr49282.js
function calculateCost(){
    var durationData = document.getElementById("stay_length").value; 
    var numOfBedsData = checkBeds();
    var locationData = document.getElementById("location").value;
    var hotelStarsData = document.getElementById("hotel_rating").value;
    var target = document.getElementById("cost_target");
    var text = "This will cost you $" 
    var sum=0;
    var numOfBedsValNum = new Array(0,1,1.5,2,2.5);
    var locationName = new Array("","usa","fra","can");
    var locationValue = new Array(0,900,1300,1100);
    var hotelStarsCost = new Array(0,0.30,0.60,0.90,1.20,1.50);
    var durationValNum = new Array(0,1,1.6,2.2,2.8,3.4,4,4.6)
    
    for(let i = 0; i <= 3; i++){
        if(locationData == locationName[i]){
            let locationCost = locationValue[i]
            for(let j = 0; j <= 5; j++){
                if(hotelStarsData == j){
                    let hotelCost = hotelStarsCost[j];
                    for(let n = 0; n <= 7; n++){
                        if(durationData == n){
                            let daysCost = durationValNum[n];
                            // [b] starts at 1 because there will be no 0 value in numOfBedsData
                            for(let b = 1; b <= 4; b++){
                                if(numOfBedsData == b){
                                    let bedCost = numOfBedsValNum[b];
                                    sum = (locationCost) * (hotelCost) * (daysCost) * (bedCost);
                                    target.innerText = text + sum.toFixed(2);
                                    return false;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
//to find what number of beds is selected
function checkBeds(){
    if(document.getElementById("num_of_beds1").checked == true){
        let numOfBedsData = 1;
        return numOfBedsData;
    }
    else if(document.getElementById("num_of_beds2").checked == true){
        let numOfBedsData = 2;
        return numOfBedsData;
    }
    else if(document.getElementById("num_of_beds3").checked == true){
        let numOfBedsData = 3;
        return numOfBedsData;
    }
    else if(document.getElementById("num_of_beds4").checked == true){
        let numOfBedsData = 4;
        return numOfBedsData;
    }
}