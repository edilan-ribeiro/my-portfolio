function mobileMenuOnOff() {

    
    let mobileCheckbox = document.getElementById("menu-hamburguer")
    let mobileMenu = document.getElementById("menu-links")
    
    window.onload = function(){
        mobileCheckbox.addEventListener("click", () => {

            if (mobileCheckbox.checked && window.innerWidth <= 930) {
                mobileMenu.style.display = "block"
            } else {
            setTimeout(() => {
                mobileMenu.style.display = "none"
                }, 440)
            }
        })
    }
      

    window.addEventListener("resize", () => {
        if (window.innerWidth > 930) {
            mobileMenu.style.display = "flex";
          } else if (window.innerWidth <= 930 && mobileCheckbox.checked) {
            mobileMenu.style.display = "block";
          } else if (window.innerWidth <= 930 && !mobileCheckbox.checked) {
            mobileMenu.style.display = "none";
          }

    })

}

export { mobileMenuOnOff }
