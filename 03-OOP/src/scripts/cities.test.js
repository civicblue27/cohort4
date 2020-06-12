import { City, Community } from './cities.js'

global.fetch = require('node-fetch');
const url = 'http://127.0.0.1:5000/';

test('does the class work?', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484, 0);
    expect(newCity.name).toBe('Calgary');
});

test('does the constructor work?', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484, 0);
    expect(newCity.name).toBe('Calgary');
    expect(newCity.latitude).toBe(51.0499);
    expect(newCity.longitude).toBe(-114.0666);
    expect(newCity.population).toBe(1547484);
});

test('does the show method work?', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484);
    let newCity2 = new City('Lethbridge', 49.6999, -112.8185, 101482);
    expect(newCity.show()).toBe('Calgary; Latitude: 51.0499; Longitude: -114.0666; Population: 1547484');
    expect(newCity2.show()).toBe('Lethbridge; Latitude: 49.6999; Longitude: -112.8185; Population: 101482');
});

test('people moving in', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484);
    newCity.movedIn(2000);
    expect(newCity.population).toBe(1549484);
    let newCity2 = new City('Lethbridge', 49.6999, -112.8185, 101482);
    newCity2.movedIn(175);
    expect(newCity2.population).toBe(101657);
});

test('people moving out', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484);
    newCity.movedOut(84);
    expect(newCity.population).toBe(1547400);
    let newCity2 = new City('Lethbridge', 49.6999, -112.8185, 101482);
    newCity2.movedOut(220);
    expect(newCity2.population).toBe(101262);
});

test('how big is the population?', () => {
    let newCity = new City('Calgary', 51.0499, -114.0666, 1547484);
    expect(newCity.howBig()).toBe('City');
    let newCity2 = new City('Lethbridge', 49.6999, -112.8185, 92000);
    expect(newCity2.howBig()).toBe('Large Town');
    let newCity3 = new City('Banff', 51.1802, -115.5657, 7847);
    expect(newCity3.howBig()).toBe('Town');
});

// test('does the community class work?', async () => {
//     let newCommunity = await fetch("http://127.0.0.1:5000/clear");
//     let newCity = await newCommunity.json();
//     expect(newCity.status).toBe(200);
// });

test('does add city work?', async () => {
    let newCommunity = new Community;
    expect(newCommunity.list).toStrictEqual([]);
    let data = await newCommunity.addCity('Los Angeles', 34.0522, -118.2436, 3999000);
    expect(newCommunity.list[0].key).toBe(1);
    expect(newCommunity.list[0].name).toBe('Los Angeles');
    // expect(data.status).toBe(200);
});

test('what are the hemisphere results?', () => {
    let newCommunity = new Community();
    newCommunity.addCity('Los Angeles', 34.0522, -118.2436, 3999000);
});

test('verifying northern cities', async () => {
    let newCommunity = new Community();
    await newCommunity.addCity('Edmonton', 53.6316, -113.3239, 978500);
    await newCommunity.addCity('Lethbridge', 49.6999, -112.8185, 92000);
    await newCommunity.addCity('Sydney', -38.8651, 151.2099, 5230000);
    expect(newCommunity.northernCities()).toBe('Edmonton');
    // console.log(newCommunity.northernCities(cityArray));

});

test('verifying southern cities', async () => {
    let newCommunity = new Community();
    await newCommunity.addCity('Edmonton', 53.6316, -113.3239, 978500);
    await newCommunity.addCity('Lethbridge', 49.6999, -112.8185, 92000);
    await newCommunity.addCity('Sydney', -38.8651, 151.2099, 5230000);
    expect(newCommunity.southernCities()).toBe('Sydney');

});

test('the total population', async () => {
    let newCommunity = new Community();
    await newCommunity.addCity('Edmonton', 53.6316, -113.3239, 978500);
    await newCommunity.addCity('Lethbridge', 49.6999, -112.8185, 92000);
    await newCommunity.addCity('Sydney', -38.8651, 151.2099, 5230000);
    expect(newCommunity.totalPopulation()).toBe(6300500);

});

test('delete the city', async () => {
    let newCommunity = new Community();
    await newCommunity.addCity('Edmonton', 53.6316, -113.3239, 978500);
    await newCommunity.addCity('Lethbridge', 49.6999, -112.8185, 92000);
    await newCommunity.addCity('Sydney', -38.8651, 151.2099, 5230000);
    newCommunity.deleteCity('Sydney');
    expect(newCommunity.list.length).toBe(2);
    // expect(newCommunity.list[0].name).toBe('Sydney');
});









