// TravelTails Main Script
document.addEventListener("DOMContentLoaded", () => {
 
  const navToggle = document.getElementById("slick_nav_menu");
  const navContainer = document.getElementById("nav_container");

  if (navToggle && navContainer) {
    navToggle.addEventListener("click", () => {
      navContainer.classList.toggle("active");
      navToggle.setAttribute(
        "aria-expanded",
        navContainer.classList.contains("active")
      );
    });
  }

  // Newsletter Form Validation
  const newsletterForm = document.querySelector(".newsletter_box");
  const newsletterEmail = document.getElementById("newsletter_email");
  const newsletterMsg = document.getElementById("newsletter_message");

  if (newsletterForm && newsletterEmail && newsletterMsg) {
    newsletterForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = newsletterEmail.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) {
        showMessage(newsletterMsg, "❌ Please enter your email address.", "error");
        return;
      }
      if (!emailRegex.test(email)) {
        showMessage(newsletterMsg, "⚠️ Please enter a valid email address.", "error");
        return;
      }

      showMessage(newsletterMsg, "⏳ Submitting...", "loading");

      setTimeout(() => {
        showMessage(newsletterMsg, "✅ Thank you for signing up! You’ll hear from us soon.", "success");
        newsletterForm.reset();
      }, 1000);
    });
  }

  // Trip Form Validation
  const tripForm = document.getElementById("trip_form");
  const tripMsg = document.getElementById("trip_message");

  if (tripForm && tripMsg) {
    tripForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("name")?.value.trim();
      const email = document.getElementById("email")?.value.trim();
      const destination = document.getElementById("destination")?.value.trim();
      const dates = document.getElementById("dates")?.value.trim();
      const pets = document.getElementById("pets")?.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !destination) {
        showMessage(tripMsg, "⚠️ Please fill out all required fields (Name, Email, Destination).", "error");
        return;
      }
      if (!emailRegex.test(email)) {
        showMessage(tripMsg, "❌ Please enter a valid email address.", "error");
        return;
      }

      if (pets && (isNaN(pets) || pets < 0 || pets > 10)) {
        showMessage(tripMsg, "⚠️ Number of pets must be between 0 and 10.", "error");
        return;
      }

      showMessage(tripMsg, "⏳ Submitting your request...", "loading");

      setTimeout(() => {
        showMessage(tripMsg, "✅ Thank you! Your trip request has been submitted. We'll contact you soon.", "success");
        tripForm.reset();
      }, 1200);
    });
  }

  // Contact Form Validation
  const contactForm = document.getElementById("mainpage_contact_form");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("mainpage_user_name")?.value.trim();
      const email = document.getElementById("mainpage_user_email")?.value.trim();
      const subject = document.getElementById("mainpage_user_subject")?.value.trim();
      const message = document.getElementById("mainpage_user_message")?.value.trim();

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!name || !email || !subject || !message) {
        alert("⚠️ Please fill in all required fields before submitting.");
        return;
      }

      if (!emailRegex.test(email)) {
        alert("❌ Please enter a valid email address.");
        return;
      }

      // Simulate async submission
      alert("⏳ Sending your message...");

      setTimeout(() => {
        alert("✅ Thank you for contacting TravelTails UK! We'll reply soon.");
        contactForm.reset();
      }, 1000);
    });
  }


  // Membership Registration Form Validation
  const regForm = document.getElementById("membership_registration_form");
  const regMessage = document.getElementById("reg_message");
  
  if (regForm && regMessage) {
    regForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("reg_name")?.value.trim();
        const email = document.getElementById("reg_email")?.value.trim();
        const address = document.getElementById("reg_address")?.value.trim();
        const comments = document.getElementById("reg_comments")?.value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || name.length < 2) {
            showMessage(regMessage, "⚠️ Please enter your full name (at least 2 characters).", "error");
            return;
        }

        if (!email) {
            showMessage(regMessage, "⚠️ Please enter your email address.", "error");
            return;
        }

        if (!emailRegex.test(email)) {
            showMessage(regMessage, "❌ Please enter a valid email address.", "error");
            return;
        }

        if (address && address.length < 5) {
            showMessage(regMessage, "⚠️ Please enter a complete address or leave it blank.", "error");
            return;
        }

        showMessage(regMessage, "⏳ Processing your registration...", "loading");

        setTimeout(() => {
          showMessage(regMessage, "✅ Registration successful! Welcome to TravelTails Club. Check your email for confirmation.", "success");
          regForm.reset();
        }, 1500);
    });
  }
  

  // Utility Function 
  function showMessage(element, text, type) {
    if (!element) return;
    element.textContent = text;
    element.className = type;
    element.classList.remove("hidden");

    if (type === "success") {
      setTimeout(() => {
        element.classList.add("hidden");
        element.textContent = "";
      }, 5000);
    }
  }
});
