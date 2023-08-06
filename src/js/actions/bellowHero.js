function bellowHero() {

    const downChevronHero = document.getElementById('down-hero-chevron')

    downChevronHero.addEventListener('click', () =>{
    
        const sectionAboutMe = document.getElementById('about-me')

        sectionAboutMe.scrollIntoView()

    })
}

export {bellowHero}