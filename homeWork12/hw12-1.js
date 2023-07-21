const getInfoButton = document.getElementById("getInfo");
const nextButton = document.getElementById("next");
const translateButton = document.getElementById("translate");

let showingCharacters;

getInfoButton.addEventListener("click", getInfo);
nextButton.addEventListener("click", showAllPlanets);
translateButton.addEventListener("click", translateToWookiee);

async function getInfo() {
  try {
    document.getElementById("getInfoOutput").innerHTML = "Loading...";
    const episodeId = parseInt(document.getElementById("input").value);

    if (episodeId >= 1 && episodeId <= 6) {
      document.body.className = `episode${episodeId}`;
      showingCharacters = true;
      document.getElementById("getPlanetsOutput").innerHTML = "";
      const resp = await fetch("https://swapi.dev/api/films/");
      const data = await resp.json();
      const episodeArr = data.results.filter(
        (item) => item.episode_id === episodeId
      );
      const episode = episodeArr[0];
      const dataArr = episode.characters;
      let result = "";

      for (const element of dataArr) {
        const tempResp = await fetch(element);
        const tempData = await tempResp.json();
        result += `<span style="color: white;">Ім'я персонажа: ${tempData.name}, рік народження: ${tempData.birth_year}, стать: ${tempData.gender}</span><br>`;
      }

      document.getElementById("getInfoOutput").innerHTML = result;
      document.getElementById("getPlanetsOutput").innerHTML = "";
    } else {
      alert("Номер епізоду повинен бути від 1 до 6.");
    }
  } catch (error) {
    console.log(error);
  }
}

async function showAllPlanets() {
  try {
    document.getElementById("getPlanetsOutput").innerHTML =
      "Loading planets...";
    document.body.className = "planets";
    showingCharacters = false;
    document.getElementById("getInfoOutput").innerHTML = "";
    showResults(1);
  } catch (error) {
    console.log(error);
  }
}

async function showResults(page) {
  let result = "";
  const resp = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  const data = await resp.json();
  const dataArr = data.results;

  for (const element of dataArr) {
    result += `<span style="color: white;">${element.name}</span><br>`;
  }

  document.getElementById("getPlanetsOutput").innerHTML = result;

  if (page > 1) {
    const backButton = document.createElement("button");
    backButton.id = "back";
    backButton.textContent = "Previous page";
    document.getElementById("getPlanetsOutput").appendChild(backButton);

    backButton.addEventListener("click", () => {
      showResults(page - 1);
    });
  }

  if (page < 6) {
    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.textContent = "Next page";
    document.getElementById("getPlanetsOutput").appendChild(nextButton);
    nextButton.addEventListener("click", () => {
      showResults(page + 1);
    });
  }
}
