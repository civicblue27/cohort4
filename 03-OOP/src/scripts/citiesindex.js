import { Community } from './cities.js';
import functions from './fetch.js';


let community = new Community();
let listofCities = document.getElementById('listofCities');
let idnorth = document.getElementById('idnorth');
let idsouth = document.getElementById('idsouth');
let population = document.getElementById('total');
let citiesList = document.getElementById('citiesList');

addEventListener("load", myloadScript);

async function myloadScript() {
    let cityfromserver = await community.getCommunity();
    console.log(cityfromserver);
    // console.log(community.list);
    idnorth.textContent = await community.northernCities();
    idsouth.textContent = await community.southernCities();
    population.textContent = await community.totalPopulation();
    for (let i = 0; i < cityfromserver.length; i++) {
        citiesList.appendChild(community.createCityCard(cityfromserver[i].name, cityfromserver[i].latitude, cityfromserver[i].longitude, cityfromserver[i].population));
    }



    // let cards = community.list.map(city => community.buildCard(city));
    // console.log(typeof cards);
    // cards.forEach(thediv => { citiesList.appendChild(thediv) });
    // updateCities()

}

document.body.addEventListener('click', async e => {

    const el = e.target;
    const todo = el.getAttribute('todo');
    // let city1 = document.getElementById('listofCities');
    // console.log(el);


    if (todo === 'addCity') {
        // let data = functions.postData('http://localhost:5000/all')
        const newKey = await community.addCity(cityNames.value, Number(idlatitude.value), Number(idlongtitude.value), Number(idpopulation.value));
        console.log(newKey);

        // let city = community.getLocal(newKey);
        // console.log(city);
        // console.log(typeof city);


        let card = community.createCityCard(newKey.name, newKey.latitude, newKey.longitude, newKey.population);
        citiesList.appendChild(card);
        updateCities();
        return newKey;
    }


})

function updateCities() {

    let north = community.northernCities();
    idnorth.textContent = north;

    let south = community.southernCities();
    idsouth.textContent = south;

    // let total = community.totalPopulation();
    total.textContent = community.totalPopulation();
    cityNames.value = '';
    idlatitude.value = '';
    idlongtitude.value = '';
    idpopulation.value = '';

}
