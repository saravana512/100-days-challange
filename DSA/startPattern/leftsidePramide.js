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

leftsidePramide(5);

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

for (let i = 5; i > 0; i--) {
  let str = "";
  for (let j = i; j > 0; j--) {
    str += "* ";
  }
  console.log(str);
}

for (let i = 5; i > 0; i--) {
  let str = "";
  for (let j = i; j > 0; j--) {
    str += `${i - j + 1} `;
  }
  console.log(str);
}

//    *
//   * *
//  * * *
// * * * *
// 4 space and 1 start
// 3 space and 1 star space and 1 star

const pramid = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";

    // Space
    for (let j = n - i - 1; j > 0; j--) {
      str += " ";
    }

    // Star
    for (let k = 2 * i + 1; k > 0; k--) {
      str += "*";
    }

    for (let l = n - i - 1; l > 0; l--) {
      str += " ";
    }

    console.log(str);
  }
};

pramid(4);
