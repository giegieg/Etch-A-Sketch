const divMain = document.querySelector(".container");
let box;
let tinyBox; 
let tinyBox2;
let n=0;
grayLvl1 = "rgb(220, 220, 220)";
grayLvl2 = "rgb(200, 200, 200)";
grayLvl3 = "rgb(180, 180, 180)";
grayLvl4 = "rgb(160, 160, 160)";
grayLvl5 = "rgb(140, 140, 140)";
grayLvl6 = "rgb(120, 120, 120)";
grayLvl7 = "rgb(100, 100, 100)";
grayLvl8 = "rgb(80, 80, 80)";
grayLvl9 = "rgb(60, 60, 60)";
grayLvl10 = "rgb(40, 40, 40)";
let colorMode = "rgbParty";
const toggleButton = document.querySelector("#secondButton");
const clearButton = document.querySelector("#firstButton");
const createNewButton = document.querySelector("#thirdButton");

divMain.style.border = "1px dotted gray";
divMain.style.height = "750px";
divMain.style.width = "750px";
divMain.style.display = "flex";
divMain.style.flexDirection = "column";


function createBoxes(n) {
  for(a=0; a<n; a++) {
    box = document.createElement("div");
    box.style.height = "100%";
    box.style.width = "100%";
    box.style.display = "flex";
    box.style.flexDirection = "row"; 

    for(b=0; b<n; b++) {
      tinyBox = document.createElement("div");
      tinyBox.style.height = "100%";
      tinyBox.style.width = "100%";
      box.appendChild(tinyBox);
      tinyBox.classList.add("squares");
    }
  divMain.appendChild(box);
  }
}

function toClassSquares() {
  tinyBox2 = document.querySelectorAll(".squares");
}

function hover() {

  tinyBox2.forEach(maws => maws.addEventListener("mouseover", (e) => {
    if (colorMode == "grayScale") {
      switch (e.target.style.backgroundColor) {
      case "":
      e.target.style.backgroundColor = grayLvl1;
      break;
      case grayLvl1:
      e.target.style.backgroundColor = grayLvl2;
      break;
      case grayLvl2:
      e.target.style.backgroundColor = grayLvl3;
      break;
      case grayLvl3:
      e.target.style.backgroundColor = grayLvl4;
      break;
      case grayLvl4:
      e.target.style.backgroundColor = grayLvl5;
      break;
      case grayLvl5:
      e.target.style.backgroundColor = grayLvl6;
      break;
      case grayLvl6:
      e.target.style.backgroundColor = grayLvl7;
      break;
      case grayLvl7:
      e.target.style.backgroundColor = grayLvl8;
      break;
      case grayLvl8:
      e.target.style.backgroundColor = grayLvl9;
      break;
      case grayLvl9:
      e.target.style.backgroundColor = grayLvl10;
      break;
      case grayLvl10:
      e.target.style.backgroundColor = grayLvl10;
      break;
      default:
      e.target.style.backgroundColor = grayLvl1;
      break;
      }
    }
    else if (colorMode == "rgbParty") {
      e.target.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    }

  }));

}

function randomColor() {
  let col = Math.round(Math.random()*255);
  return col;
}

createBoxes(40);
toClassSquares();
hover();

clearButton.addEventListener("click", function() {
  if(divMain.hasChildNodes()) {
    for(i=divMain.childNodes.length; i>0; i--) {
      divMain.removeChild(divMain.childNodes[0]);
    }
  }
  if (n==0 || n==null) {
    createBoxes(40);
  }
  else {
    createBoxes(n);
  }
  toClassSquares();
  hover();
});

toggleButton.addEventListener("click", function() {
  if (colorMode == "grayScale") {
    toggleButton.textContent = "Grayscale";
    colorMode = "rgbParty";
  }
  else if (colorMode == "rgbParty") {
    toggleButton.textContent = "Rainbow Party";
    colorMode = "grayScale";
  }

});

createNewButton.addEventListener("click", function() {

  while(true) {
    n = prompt("How many squares per side do you want?", "2-160");
    if (n>=2 && n<=160) {
      break;
    }
    else if (n==null) {
      return;
    }
    else {
      alert("Invalid input!");
    }
  }

  if(divMain.hasChildNodes()) {
    for(i=divMain.childNodes.length; i>0; i--) {
      divMain.removeChild(divMain.childNodes[0]);
      console.log(divMain.childNodes.length);
    }
  }
  createBoxes(n);
  toClassSquares();
  hover();

})