//call-back funtion bolte boji akta function k parameter hisebe use kora

function sample(a, b, cb) {
  return cb(a, b);
}

function sum(a, b) {
  return a + b;
}

// ex: One
const result = sample(10, 20, sum);

console.log(result);

//ex: two
const result2 = sample(50, 40, function (a, b) {
  return a - b;
});

console.log(result2);
