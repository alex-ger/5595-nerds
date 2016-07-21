var link = document.querySelector(".btn-contact-us");

      var popup = document.querySelector(".popup-form");
      var close = popup.querySelector(".btn-popup-close");

      var login = popup.querySelector("[name=name]");

      link.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-form-close");
        popup.classList.add("popup-form-show");
        login.focus();
      });

      close.addEventListener("click", function(event) {
        event.preventDefault();
        popup.classList.remove("popup-form-show");
        popup.classList.add("popup-form-close");
      });
