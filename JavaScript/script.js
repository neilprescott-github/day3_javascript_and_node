let totalMoney = 4000;
let moneyPaidSoFar = 4000;
let totalLeftToPay;

totalLeftToPay = totalMoney - moneyPaidSoFar;

if (totalLeftToPay > 0) {
  effects = 'color:red;'
}
else {
    effects = 'color:green;'
}

console.log(`The total bill is £${totalMoney} the remaining amount of money to be paid is %c£${totalLeftToPay}`, effects);