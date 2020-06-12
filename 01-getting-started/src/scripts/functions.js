const calculator = {

 calc: (a,b,oper) =>{   
    var calculate;

    if (oper === "add") {
        calculate = a + b;
    } else if (oper === "min") {
        calculate = a - b;
    } else if (oper ==="mult") {
        calculate = a * b;
    } else if (oper === "div") {
        calculate = a / b;
    }
    return calculate;
    //document.querySelector("#result").innerHTML = calculate;
}
}
export default calculator;



