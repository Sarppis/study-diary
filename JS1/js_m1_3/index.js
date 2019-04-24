function fetchJSONfile(callback){
let httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   let data = JSON.parse(httpRequest.responseText);
   if (callback) callback(data);
 }
}

httpRequest.open(“GET”, “colors.json”, true);
httpRequest.send();
};

function changeColor() {
fetchJSONfile(function(colors) {
let randomItem = colors [Math.floor(Math.random() * colors.length)];document.getElementById(‘demo’).innerHTML = “New background color is ” + randomItem.name;

document.body.style.background = randomItem.hex;

});

};
