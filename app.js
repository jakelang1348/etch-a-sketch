// dynamically creates a 16x16 grid of divs
for (let i = 0; i < 128; ++i) {
    const parent = document.body;
    const div = document.createElement("div");
    div.className = "container";
    parent.appendChild(div);
}

let containers = document.querySelectorAll(".container");

for (item of containers) {
    for (let i = 0; i < 128; ++i) {
        const div = document.createElement("div");
        div.style.backgroundColor = "grey";
        div.style.width = '4px';
        div.style.height = '4px';
        div.className = "tile"
        item.appendChild(div);
    }
}

let tiles = document.querySelectorAll(".tile");
for (let item of tiles) {
    item.addEventListener("mouseover", () => {
        item.style.backgroundColor = 'black';
    }
)
}
let resetBTN = document.querySelector('button');
resetBTN.addEventListener('click', () => {
    let tiles = document.querySelectorAll(".tile");
    for (let item of tiles) {
        item.style.backgroundColor = 'grey';
    }
})