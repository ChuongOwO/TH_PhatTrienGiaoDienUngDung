function calcTip(bills){
    bills.forEach((bill) => {
        const tips = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
        const total = bill + tips;
        console.log(
          `Hóa đơn là ${bill}, tiền boa là ${tips.toFixed(2)} và tổng giá trị là ${total.toFixed(2)}`
        );
      });
}

const bills = [125, 555, 44];
calcTip(bills);
