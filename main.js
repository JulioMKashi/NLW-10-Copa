function createGame(player1, hour, player2) {
  return `
<li>
        <img src="./assets/icon-${player1}.svg" alt="bandeira do ${player1}" />
        <strong>${hour}</strong>
        <img src="./assets/icon-${player2}.svg" alt="bandeira de ${player2}" />
      </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  return `
  <div class="card" style="animation-delay: ${delay}s">
    <h2> ${date} <span>${day}</span> </h2>
    <ul>
    ${games}
    </ul>
  </div>
  `
}

document.querySelector("#cards").innerHTML = 
  createCard(
    "24/11",
    "quinta",
    createGame("portugal", "13:00", "ghana") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard("24/11", "quinta", createGame("brazil", "13:00", "switzerland"))+
  createCard("24/11", "quinta", createGame("brazil", "16:00", "cameroon"));
