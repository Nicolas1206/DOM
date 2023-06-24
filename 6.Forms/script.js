let input = document.querySelectorAll('input')
let span1 = document.getElementById('display-firstname')
let span2 = document.getElementById('a-hard-truth')
let password = document.getElementById('pwd')
let passwordConfirm = document.getElementById('pwd-confirm')
let toggleDarkMode = document.getElementById('toggle-darkmode')
let selectAll = document.querySelectorAll('*')
for (let elem of input){
    elem.addEventListener('keyup', (e) =>{
        if (elem.id == 'firstname'){
            span1.textContent = elem.value
        }else if (elem.id ='age'){
            if (elem.value >= 18){
                span2.style.visibility = 'visible'
            }else{
                span2.style.visibility = 'hidden'
            }
        }
    })
}

/**if (elem.id == 'pwd'){
    if (password.value.length < 6 && password.value.length >=0){
        password.style.backgroundColor = 'red'
    }else{
        password.style.color = 'black'
    }
}**/

password.addEventListener('keyup', () =>{
    if (password.value.length < 6 && password.value.length >=0){
        password.style.backgroundColor = 'red'
    }else{
        password.style.backgroundColor = 'white'
    }
})

passwordConfirm.addEventListener('keyup', () =>{
    if (passwordConfirm.value != password.value){
        passwordConfirm.style.background = 'red'
    }else{
        passwordConfirm.style.background = 'white'
    }
})

toggleDarkMode.addEventListener('change', () =>{
    if (toggleDarkMode.value === "dark"){
        document.body.style.backgroundColor = "black"
        for (let elem of selectAll){
            elem.style.color = 'white'
        }
    }
    if (toggleDarkMode.value === "light"){
        document.body.style.backgroundColor = "white"
        for (let elem of selectAll){
            elem.style.color = 'black'
        }
        let header = document.querySelector('header h1');
        let footer = document.querySelector('footer');
        header.style.color = 'white';
        footer.style.color = 'white';
    }
})

/**toggleDarkMode.addEventListener('change', () =>{
    if (toggleDarkMode.value === "dark"){
        document.body.style.filter = 'invert(1)'
        for (let elem of selectAll){
            elem.style.filter = 'invert(1)'
        }
    }
    if (toggleDarkMode.value === "light"){
        document.body.style.filter = "invert(0)"
        for (let elem of selectAll){
            elem.style.filter = 'invert(0)'
        }
    }
}) */