window.addEventListener("DOMContentLoaded",function(){
    document.getElementById("video_select")
        .addEventListener("change",changeData);
});
function changeData(){
    const usaText = "Come and visit Los Angeles, California! There are plenty of sights to see including: Disneyland, Venice Beach, Universal Studios and many more!"
    const fraText = "Come and visit France! in France you will find world renowned restaurants, hundreds of medieval buildings and beautiful beaches to explore!"
    const canText = "Come and visit Vancouver, Canada! Some top sights include: Stanley Park & the Seawall, Science World and Granville Island!"
    var textTarget = document.getElementById("country_desc")
    var video = document.getElementById("video_select");
    var videoTarget = document.getElementById("video_target");
    videoTarget.src = video.value
    textTarget.innerText = video.name
    if(video.selectedIndex == 1){
        textTarget.innerText = usaText;
    }
    else if(video.selectedIndex == 2){
        textTarget.innerText = fraText;
    }
    else if(video.selectedIndex == 3){
        textTarget.innerText = canText;
    }
}