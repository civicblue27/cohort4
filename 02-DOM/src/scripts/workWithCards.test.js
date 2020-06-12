import cardfunctions from "./workWithCards.js";

test('will this DOM function work?', () => {
    console.log("We are in the tests");
    const element = cardfunctions.crtNewCard();
    expect(element).toBeTruthy();
});


test('will it Add Before?', () => {
    const group = document.createElement('button');
    const element = cardfunctions.addBefore('Before');
    group.appendChild(element);
    expect(group.children.length).toBe(1);


    const txt = 'New Element'
    cardfunctions.addBefore(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[0].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[1].textContent.substr(0, 12)).toBe("First insert");


});


test('will it Add After?', () => {
    const group = document.createElement('div');
    const element = cardfunctions.crtNewCard('First insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);


    const txt = 'New Element'
    cardfunctions.addAfter(element, txt);
    expect(group.children.length).toBe(2);
    expect(group.children[1].textContent.substr(0, 11)).toBe(txt);
    expect(group.children[0].textContent.substr(0, 12)).toBe("First insert");


});


test('does it delDiv?', () => {
    const group = document.createElement('div');
    const element = cardfunctions.crtNewCard('First insert');
    const element2 = cardfunctions.crtNewCard('Second insert');
    group.appendChild(element);
    expect(group.children.length).toBe(1);
    group.appendChild(element2);
    expect(group.children.length).toBe(2);


    cardfunctions.deleteDiv(element);
    expect(group.children.length).toBe(1);
    cardfunctions.deleteDiv(element2);
    expect(group.children.length).toBe(0);
});