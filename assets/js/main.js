/* Mostrar menu */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
    
    // Validate that variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* Remover menu no mobile */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* Rolar as seções */
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Mostrar scroll top */ 


/* Tema light/dark */ 


/* Tamanho e impressão pdf */ 


/* Remover o tamanho depois do download */ 


/* Gerar o pdf */ 

// PDF área


// HTML/PDF opções


// Função para chamar as opções de areaCv e Html2Pdf 


// 3 funções são chamadas quando o botão é clicado: 

    // 01. A class .scale-cv é adicionada ao corpo, onde é reduzida o tamanho dos elementos

    // 02. O pdf é gerado

    // 03. A classe .scale-cv é removida do corpo depois de 5 segundos para voltar ao tamanho normal
