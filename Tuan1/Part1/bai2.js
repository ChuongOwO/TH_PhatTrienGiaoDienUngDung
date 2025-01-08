let markWeight1 = 78;
let markHeight1 = 1.69;
let johnWeight1 = 92;
let johnHeight1 = 1.92;

let markWeight2 = 95;
let markHeight2 = 1.88;
let johnWeight2 = 95;
let johnHeight2 = 1.76;

//Ham tinh BMI
function tinhBMI(weight, height) {
    return weight / (height ** 2)
}

//Tinh BMI cho Data 1
let MarkBMI1 = tinhBMI(markWeight1, markHeight1);
let JohnBMI1 = tinhBMI(johnWeight1, johnHeight1);
let markHigherBMI1 = MarkBMI1 > JohnBMI1;

//Console 1
console.log('Bộ dữ liệu test 1');
console.log('BMI của Mark:', MarkBMI1.toFixed(2));
console.log('BMI của John:', JohnBMI1.toFixed(2));
if(markHigherBMI1){
    console.log('BMI của Mark hơn John'); 
} else{
    console.log('BMI của John hơn Mark'); 
}



//Tinh BMI cho Data 2
let MarkBMI2 = tinhBMI(markWeight2, markHeight2);
let JohnBMI2 = tinhBMI(johnWeight2, johnHeight2);
let markHigherBMI2 = MarkBMI2 > JohnBMI2;

//Console 2
console.log('Bộ dữ liệu test 2');
console.log('BMI của Mark:', MarkBMI2.toFixed(2));
console.log('BMI của John:', JohnBMI2.toFixed(2));
if(markHigherBM2){
    console.log('BMI của Mark hơn John'); 
} else{
    console.log('BMI của John hơn Mark'); 
}

