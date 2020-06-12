import arraysList from './arrays.js';


test('does this add a number to the array?', () => {
    expect(arraysList.arrayAddNumber(7)).toBe(1);
});

test('will this test an array input?' , () => {
    expect(arraysList.arrayShow(5)).toBe(1);

});

test( 'will this add the numbers of my array?' , () => {
    expect(arraysList.sumArray(6)).toBe(9);
});

