
const btnMenu = document.querySelector('.btn-menu')
const navList = document.querySelector('.nav-list')
const overlay = document.querySelector('.overlay')
const logoBtnSection = document.querySelector('.logo-btn')

btnMenu.addEventListener('click', () => {
    if (navList.classList.contains('showMenu')) {
        navList.classList.remove('showMenu')
        btnMenu.classList.remove('closeBtn')
        navList.classList.remove('delay')
        overlay.classList.remove('active')
        logoBtnSection.classList.remove('addBorder')
        document.body.classList.remove('no-scroll')

    } else {
        navList.classList.add('showMenu')
        btnMenu.classList.add('closeBtn')
        navList.classList.add('delay')
        overlay.classList.add('active')
        logoBtnSection.classList.add('addBorder')
        document.body.classList.add('no-scroll')
    }
})

overlay.addEventListener('click', () => {
    navList.classList.remove('showMenu')
    btnMenu.classList.remove('closeBtn')
    navList.classList.remove('delay')
    overlay.classList.remove('active')
    logoBtnSection.classList.remove('addBorder')
    document.body.classList.remove('no-scroll')

})

/*FADE OUT EFFECT AMONG PAGES TRANSITION*/
/*
const links = document.querySelectorAll('.nav-bar a')

links.forEach(link =>{
    link.addEventListener('click', function(e){
        if (this.hostname === window.location.hostname) {
            e.preventDefault()
            document.body.classList.add('fade-out')

            setTimeout(() => {
                window.location = this.ref
            }, 400);
        }
    })
})
    */