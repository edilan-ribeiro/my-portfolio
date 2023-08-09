function backgroundSlideshow() {

    let images = [
        'https://github.com/edilan-ribeiro/my-portfolio/blob/main/src/images/backgrounds/clouds1.jpg',
        'https://github.com/edilan-ribeiro/my-portfolio/blob/main/src/images/backgrounds/fractal1.jpg',
        'https://github.com/edilan-ribeiro/my-portfolio/blob/main/src/images/backgrounds/sky1.jpg',
        'https://github.com/edilan-ribeiro/my-portfolio/blob/main/src/images/backgrounds/space1.jpg',
        'https://github.com/edilan-ribeiro/my-portfolio/blob/main/src/images/backgrounds/space2.jpg',                    
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