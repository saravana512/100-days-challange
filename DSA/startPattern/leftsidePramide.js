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

console.log("------------------------");

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

    // Space
    for (let l = n - i - 1; l > 0; l--) {
      str += " ";
    }

    console.log(str);
  }
};

pramid(10);
console.log("------------------------");

const pramid2 = (n) => {
  for (let i = n - 1; i >= 0; i--) {
    let str = "";

    // Space
    for (let j = n - i - 1; j > 0; j--) {
      str += " ";
    }

    // Star
    for (let k = 2 * i + 1; k > 0; k--) {
      str += "*";
    }

    // Space
    for (let l = n - i - 1; l > 0; l--) {
      str += " ";
    }

    console.log(str);
  }
};

pramid2(10);

console.log("---------------------");

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

const halfDiamond = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    for (let j = 0; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = n - 1; i > 0; i--) {
    let str = "";
    for (let j = i; j > 0; j--) {
      str += "*";
    }
    console.log(str);
  }
};

halfDiamond(5);

console.log("-------------------------");

// 1
// 01
// 101
// 0101
// 10101

const binaryPramid = (n) => {
  for (let i = 0; i < n; i++) {
    let str = "";
    if (i === 0) {
      str = "1";
      console.log(str);
      continue;
    } else if (i % 2 === 0) {
      const arr = ["1", "0"];
      for (let j = 0; j <= i; j++) {
        str += arr[j % 2];
        // console.log(str, "ch");
      }
    } else {
      const arr = ["0", "1"];
      for (let j = 0; j <= i; j++) {
        str += arr[j % 2];
      }
    }
    console.log(str);
  }
};

binaryPramid(10);
