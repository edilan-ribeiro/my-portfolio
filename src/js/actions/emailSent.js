function emailSent() {

    window.addEventListener("load", function() {

      function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
      }

        const form = document.getElementById('contact-form');
        

        form.addEventListener("submit", function(e) {
          
          e.preventDefault();

         

          const data = new FormData(form);
          const action = e.target.action;
          const email = document.getElementById('email').value;

          if (!validateEmail(email)) {
            window.alert('Email inválido')
             return;
           }

          fetch(action, {
            method: 'POST',
            body: data,
          })

          .then(() => {
            
            document.getElementById('hide-form').classList.add('hide')
            document.getElementById('form-sent').classList.remove('hide')
                 
          })
        });
      });

}

export {emailSent}