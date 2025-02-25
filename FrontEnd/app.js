document.addEventListener("DOMContentLoaded", async () => {
    const pokemonData = {
        bulbasaur: { name: "Bulbasaur", info: "A Grass/Poison type Pokemon<br><br>Weakness:<br>Fire, Flying, Psychic, Ice", img: "bulbasaur.jpg" },
        charmander: { name: "Charmander", info: "A Fire type Pokemon<br><br>Weakness:<br>Ground, Rock, Water", img: "charmander.jpg" },
        squirtle: { name: "Squirtle", info: "A Water type Pokemon<br><br>Weakness:<br>Grass, Electric,", img: "squirtle.jpg" }
    };

    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupInfo = document.getElementById("popup-info");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.querySelector(".close");

    document.querySelectorAll(".box").forEach((box) => {
        box.addEventListener("click", () => {
            const id = box.id;
            const data = pokemonData[id];

            popupTitle.textContent = data.name;
            popupInfo.innerHTML = data.info;
            popupImage.src = data.img;

            popup.style.display = "flex";
        });
    });

    popup.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });

    async function fetchData() {
        try {
            const response = await fetch('/api/message');
            const data = await response.json();
            console.log("Backend says:", data.message);
        } catch (error) {
            console.error("Error fetching API:", error);
        }
    }

    fetchData();
});
