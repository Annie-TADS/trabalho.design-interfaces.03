import gears from "../json/gears.json" assert {type: "json"};
import characters from "../json/characters.json" assert {type: "json"};

const data = gears.map((gear) => ({ ...gear, used_by: characters.filter((character) => gear.used_by.includes(character.name)) }));

const gearList = document.getElementById('gear_list');

data.forEach((e) => {
    const card = document.createElement("li");
    card.classList.add("card");
    card.classList.add("gear_card");
    const id = e.name.toLowerCase().replace(/\\s/gi, "-");

    card.innerHTML = `<button class="card_button" data-toggle="collapse" data-target="#${id}" aria-expanded="true"
             aria-controls="${id}">
             <div id="head-${id}">
                 <div class="card_title">
                    <h1 class="title"> ${e.name} </h1>
                
                    <div class="title_images">
                    ${e.used_by.map((user) => (
        `<img class="list-img" loading="lazy" src="${user.icon}"></img>`
    )).join("")}
                    </div>

             </div>
     </div>
                 </button>

     <div id="${id}" class="collapse" aria-labelledby="head " data-parent="#accordion">
         <div class="card_body">
                <div class="stats">
                <table class="table table-dark">
                <tbody>
                            <tr>
                                <th scope="row">Dash</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.dash ? "full" : ""}"></td>`)).join("") }
                            </tr>
                            <tr>
                                <th scope="row">Limit</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.limit ? "full" : ""}"></td>`)).join("")}
                            </tr>
                            <tr>
                                <th scope="row">Power</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.power ? "full" : ""}"></td>`)).join("") }
                            </tr>
                            <tr>
                                <th scope="row">Cornering</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.cornering ? "full" : ""}"></td>`)).join("") }
                            </tr>
                        </tbody>    
                    </table>
                </div>
                <div class="description">
                    ${e.description}
                </div>
         </div>`

    // e.used_by.forEach((user) => {
    //     const imagenode = document.createElement("img");
    //     imagenode.src = user.icon;
    //     imagenode.classList.add('list-img');
    //     cardTitleText.appendChild(imagenode);
    // })



    gearList.appendChild(card);
})


const modal = document.getElementById("pictureModal");
const modalImg = document.getElementById("imgModal");
const caption = document.getElementById("caption");
const modalOnClick = (e) => {
    const img = e.target; 
    

    modal.style.display = "block";
    modalImg.src = img.src;
    caption.innerHTML = img.alt;
}

const modalImages = document.getElementsByClassName("modal-onclick");
[...modalImages].map((img) => {
    console.log(img);
  img.addEventListener("click", modalOnClick);  
})

const span = document.getElementsByClassName("close")[0];
span.onclick = function () {
    modal.style.display = "none";
}