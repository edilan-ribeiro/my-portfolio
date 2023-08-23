function sectionTransition() {
    const topSides = document.querySelectorAll('.top-side')
    const rightSides = document.querySelectorAll('.right-side')
    const leftSides = document.querySelectorAll('.left-side')
    const projects = document.querySelectorAll('.project')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {

            if (entry.isIntersecting) {
                let animationClass = ''

                if (entry.target.classList.contains('top-side')) {
                    animationClass = 'slide-in-top'
                } else if (entry.target.classList.contains('right-side')) {
                    animationClass = 'slide-in-right'
                } else if (entry.target.classList.contains('left-side')) {
                    animationClass = 'slide-in-left'
                } else if (entry.target.classList.contains('project')) {
                    animationClass = 'roll-in-blurred-top'
                }

                entry.target.classList.add(animationClass)

                setTimeout(() => {
                    entry.target.classList.remove('hide')
                }, 200)

                entry.target.addEventListener('animationend', () => {
                    setTimeout(() => {
                      entry.target.classList.remove(animationClass);
                      observer.unobserve(entry.target);
                    }, 600);
                  });
            }
        })
    })

    topSides.forEach(topSide => observer.observe(topSide))
    rightSides.forEach(rightSide => observer.observe(rightSide))
    leftSides.forEach(leftSide => observer.observe(leftSide))
    projects.forEach(project => observer.observe(project))

}

export {sectionTransition}