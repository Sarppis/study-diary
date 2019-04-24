var whitekeys = document.getElementsByClassName("whitekey");

for (var i = 0; i < whitekeys.length; i++) {
  whitekeys [i].addEventListener("click", playWhiteNote);
}

function playWhiteNote(){
console.log("You pressed the white key");

var note = this.classList[0];
console.log(note);

var audio = document.getElementById("sound-"+note);
audio.currentTime=0;
audio.play();
}

var blackkeys = document.getElementsByClassName("blackkey");

for (var i = 0; i < blackkeys.length; i++) {
blackkeys [i].addEventListener("click", playWhiteNote);
}

function playBlackNote(){
console.log("You pressed the black key");

var note = this.classList[0];
console.log(note);

var audio = document.getElementById("sound-"+note);
audio.currentTime=0;
audio.play();
}
