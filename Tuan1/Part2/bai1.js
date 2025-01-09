//Ham tinh diem trung binh
function calcAverage(diem1, diem2, diem3) {
    return (diem1 + diem2 + diem3) / 3;
}

function checkWinner(avg1, avg2){
    if (avg1 >= avg2 * 2)
        // console.log("Koalas win (" , calcAverage, "vs " , calcAverage ,")");
        return avg1;
    else if (avg1 * 2 >= avg2)
        return avg2;
}

console.log("Test1");
let avgDolhins1 = calcAverage(44, 23, 71);
let avgKoalas1 = calcAverage(65, 54, 49);
if (checkWinner(avgDolhins1, avgKoalas1) ==  avgDolhins1){
    console.log("Koalas win (" , avgDolhins1, "vs." , avgKoalas1 ,")");
}
else{
    console.log("Dolphins win (" , avgKoalas1, "vs." , avgDolhins1 ,")");
}

console.log("Test2");
let avgDolhins2 = calcAverage(85, 54, 41);
let avgKoalas2 = calcAverage(23, 34, 27);
if (checkWinner(avgDolhins2, avgKoalas2) ==  avgDolhins2){
    console.log("Koalas win (" , avgDolhins2, "vs." , avgKoalas2 ,")");
}
else{
    console.log("Dolphins win (" , avgKoalas2, "vs." , avgDolhins2 ,")");
}

