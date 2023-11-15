import gears from "../json/gears.json" assert {type: "json"};
import characters from "../json/characters.json" assert {type: "json"};

const data = gears.map((gear) => ({...gear, used_by: characters.filter((character) => gear.used_by.includes(character.name))}));
console.log(data);

const gearList = document.getElementById('gear_list');
console.log(gearList);

data.forEach((e) => {
    const node = document.createElement("li");
    node.textContent = e.name;

    e.used_by.forEach((user) => {
        const imagenode = document.createElement("img");
        imagenode.src = user.icon;
        imagenode.classList.add('list-img');
        node.appendChild(imagenode);
    })
    
    gearList.appendChild(node);
})