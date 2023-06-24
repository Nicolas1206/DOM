const _initTime = Date.now()
const newSquare = document.querySelector('.displayedsquare-wrapper');
const logsContainer = document.querySelector('ul');
/**
 * 
 * @returns 
 */
function generateRandomCode() {
  return '#'+Math.floor(Math.random()*16777215).toString(16).padStart(6,0);
}

/**
 * 
 * @returns 
 */
function getElapsedTime(){
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}
/**
 * 
 * @param {*} e 
 */
function clickOnSquare(e){
  const newDisplayedSquare = document.createElement('div');
  newDisplayedSquare.classList.add('displayedsquare');
  newDisplayedSquare.classList.add(e.target.classList[1]);

  newDisplayedSquare.onclick = function(e){
    alert(e.target.classList[1])
  }
  newSquare.appendChild(newDisplayedSquare);
  let logs = document.createElement('li');
  logs.textContent = "Created at: " + getElapsedTime() + " and his color is: " + e.target.classList[1];
  logsContainer.appendChild(logs);
}

const actionsquares = document.querySelectorAll('.actionsquare')
for(let actionsquare of actionsquares){
  actionsquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener('keyup', (event) =>{
  if (event.code === "Space"){
    document.body.style.backgroundColor = generateRandomCode();
  }else if (event.code === "KeyS"){
    const newSquare = document.querySelectorAll('.displayedsquare')
    for (let elem of newSquare){
      elem.remove();
    }
  }else if (event.code === "KeyL"){
    const newList = document.querySelectorAll('li');
    for (let elem of newList){
      elem.remove();
    }
  }
})

