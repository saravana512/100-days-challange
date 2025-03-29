// *
// * *
// * * *
// * * * *
// * * * * *
// * * * * * *
// * * * * * * *
// * * * * * * * *
// * * * * * * * * *

function leftsidePramide(n) {
  for (let i = 0; i < n; i = i + 1) {
    let str = "";
    for (let j = 0; j <= i; j = j + 1) {
      str += "* ";
    }
    console.log(str);
  }
}

leftsidePramide(10);

// 1
// 12
// 123
// 1234
// 12345

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += `${j}`;
  }
  console.log(str);
}

// 1
// 22
// 333
// 4444
// 55555

for (let i = 1; i <= 5; i++) {
  let str = "";
  for (let j = 1; j <= i; j++) {
    str += `${i}`;
  }
  console.log(str);
}

// * * * * *
// * * * *
// * * *
// * *
// *
