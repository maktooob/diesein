

let lengthResult = document.getElementById("length-result");
let volResult = document.getElementById("vol-result");
let massResult = document.getElementById("mass-result")

function lengthCalc() {

    let inputNumber = document.getElementById("input-number").value;
// Length
    let lengthInFeet = document.getElementById("input-number").value * 3.28;
    let lengthInMeter = document.getElementById("input-number").value / 3.28;
    lengthResult.textContent = inputNumber + " feet are " + lengthInMeter.toFixed(3) + " Meter | " + inputNumber + " Meter are " + lengthInFeet.toFixed(3) + " Feet"; 
// Volume
    let gallons =  document.getElementById("input-number").value / 3.79;
    let litre = document.getElementById("input-number").value * 3.79;  
    volResult.textContent = inputNumber + " gallons are " + litre.toFixed(3) + " litre | " + inputNumber + " litres are " + gallons.toFixed(3) + " gallons";
// Mass
    let pound =  document.getElementById("input-number").value * 2.2;
    let kilo = document.getElementById("input-number").value / 2.2;  
    massResult.textContent = inputNumber + " kilos are " + pound.toFixed(3) + " pounds | " + inputNumber + " pounds are " + kilo.toFixed(3) + " kilos";

}


