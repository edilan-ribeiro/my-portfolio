function backgroundSlideshow() {

    let images = [
        './../images/backgrounds/clouds1.jpg',
        './../images/backgrounds/space1.jpg',
        './../images/backgrounds/fractal1.jpg',
        './../images/backgrounds/sky1.jpg',
        './../images/backgrounds/space2.jpg',                    
    ]

    let imgChangeTime = 15000
    let heroSection = document.getElementById('hero')

    let currentIndex = 0;

    function bgChange() {
        heroSection.style.backgroundImage = `url(${images[currentIndex]})`

        currentIndex = (currentIndex + 1) % images.length

        setTimeout(bgChange, imgChangeTime)
    }

    window.onload = bgChange;

}

export {backgroundSlideshow}