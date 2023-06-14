let important = document.getElementsByClassName('important');
for (let val of important){
    val.title = "This is an important item";
}

let image = document.querySelectorAll("img");
for (let val of image){
    if (val.className !== "important"){
        val.style.display = "none";
    }
}

let para = document.querySelectorAll('p');
for (let val of para){
    console.log("Content: "+val.innerText);
    
    if (val.className !== ""){
        console.log("Class: "+val.className)
    }
    else {
        val.style.color = generateRandomCode();
    }
}

function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
     return myRandomColor;
  }