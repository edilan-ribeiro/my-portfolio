const buttonBackToTop = document.getElementById('back-to-top')

 window.onscroll = function(){buttonAppear()}
 
 function buttonAppear() {
     if (document.documentElement.scrollTop > 130) {
        buttonBackToTop.classList.remove('hide-btn')
        } else {
            buttonBackToTop.classList.add('hide-btn')
        }
 }


buttonBackToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        scrollBehavior: 'smooth'
    })
  
})