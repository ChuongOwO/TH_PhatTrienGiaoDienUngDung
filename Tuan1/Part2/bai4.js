function calcTip(bills) {
    const tips = [];
    const totals = [];

    for (let i = 0; i < bills.length; i++) {
        const bill = bills[i];
        const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2; 
        const total = bill + tip; 
        tips.push(tip); 
        totals.push(total); 
    }

    return { tips, totals }; 
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const { tips, totals } = calcTip(bills); 

console.log('Tiền boa:', tips);
console.log('Tổng giá trị:', totals);

function calcAverage(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; 
    }
    return sum / arr.length;
}

console.log('Trung bình tiền boa:', calcAverage(tips)); 
console.log('Trung bình tổng giá trị:', calcAverage(totals)); 
