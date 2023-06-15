let peoplePromoName = ["Abdoulaye","Adeline","Camille","Cedric","Corentin","Jason","Jérôme","Lucie",
"Manon","Marius","Nathan","Nicolas","Ozlem","Pauline","Pietro","Robin","Rui","Sarah","Steve","Tim","Youssef","Clara","Bathsheba","Ilias",];




function random(peoplePromoName){
    for (i = peoplePromoName.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * i);
    [peoplePromoName[i], peoplePromoName[j]] = [peoplePromoName[j], peoplePromoName[i]];
  }
  return peoplePromoName;
}

peoplePromoName = random(peoplePromoName);

let newSection = document.createElement('section');

for (let val of peoplePromoName){
    let para = document.createElement('p');
    para.innerText = val;
    let backgroundcolor = generateRandomCode();
    para.style.backgroundColor = backgroundcolor;
    
    
    if (isTooDark(backgroundcolor)){
        para.style.color = "white";
    }else{
        para.style.color = "black";
    }
    newSection.appendChild(para);
}
document.getElementsByTagName("article")[0].appendChild(newSection);


function generateRandomCode() {
    var myRandomColor = '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
     return myRandomColor;
  }

function isTooDark(hexcolor){
    let r = parseInt(hexcolor.substring(1,3),16);
    let g = parseInt(hexcolor.substring(3,5),16);
    let b = parseInt(hexcolor.substring(5,7),16);
    let lum = ((r*299)+(g*587)+(b*114))/1000;

    return lum < 125;
}