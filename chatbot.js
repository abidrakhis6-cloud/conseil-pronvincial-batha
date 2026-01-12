function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.toLowerCase();
  const chat = document.getElementById("chat-messages");

  if (message.trim() === "") return;

  chat.innerHTML += `<p><strong>Vous :</strong> ${message}</p>`;

  let response = "Pouvez-vous préciser votre question ?";

  if (message.includes("secteurs")) {
    response =
      "Le Conseil provincial du Batha intervient dans le développement local, la gouvernance participative, la formation en leadership, les infrastructures sociales et l’appui aux communautés.";
  } 
  else if (message.includes("services")) {
    response =
      "Vous pouvez bénéficier des services en contactant le Conseil provincial, en participant aux consultations locales ou via les projets communautaires.";
  } 
  else if (message.includes("résultats")) {
    response =
      "Les résultats incluent la construction d’écoles, de centres de santé, le soutien aux projets communautaires et le renforcement de la participation citoyenne.";
  }

  chat.innerHTML += `<p><strong>Assistant :</strong> ${response}</p>`;
  chat.scrollTop = chat.scrollHeight;
  input.value = "";
}
