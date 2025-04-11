

let main_video = document.querySelector("#main_video");
let play_btn = document.querySelector("#play_btn");
let play_icon = document.querySelector("#play_icon");




play_btn.addEventListener("click",function(){
    play_icon.classList.toggle("icon-play");
    play_icon.classList.toggle("icon-pause_icon");
    if (main_video.paused) {
        main_video.play();
    } else {
        main_video.pause();
    }
})


main_video.addEventListener("ended", function(){
    play_icon.classList.toggle("icon-play");
    play_icon.classList.toggle("icon-pause_icon");
})





