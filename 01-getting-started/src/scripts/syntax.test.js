import syntax from './syntax'

test('Does number function work?', () => {
    expect(syntax.isNumber(8)).toBe(true);
    expect(syntax.isNumber("f")).toBe(false);
}),

test('Is this a string?', () => {
    expect(syntax.isWord("hello")).toBe(true);
    expect(syntax.isWord(7)).toBe(false);
});

test('Is this true?', () => {
    expect(syntax.isTwelve(12)).toBe(true);
    expect(syntax.isTwelve(18)).toBe(false);
});

test('Is this an array?', () => {
    expect(syntax.animalArray("dog")).toStrictEqual(["dog"]);
    expect(syntax.animalArray("bird")).toStrictEqual(["bird"]);
});

test('does this object update the car?', () => {
    expect(syntax.updateCar(2019)).toBe(2019);
});

test('does this return undefined?', () => {
    expect(syntax.isUndefined(undefined));
});

test('is this a sample if else statement?' , () => {
    expect(syntax.sampleIfElse(18)).toBe(true);
    expect(syntax.sampleIfElse(7)).toBe(false);
});

test('does this test parameters?' , () => { 
    expect(syntax.parameterTest(Number)).toBe(Number);
    expect(syntax.parameterTest(undefined)).toBe(undefined);
    expect(syntax.parameterTest(String)).toBe(String);

});

test('does this test add to the array?', () => {
    expect(syntax.addToArray([6])).toStrictEqual([6, 9, 8, 7]);
});

test('does this test push to the array?', () => {
    expect(syntax.addtoArrayEnd([4])).toStrictEqual([1, 2, 3, 4]);
});

test('does this test update the value to the array?' , () => {
    expect(syntax.updateValue(["asparagus"])).toStrictEqual(["potato", "steak"]);
});

test('does this test check for loops?', () => {
    expect(syntax.myLoop()).toStrictEqual(["ORANGES", "APPLES", "BANANAS","LEMONS"]);
});

test('does this test check for in loops?', () => {
    expect(syntax.loopIn()).toStrictEqual({"firstname": "sean", "lastname": "beattie",});
});

test('does this test give a loop?', () => {
    expect(syntax.loopWhile(1)).toStrictEqual(1);
});

test('does this test give even more of a loop?', () => {
    expect(syntax.letsDoWhile(1)).toStrictEqual(10);
});

test('does this test lookup the object?', () => {
    expect(syntax.objectValues({a:'blue', b:2020, c:true})).toStrictEqual(["blue", 2020, true]);
});


 