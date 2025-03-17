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
