const syntax = {
 
  // define attributes / variables
// number
isNumber: (num) => {
    return (num===8);    
  },


// string

isWord: (word) => {
    return (word ==="hello");    
},

// boolean

isTwelve: (input) => { 
    if (input ===12) return true;    
    return false;
},

// array

animalArray: (data) => {
    let array = [""];
    array[0]= data
    return array;
   // for an array .toStrictEqual should be used in the test rather than .toBe
},

// dictionary / objects

updateCar: (info) => {
  var car = {
    Make: "Hyundai",
    Model: "Santa Fe",
    Year: info
    
  };
   return car.Year

},

// undefined

isUndefined: (noinfo) => {
  var s
  return undefined;

},

// sample if / else

sampleIfElse: (val) => {
  if (val > 10) return true;
   return false;

},

// parameters

parameterTest: (num) => {
  let x = num;
  return num;

},

// returns see above, all functions include return statements

// arrays add to the front

addToArray: (numbers) => {
  let array =[9, 8, 7];
  array.unshift(6);
  return array;
},

// add to the end

addtoArrayEnd: (numberpush) => {
  let array =[1, 2, 3];
  array.push(4);
  return array;
},

// update values

updateValue: (updatearray) => {
  let array =["potato", "steak", "asparagus"];
  array.pop("asparagus");
  return array;
},



// loops - for

myLoop: (fruit) => {
  let fruits =["oranges", "apples", "bananas", "lemons"];
  let i;
  for (i=0; i < fruits.length; i++)
  {fruits[i]=fruits[i].toUpperCase()}
  return fruits;
  
},

// for/in

loopIn: (nameinfo) => {
  let person = {firstname:"Sean", lastname:"Beattie"};
  let r;
  for (r in person) 
  {person[r]=person[r].toLowerCase()}
  return person;
  
},


// while

loopWhile: (loopy) => {
  let i=0;
  let text ="";
  while (i < 15) {
  text += "the number is" +i;
  i++;
  return i;
  }
},

// do while

 letsDoWhile: (loopdaloop) => {
  let i=0;
  let text= "";  
  do {
    text += "the number is" +i;
    i++;}
  while (i < 10);
  return i;
},

// forEach (with array and function) - instructed not to do this one,
//a bad way to do it


// Objects / Dictionaries
// declare object

// see above 'loopIn' for object declaration

// lookup key to retrieve value

objectValues: (findme) => {

  return Object.values(findme);
},

};
export default syntax; 











