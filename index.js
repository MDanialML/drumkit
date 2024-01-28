//it will listen to button press and play relevent sound
for (var index = 0; index < 7; index++) {
    
    document.querySelectorAll(".drum")[index].addEventListener("click",function(){
        var innerWord = this.innerHTML;
        makeSound(innerWord);

        addAnimation(innerWord);
       
    });
    
}

function makeSound(key){
     switch (key) {
            case "w":
                var audio = new Audio("./sounds/tom-1.mp3");
                audio.play();
                break;
            case "a":
                var audio = new Audio("./sounds/tom-2.mp3");
                audio.play();
                break;
            case "s":
                var audio = new Audio("./sounds/tom-3.mp3");
                audio.play();
                break;
            case "d":
                var audio = new Audio("./sounds/tom-4.mp3");
                audio.play();
                break;
            case "j":
                var audio = new Audio("./sounds/snare.mp3");
                audio.play();
                break;
            case "k":
                var audio = new Audio("./sounds/kick-bass.mp3");
                audio.play();
                break;
            case "l":
                var audio = new Audio("./sounds/crash.mp3");
                audio.play();
                break;

            default:
                break;
        }
        
}


//it will listen to any key press and play relevent sound
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
});


//button to add animation

function addAnimation(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){activeButton.classList.remove("pressed")},100);
}


