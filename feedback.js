document.getElementById("feedbackForm").addEventListener("submit", function (event) {
    event.preventDefault();
  
    // Basic Validation
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields!");
      return;
    }
  
    // Show Modal
    const modal = document.getElementById("thankYouModal");
    modal.classList.add("show");
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  
    // Clear Form Fields
    document.getElementById("feedbackForm").reset();
  });
  
  function closeModal() {
    const modal = document.getElementById("thankYouModal");
    modal.classList.remove("show");
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  }
  