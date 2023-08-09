function backgroundSlideshow() {

    let images = [
        './../../src/images/backgrounds/clouds1.jpg',
        './../../src/images/backgrounds/space1.jpg',
        './../../src/images/backgrounds/fractal1.jpg',
        './../../src/images/backgrounds/sky1.jpg',
        './../../src/images/backgrounds/space2.jpg',
                    
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