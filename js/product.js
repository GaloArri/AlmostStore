let products = [];
let product;
const price = document.querySelector('#price');
const image = document.querySelector('#image');
const description = document.querySelector('#description');
const title = document.querySelector('#title');

function loadJson(path){
    return fetch(path)
    .then(res => res.json())
    .then(data => {
        products = products.concat(data);

    })
}
const fetchPromises= [
    loadJson("../assets/dataFiles/beans.json"),
    loadJson("../assets/dataFiles/instant.json"),
    loadJson("../assets/dataFiles/machines.json"),
    loadJson("../assets/dataFiles/pods.json"),
    loadJson("../assets/dataFiles/pottery.json"),
    loadJson("../assets/dataFiles/barista.json"),
    loadJson("../assets/dataFiles/beans.json"),
    loadJson("../assets/dataFiles/grinded.json")
]



function getProductDetail (){
    let id = new URLSearchParams(window.location.search).get('id');
    product = products.find(p => p.id === id );
}
function setDetails (){
    price.textContent = product.price;
    image.src = product.img;
    description.textContent = product.shortDescription;
    title.textContent = product.title;
}

Promise.all(fetchPromises)
.then(()=>getProductDetail()).then(()=>setDetails());