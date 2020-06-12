import degreeChange from './daily.js';


test(('convert the temperature to Fahrenheit'), ()  => {
    expect(degreeChange.convertToFahrenheit(100)).toStrictEqual(212);
    expect(degreeChange.convertToFahrenheit(15)).toStrictEqual(59);
});