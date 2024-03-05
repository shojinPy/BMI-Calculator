const inputWeight = document.querySelector('#inputWeight');
const inputHeight = document.querySelector('#inputHeight');
const clearButton = document.querySelector('#clearBTN');
const calcButton = document.querySelector('#calcBTN');
const backButton = document.querySelector('#backBTN');

const resultBox = document.querySelector('.result-box');
const resultClass = document.querySelector('#class');
const highlight = document.querySelector('#highlight')
const resultInfo = document.querySelector('#info');

let BMI = null;
let classification = "";

calcButton.onclick = function(){
    const weight = inputWeight.value;
    const height = inputHeight.value;

    const conditions = ["+","-","*","/","%"]
    const conditionWeight = conditions.some(i => weight.includes(i))
    const conditionHeight = conditions.some(i => height.includes(i))

    BMI = null;
    classification = "";

    if(inputWeight.value == "" || inputHeight.value == ""){
        alert("Weight and height can't be blank.");
    }
    else if(conditionWeight==true || conditionHeight==true){
        alert("Please remove any symbols.");
    }
    else{
        const calculate = (a,b) => a/(b*0.01)**2;
        BMI += calculate(weight,height);
    }

    switch(true){
        case (BMI.toFixed(2)>=30):
            classification += "Obese";
            break;
        case BMI.toFixed(2)>=25.0:
            classification += "Overweight";
            break;
        case BMI.toFixed(2)>=18.5:
            classification += "Healthy"
            break;
        case BMI.toFixed(2)<18.5:
            classification += "Underweight"
            break;
    }

    resultBox.style.display = "block";
    resultInfo.innerHTML = `Your calculated BMI result is: ${BMI.toFixed(2)} and classified as`
    resultClass.innerHTML = classification;
}

backButton.onclick = function(){
    resultBox.style.display = "none";
    inputWeight.value = "";
    inputHeight.value = "";
    BMI = null;
    classification = "";
}

clearButton.onclick = function(){
    inputWeight.value = "";
    inputHeight.value = "";
    BMI = null;
    classification = "";
}

// Anything