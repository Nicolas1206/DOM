let headTitle = document.title;
console.log(headTitle);

headTitle = "Modifying the DOM";
console.log(headTitle);

let body = document.getElementsByTagName("body")[0];
for (let val of body.children){
    console.log(val);
}

function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
     return myRandomColor;
  }
body.style.backgroundColor = generateRandomCode();