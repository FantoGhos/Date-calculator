function calculateDays() {
  const inputDate = document.getElementById("eventDate").value;
  const resultDiv = document.getElementById("result");

  if (!inputDate) {
      resultDiv.textContent = "Будь ласка, виберіть дату.";
      return;
  }

  const currentDate = new Date();
  const eventDate = new Date(inputDate);
  const diffTime = eventDate - currentDate;
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

  if (diffDays >= 0) {
      resultDiv.textContent = `До дати ще ${diffDays} днів.`;
  } else {
      resultDiv.textContent = `Ця дата була ${-diffDays} днів тому.`;
  }
}