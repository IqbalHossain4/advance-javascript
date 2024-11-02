//closures mane kothao valu k store kore rekhe tarpor return kora.

let businessValue = function (balance) {
  return function (interest) {
    return balance - interest;
  };
};
const profit = businessValue(2000);
console.log(profit(400));
