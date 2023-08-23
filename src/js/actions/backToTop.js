function backToTop() {
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
    scrollToTop();
  });
  
  function scrollToTop() {
    const c = document.documentElement.scrollTop || document.body.scrollTop;
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 10);
    }
  }

}

export {backToTop}