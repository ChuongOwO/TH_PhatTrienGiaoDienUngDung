let markWeight = 78;
let markHeight = 1.69;
let johnWeight = 92;
let johnHeight = 1.95;

//Ham tinh BMI
function calcBMI(weight, height) {
    return weight / (height ** 2)
}

//Tinh BMI 
let MarkBMI = calcBMI(markWeight, markHeight);
let JohnBMI = calcBMI(johnWeight, johnHeight);

if (MarkBMI > JohnBMI) {
    console.log("Mark's BMI", "(", MarkBMI.toFixed(2), ") is higher than John's", "(", JohnBMI.toFixed(2), ")!");
}
else {
    console.log("John's BMI", "(", JohnBMI.toFixed(2), ") is higher than Mark's", "(", MarkBMI.toFixed(2), ")!");
}


