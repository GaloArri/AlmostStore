let products = [];

const productConteiner = document.querySelector("#productConteiner");
const categoryButton = document.querySelectorAll(".category");
const title = document.querySelector("#title");

function loadJson(path) {
    return new Promise((resolve, reject)=>{
        fetch(path)
            .then(response => response.json())
            .then(data => {
                products = products.concat(data);
                resolve(products);
            })
            .catch(error=>reject(error));
    });
}


loadJson("../assets/dataFiles/beans.json")
    .then(() => loadJson("../assets/dataFiles/grinded.json"))
    .then(() => loadJson("../assets/dataFiles/pods.json"))
    .then(() => loadJson("../assets/dataFiles/instant.json"))
    .then(() => loadJson("../assets/dataFiles/barista.json"))
    .then(() => loadJson("../assets/dataFiles/pottery.json"))
    .then(() => loadJson("../assets/dataFiles/machines.json"))
    .then(()=>{loadProduct(products)})



function loadProduct(category) {

    productConteiner.innerHTML = "";

    category.forEach(product => {
        const div = document.createElement("div");
        div.innerHTML = `
        <div class="px-sm-2 my-3 ">
        <div class="card cardWith">
            <img class="card-img-top cardImage object-fit-contain" src="${product.img}"
                alt="${product.title}">
                <h5 class="card_title">${product.title}</h5>
            <div class="card-body text-align border-radius h-200p overflow-scroll">
                <p class="card-text "style="heigh:100%">${product.shortDescription}</p>
                </p>
                <p class="card-text price" style="display:flex; justify-content:center">$${product.price}
            </div>
            <a href="./product.html?id=${product.id}"
                class="btn btn-secondary container justify-content-center align-items-center ">SEE</a>
        </div>
    </div>
        `;
        productConteiner.append(div);
    })

}

categoryButton.forEach(boton => {
    boton.addEventListener("click", (e) => {
        categoryButton.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        const productCategory = products.find(product => product.category === e.currentTarget.id);

        if (productCategory) {
            title.innerText = productCategory.category;
            const productoBoton = products.filter(product => product.category === e.currentTarget.id);
            loadProduct(productoBoton);
        }
        else {
            title.innerText = 'All Products';
            loadProduct(products);
        }

    })
})
