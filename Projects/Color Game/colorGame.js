var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modebtn = document.querySelectorAll(".mode");

init();

function init(){
	for(var i=0;i<modebtn.length; i++){
		modebtn[i].addEventListener("click",function(){
			modebtn[0].classList.remove("selected");
			modebtn[1].classList.remove("selected");
			this.classList.add("selected");
	
			this.textContent=="Easy" ? numSquares=3: numSquares=6;
			// if(this.textContent == "Easy"){
			// 	numSquares=3;
			// }else {
			// 	numSquares =6;
			// }
			reset();
	
		});
	}

	for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	

	// 	//add click listeners to squares
		squares[i].addEventListener("click", function() {
	// 		//grab color of clicked squares
			var clickedColor = this.style.background;
	// 		//compare color to pickedColor
			if(clickedColor === pickedColor) {
				messageDisplay.textContent="Correct";
				resetButton.textContent="Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent="Try Again";
			}
		});
	}
	reset();
}


function reset(){
	colors = generateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent="New Colors";
	messageDisplay.textContent="";
	for(var i=0; i<squares.length; i++){

		if(colors[i]){
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
	}else{
			squares[i].style.display="none";
		}
		
	}
	h1.style.background="steelblue";

}


// easybtn.addEventListener("click",function(){
// 	hardbtn.classList.remove("selected");
// 	easybtn.classList.add("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0; i<squares.length; i++){
// 		if(colors[i]){
// 			squares[i].style.background=colors[i];	
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardbtn.addEventListener("click",function(){
// 	easybtn.classList.remove("selected");
// 	hardbtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor=pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for(var i =0; i<squares.length; i++){
// 		// if(colors[i]){
// 			squares[i].style.background=colors[i];	
// 		// } else {
// 			squares[i].style.display = "block";
		
// 	}
	

// });

resetButton.addEventListener("click",function(){
	reset();
	// colors = generateRandomColors(numSquares);
	// pickedColor=pickColor();
	// colorDisplay.textContent = pickedColor;
	// this.textContent="New Colors";
	// messageDisplay.textContent="";
	// for(var i=0; i<squares.length; i++){
	// 	squares[i].style.background=colors[i];
	// }
	// h1.style.background="steelblue";

})

colorDisplay.textContent = pickedColor;

// for(var i = 0; i < squares.length; i++){
// 	// add initial colors to squares
	

// // 	//add click listeners to squares
// 	squares[i].addEventListener("click", function() {
// // 		//grab color of clicked squares
// 		var clickedColor = this.style.background;
// // 		//compare color to pickedColor
// 		if(clickedColor === pickedColor) {
// 			messageDisplay.textContent="Correct";
// 			resetButton.textContent="Play Again?";
// 			changeColors(clickedColor);
// 			h1.style.background = clickedColor;
// 		} else {
// 			this.style.background = "#232323";
// 			messageDisplay.textContent="Try Again";
// 		}
// 	});
// }

function changeColors(color){
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}

}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
function generateRandomColors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomColor());
	}
	return arr;	
}
function randomColor(){
	var r=Math.floor(Math.random() * 256);
	var g=Math.floor(Math.random() * 256);
	var b=Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

