import gears from "../json/gears.json" assert {type: "json"};
import characters from "../json/characters.json" assert {type: "json"};

const data = gears.map((gear) => ({ ...gear, used_by: characters.filter((character) => gear.used_by.includes(character.name)) }));

const gearList = document.getElementById('gear_list');

// <div id="accordion">
//     <div class="card">
//         <button class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true"
//             aria-controls="collapseOne">
//             <div class="card-header" id="headingOne">
//                 <h5 class="mb-0">
//                     Collapsible Group Item #1
//             </h5>
//     </div>
//                 </button>

//     <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
//         <div class="card-body">
//             Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf
//             moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod.
//             Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda
//             shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea
//             proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
//             aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
//         </div>
//     </div>
// </div>
//     </div >

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
        `<img class="list-img" src="${user.icon}"></img>`
    )).join("")}
                    </div>

             </div>
     </div>
                 </button>

     <div id="${id}" class="collapse" aria-labelledby="head " data-parent="#accordion">
         <div class="card_body">
                <div class="stats">
                    <table>
                        <tbody>
                            <tr>
                                <th>Dash</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.dash ? "full" : ""}"></td>`)).join("") }
                            </tr>
                            <tr>
                                <th>Limit</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.limit ? "full" : ""}"></td>`)).join("")}
                            </tr>
                            <tr>
                                <th>Power</th>
                                ${[...Array(8)].map((a, index) => (
                                    `<td class="${index <= e.stats.power ? "full" : ""}"></td>`)).join("") }
                            </tr>
                            <tr>
                                <th>Cornering</th>
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