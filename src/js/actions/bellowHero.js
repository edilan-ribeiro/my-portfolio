function bellowHero() {

    const downChevronHero = document.getElementById('down-hero-chevron')

    downChevronHero.addEventListener('click', () =>
        
        document.documentElement.scrollTo ( {
            top: 880,
            scrollBehavior: 'smooth'
        })
    )
}

export {bellowHero}