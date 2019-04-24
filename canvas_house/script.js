var draw = document.getElementById("mycanvas");
var ctx = draw.getContext("2d");

// ctx.fillStyle = "#0d124b";
//ctx.fillRect(0, 0, 1000, 400); //suorakaide

var grd = ctx.createLinearGradient(0, 400, 0, 0);
grd.addColorStop(0, "#04060f");
grd.addColorStop(1, "#122059");
ctx.fillStyle = grd;
ctx.fillRect(0, 0, 1000, 400);

ctx.fillStyle = "#093811";
ctx.fillRect(0, 400, 1000, 200); //suorakaide

ctx.fillStyle = "grey";
ctx.fillRect(400, 280, 400, 200); //suorakaide

ctx.fillStyle = "#cd1d2d";
ctx.fillRect(550, 340, 90, 140); //suorakaide

ctx.fillStyle = "#182a2e";
ctx.fillRect(450, 340, 80, 90); //suorakaide

ctx.lineWidth = 10; //ensin valitaan 'kynä'
ctx.moveTo(445, 340);
ctx.lineTo(535, 340);
ctx.stroke();

ctx.fillStyle = "#182a2e";
ctx.fillRect(670, 340, 80, 90); //suorakaide

ctx.lineWidth = 10; //ensin valitaan 'kynä'
ctx.moveTo(665, 340);
ctx.lineTo(755, 340);
ctx.stroke();

ctx.fillStyle = "#cd1d2d";
ctx.beginPath();
ctx.moveTo(350, 300);
ctx.lineTo(600, 100);
ctx.lineTo(850, 300);
ctx.fill(); // kolmio

ctx.fillStyle = "#cd1d2d";
ctx.fillRect(700, 160, 60, 100); //suorakaide

ctx.fillStyle = "yellow";
ctx.beginPath();
ctx.arc(140, 100, 30, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(200, 320);
ctx.lineTo(270, 240);
ctx.lineTo(340, 320);
ctx.fill(); // kolmio

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(180, 380);
ctx.lineTo(270, 280);
ctx.lineTo(360, 380);
ctx.fill(); // kolmio

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(160, 460);
ctx.lineTo(270, 320);
ctx.lineTo(380, 460);
ctx.fill(); // kolmio

ctx.fillStyle = "brown";
ctx.fillRect(250, 460, 40, 20); //suorakaide

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(750, 120, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(780, 100, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(870, 20, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(850, 70, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(780, 60, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "#c8d6d7";
ctx.beginPath();
ctx.arc(840, 20, 40, 0, 2*Math.PI);
ctx.fill(); //ympyrä

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(200, 320);
ctx.lineTo(270, 240);
ctx.lineTo(340, 320);
ctx.fill(); // kolmio

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(180, 380);
ctx.lineTo(270, 260);
ctx.lineTo(330, 380);
ctx.fill(); // kolmio

ctx.fillStyle = "green";
ctx.beginPath();
ctx.moveTo(190, 420);
ctx.lineTo(270, 320);
ctx.lineTo(190, 440);
ctx.fill(); // kolmio

ctx.fillStyle = "brown";
ctx.fillRect(80, 440, 40, 60); //suorakaide
