//Javascript code, not the most clear, but it works


var nbSquares = 6;
var colors= generateColors(nbSquares);
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay = document.getElementById("display");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");


//easy mode
easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected");
  easyBtn.classList.add("selected");
  nbSquares = 3;
  colors = generateColors(nbSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    if(colors[i]){
    squares[i].style.background = colors[i];
  }
  else{
    squares[i].style.display = "none";
  }
  }
});

//hard mode
hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected");
  hardBtn.classList.add("selected");
  nbSquares = 6;
  colors = generateColors(nbSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(var i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";
  }
});


//reset
resetBtn.addEventListener("click", function(){
  //generate new random colors
  colors = generateColors(nbSquares);
  //Find new correct color
  pickedColor=pickColor();
  //colorDisplay change
  colorDisplay.textContent = pickedColor;
  this.textContent = "New Colors";
  //change color of squares
  for(var i=0; i<squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue";
  messageDisplay.textContent="";
});

colorDisplay.textContent= pickedColor;



for(var i = 0; i<squares.length; i++){
  //add initial colors to squares
  squares[i].style.background = colors[i];
  //add eventlisteners
  squares[i].addEventListener("click", function(){
    var clickedColor = this.style.background;
    if(clickedColor === pickedColor){
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = clickedColor;
      resetBtn.textContent = "Play Again?";
    }
    else{
      this.style.background= "#232323";
      messageDisplay.textContent = "Try again";
    }
  });
}

//methods

function changeColors(color){
  for(var j=0; j<squares.length; j++){
    //put all colors to correct answer
    squares[j].style.background = color;

  }
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateColors(num){
  //make array, and add num values to array
  var arr = [];

  for(var i=0; i<num; i++){
    //random colors
    arr.push(randomColors());
  }

  return arr;
}

function randomColors(){
  var r = Math.floor(Math.random()*256);
  var g = Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb("+r+", "+g+", "+b+")";
}
