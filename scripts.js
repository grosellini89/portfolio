let navbar = document.querySelector('#navbar')
let li= document.querySelectorAll(".nav-link")
console.log(li)

document.addEventListener('scroll', ()=> {

    if (window.pageYOffset > 100) {
        navbar.classList.add('shadow','bg-light')
        for(let a of li){
        a.classList.remove('text-white')
        a.classList.add('text-black-50')
    }
    } else {
        navbar.classList.remove('shadow','bg-light')
        for(let a of li){
            a.classList.remove('text-black-50')
            a.classList.add('text-white')
        }    
    }
    
} )
