//         *
//       * *
//     * * *
//   * * * *
// * * * * *

function rightSidePramide(n) {
  for (let i = 0; i < n; i += 1) {
    let str = "";
    for (let j = 0; j < n; j++) {
      const space = j + i;
      console.log(space);
      if (n - 1 === j) {
        str += " *";
      } else {
        str += " ";
      }
    }
    console.log(str);
    if (i === 2) {
      break;
    }
  }
}

rightSidePramide(5);
