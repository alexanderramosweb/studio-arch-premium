const form = document.getElementById("contactForm") as HTMLFormElement;

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  const submitButton = form.querySelector("button") as HTMLButtonElement;

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    alert(result.message);

    form.reset();
  } catch (error) {
    console.error(error);

    alert("Ocurrió un error al enviar el formulario");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = "Solicitar presentación";
  }
});
