const oList = document.querySelector("ol");
const lastLi = oList.lastElementChild;
oList.prepend(lastLi);

const sections = document.querySelectorAll('section');
let temp = sections[2].children[0].children[0].textContent;
sections[2].children[0].children[0].textContent = sections[1].children[0].textContent;
sections[1].children[0].textContent = temp;

sections[2].remove();

