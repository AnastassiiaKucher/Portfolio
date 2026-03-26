gsap.from(".black_menu", {
  duration: 2,
  delay: 2,
  y: "10vw",
  ease: "Bounce.easeOut",
  opacity: 0,
});

const form = document.getElementById("contact-form");
const button = document.getElementById("submit-btn");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // ❗ убирает переход на другую страницу

  button.innerText = "Sending...";
  button.disabled = true;

  const data = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      button.innerText = "✓ Sent!";
      button.style.background = "#2ecc71"; // зелёная кнопка
      form.reset();
    } else {
      button.innerText = "Error";
      button.style.background = "#e74c3c";
      button.disabled = false;
    }
  } catch (error) {
    button.innerText = "Network error";
    button.style.background = "#e74c3c";
    button.disabled = false;
  }
});
