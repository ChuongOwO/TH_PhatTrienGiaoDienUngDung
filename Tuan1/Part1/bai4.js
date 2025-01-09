const bills = [275,40,430];

//Ham tinh tien boa va tong gia tri hoa don
bills.forEach((bill) => {
  const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
  const total = bill + tip;
  console.log(
    `Hóa đơn là ${bill}, tiền boa là ${tip.toFixed(2)} và tổng giá trị là ${total.toFixed(2)}`
  );
});
