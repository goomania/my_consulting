(function () {
  var menuToggle = document.querySelector(".menu-toggle");
  var navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navLinks.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  var yearNodes = document.querySelectorAll("[data-year]");
  var currentYear = new Date().getFullYear();
  var i;

  for (i = 0; i < yearNodes.length; i += 1) {
    yearNodes[i].textContent = currentYear;
  }

  var contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
      var nameField;
      var companyField;
      var emailField;
      var serviceField;
      var messageField;
      var to;
      var subject;
      var body;
      var mailto;
      var note;

      event.preventDefault();

      nameField = contactForm.elements.name;
      companyField = contactForm.elements.company;
      emailField = contactForm.elements.email;
      serviceField = contactForm.elements.service;
      messageField = contactForm.elements.message;

      to = "hello@aisprint.ai";
      subject = "AISprint inquiry from " + companyField.value;
      body = [
        "Name: " + nameField.value,
        "Company: " + companyField.value,
        "Email: " + emailField.value,
        "Service focus: " + serviceField.value,
        "",
        "Project details:",
        messageField.value
      ].join("\n");

      mailto = "mailto:" + encodeURIComponent(to) +
        "?subject=" + encodeURIComponent(subject) +
        "&body=" + encodeURIComponent(body);

      note = document.querySelector("[data-form-note]");
      if (note) {
        note.innerHTML = "Draft opened for <strong>" + to + "</strong>. Update the email address later if you use a different inbox.";
      }

      window.location.href = mailto;
    });
  }
}());
