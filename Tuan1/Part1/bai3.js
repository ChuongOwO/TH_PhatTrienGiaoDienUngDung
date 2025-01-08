//Ham tinh diem trung binh
function tinhTrungBinh(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

console.log("Test1");
let diemDolphins = tinhTrungBinh(96, 108, 89);
let diemKoalas = tinhTrungBinh(88, 91, 110);
console.log("Điểm của đội Dolphins: ", diemDolphins.toFixed(2));
console.log("Điểm của đội Koalas: ", diemKoalas.toFixed(2));

//người chiến thắng
if (diemDolphins > diemKoalas && diemDolphins >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (diemDolphins < diemKoalas && diemKoalas >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    diemDolphins >= 100 &&
    diemKoalas >= 100 &&
    diemDolphins === diemKoalasa
) {
    console.log("Hòa!");
} else {
    console.log("2 đội không đạt điều kiện");
}

console.log("Test2");
let diemDolphinsBonus1 = tinhTrungBinh(97, 112, 101);
let diemKoalasBonus1 = tinhTrungBinh(109, 95, 123);
console.log("Điểm của đội Dolphins: ", diemDolphinsBonus1.toFixed(2));
console.log("Điểm của đội Koalas: ", diemKoalasBonus1.toFixed(2));

//người chiến thắng
if (diemDolphinsBonus1 > diemKoalasBonus1 && diemDolphinsBonus1 >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (diemDolphinsBonus1 < diemKoalasBonus1 && diemKoalasBonus1 >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    diemDolphinsBonus1 >= 100 &&
    diemKoalasBonus1 >= 100 &&
    diemDolphinsBonus1 === diemKoalasa
) {
    console.log("Hòa!");
} else {
    console.log("2 đội không đạt điều kiện");
}

console.log("Test3");
let diemDolphinsBonus2 = tinhTrungBinh(97, 112, 101);
let diemKoalasBonus2 = tinhTrungBinh(109, 95, 106);
console.log("Điểm của đội Dolphins: ", diemDolphinsBonus2.toFixed(2));
console.log("Điểm của đội Koalas: ", diemKoalasBonus2.toFixed(2));

//người chiến thắng
if (diemDolphinsBonus2 > diemKoalasBonus2 && diemDolphinsBonus2 >= 100) {
    console.log("Dolphins thắng cúp!");
} else if (diemDolphinsBonus2 < diemKoalasBonus2 && diemKoalasBonus2 >= 100) {
    console.log("Koalas thắng cúp!");
} else if (
    diemDolphinsBonus2 >= 100 &&
    diemKoalasBonus2 >= 100 &&
    diemDolphinsBonus2 === diemKoalasBonus2
) {
    console.log("Hòa!");
} else {
    console.log("2 đội không đạt điều kiện");
}

