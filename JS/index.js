const burger = document.querySelector('.nav_mobile')
const listNav = document.querySelector('.list__nav')
const listActiv = document.querySelector('.nav_active')


function burgerMeny () {
    listNav.classList.toggle('list__nav')
    listNav.classList.toggle('nav_active')
    burger.classList.toggle('nav_mibile_rotate')
    


    

}

burger.addEventListener('click', burgerMeny)