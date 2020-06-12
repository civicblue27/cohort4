import calculator from './functions.js';
import taxFunctions from './taxes.js';
import arraysList from './arrays.js';
import provinces from './dictionaries.js';


const addArray= [] 
// **********
//
// Add the event listeners
// // 
// var a = document.querySelector("#value1");
// var b = document.querySelector("#value2");
var oper = document.getElementById('operator');

const arrayInput = document.getElementById('arrayInput');
const addButton = document.getElementById('myBtnAdd');
const showButton = document.getElementById('myBtnShow');
const sumButton = document.getElementById('myBtnTotal');
const clearButton = document.getElementById('myBtnClear');
const sum = document.getElementById("arraysum");
const clear = document.getElementById("deletearray");
const lookup = document.getElementById("myBtnLookUp");

//var oper = document.querySelector("#operator").value;

// var a = document.getElementById('value1');
//  var b =  document.getElementById('value2');
  

idNumber.addEventListener('change', (() => {
    idNumberSize.textContent = functions.size(idNumber.value);
}));

buttonAdd.addEventListener('click',()=>{    
    result.textContent= calculator.calc(parseInt(value1.value),parseInt(value2.value),oper.value);
});

taxButton.addEventListener("click", (() => {    
    taxesOwed.textContent= taxFunctions.calcTaxes(income.value);
}));

addButton.addEventListener('click', (() => {
     //arraysList.arrayAddNumber(arrayInput.value);
     console.log(arraysList.arrayAddNumber(addArray, arrayInput.value))
}));

showButton.addEventListener('click', ()  => {
    arraysList.arrayShow(addArray)
});

sumButton.addEventListener( 'click', (() => {
   sum.textContent=arraysList.sumArray(addArray)
    
}));

clearButton.addEventListener('click', (() => {
    clear.textContent=arraysList.clearArray(addArray)

}));

lookup.addEventListener('click', (() => {
    pcmessage.textContent=provinces.prov(pcInput.value)

}));












