function getGOTCard(gotObj) {
  let gotCard = document.createElement("div");
  gotCard.className = "box";

  gotCard.innerHTML = ` 
    <div class="flex">
    <img src="${gotObj.image}" class="got-image"/>
    <h3>${gotObj.name}</h3>
    </div>
    <p>${gotObj.description}</p>
    <button class="learn-more-btn">Learn More!</button>
    `;

  return gotCard;
}

let gotContainer = document.getElementById("gotContainer");

for (let house of got.houses) {
  for (let people of house.people) {
    let gotCard = getGOTCard(people);
    gotContainer.append(gotCard);
  }
}
