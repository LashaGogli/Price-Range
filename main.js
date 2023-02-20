let products = [["Apple", 2.4], ["Banana", 1.8], ["Cherry", 3], ["Peach", 1.2], ["Watermelon", 0.7], ["Melon", 1], ["Plum", 3, 2]];
let container = document.querySelector(".container");
let lowToHigh = document.querySelector("#lowToHigh");
let HighToLow = document.querySelector("#HighToLow");
let aToZ = document.querySelector("#aToZ");
let ZtoA = document.querySelector("#ZtoA");
let Min = document.querySelector("#Min");
let Max = document.querySelector("#Max");
let filter = document.querySelector("#filter");




filter.addEventListener("click", function () {
    container.innerHTML = '';
    let filtered = products.filter((n) => n[1] >= Min.value && n[1] <= Max.value);
    filtered.forEach((fruit) => {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        let name = document.createElement("p");
        box.appendChild(name);
        name.innerHTML = "Product Name: " + fruit[0];

        let price = document.createElement("p");
        box.appendChild(price);
        price.innerHTML = `${"Product Price: " + fruit[1]}$`;
    });
})


products.forEach((fruit) => {

    let box = document.createElement("div");
    box.classList.add("box");
    container.appendChild(box);

    let name = document.createElement("p");
    box.appendChild(name);
    name.innerHTML = "Product Name: " + fruit[0];

    let price = document.createElement("p");
    box.appendChild(price);
    price.innerHTML = `${"Product Price: " + fruit[1]}$`;
});

lowToHigh.addEventListener("click", function () {
    container.innerHTML = '';
    products.sort((a, b) => a[1] - b[1]);
    products.forEach((fruit) => {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        let name = document.createElement("p");
        box.appendChild(name);
        name.innerHTML = "Product Name: " + fruit[0];

        let price = document.createElement("p");
        box.appendChild(price);
        price.innerHTML = `${"Product Price: " + fruit[1]}$`;
    });
})

HighToLow.addEventListener("click", function () {
    container.innerHTML = '';
    products.sort((a, b) => b[1] - a[1]);
    products.forEach((fruit) => {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        let name = document.createElement("p");
        box.appendChild(name);
        name.innerHTML = "Product Name: " + fruit[0];

        let price = document.createElement("p");
        box.appendChild(price);
        price.innerHTML = `${"Product Price: " + fruit[1]}$`;
    });
})

aToZ.addEventListener("click", function () {
    container.innerHTML = '';
    products.sort((a, b) => a[0].localeCompare(b[0]));
    products.forEach((fruit) => {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        let name = document.createElement("p");
        box.appendChild(name);
        name.innerHTML = "Product Name: " + fruit[0];

        let price = document.createElement("p");
        box.appendChild(price);
        price.innerHTML = `${"Product Price: " + fruit[1]}$`;
    });
})

ZtoA.addEventListener("click", function () {
    container.innerHTML = '';
    products.sort((a, b) => b[0].localeCompare(a[0]));
    products.forEach((fruit) => {

        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);

        let name = document.createElement("p");
        box.appendChild(name);
        name.innerHTML = "Product Name: " + fruit[0];

        let price = document.createElement("p");
        box.appendChild(price);
        price.innerHTML = `${"Product Price: " + fruit[1]}$`;
    });
})
