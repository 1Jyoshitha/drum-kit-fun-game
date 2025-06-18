
var a = document.querySelectorAll(".drum");
a.forEach(b=>{b.addEventListener("click",handleclick);});
function handleclick(){
    var x = this.innerHTML;
    drum(x);
    change(x);
}

document.addEventListener("keypress",function(event){
    drum(event.key);
    change(event.key);
})


function drum(key){
    switch (key) {
        case "w":
            var au = new Audio("/sounds/crash.mp3");
            au.play();
            break;
        case "a":
            var au = new Audio("/sounds/kick-bass.mp3");
            au.play();
            break;
        case "s":
            var au = new Audio("/sounds/snare.mp3");
            au.play();
            break;
        case "d":
            var au = new Audio("/sounds/tom-1.mp3");
            au.play();
            break;

        case "j":
            var au = new Audio("/sounds/tom-2.mp3");
            au.play();
            break;
        case "k":
            var au = new Audio("/sounds/tom-3.mp3");
            au.play();
            break;
        case "l":
            var au = new Audio("/sounds/tom-4.mp3");
            au.play();
            break;
        default:
            console.log(key);
            break;
    }
}

function change(k){
    var xyz = document.querySelector("."+k);
    xyz.classList.add("pressed");
    setTimeout(function(){xyz.classList.remove("pressed")},100);
}

