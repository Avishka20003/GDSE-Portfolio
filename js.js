  document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
      const successMsg = document.getElementById("successMsg");

      if (name && email && message) {
        console.log("Form Submitted:", { name, email, message });
        successMsg.style.display = "block";
        this.reset();

        setTimeout(() => {
          successMsg.style.display = "none";
        }, 3000);
      }
    });