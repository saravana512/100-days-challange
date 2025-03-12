// const display = (name) =>{
//     console.log(name)
// }

// const callName = (str, cb) =>{
//     cb(str)
// }

// callName('demo Callback', display)

// const display = (name) => {
//     return new Promise((resolve, reject) => {
//         if(name) {
//             console.log(name);
//             resolve(name);
//         } else {
//             reject('please enter the name')
//         }
//     })
// }

// (async ()=>{
//     try{
//         await display('promise call')
//     }catch(err){
//         console.log(err)
//     }
// })()

// const a = {
//     name: "demo1",
//     age: 23,
//     displayPersonDetail: function (){
//         console.log(this.name, " ", this.age);
//     }
// }

// const functionCopy = a.displayPersonDetail.bind();

// console.log(functionCopy);

// const b = {
//     name: "demo2",
//     age: 24,
// }

// functionCopy(b)

// const timer1 = setTimeout(() => {
//   console.log('timer1');

//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)

// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)

// 1 users
// 2 userdetails

// select u.userid, ud.name, ud.salary from users as u
// inner join userdetails as ud on u.userid = ud.userid
// order by ud.salary desc
// limit 1 offset 1;

const arr = [1, 2, 3, 4, 5];
const outputval = 5;
const sumOfArrIndexReturn = (arrayVal, outputval) => {
  if (!Array.isArray(arrayVal) && !array.length > 1) {
    throw new Error("Input not valid");
  }
  for (let i = 0; i < arrayVal.length; i++) {
    // if(index > 1)

    const nextIndex = arrayVal[i + 1];
    const currentIndex = arrayVal[i];
    console.log(nextIndex, currentIndex, outputval);
    if (nextIndex + currentIndex === outputval) {
      return [currentIndex, nextIndex];
    }
  }
};

(() => {
  try {
    console.log(sumOfArrIndexReturn(arr, outputval));
  } catch (err) {
    console.log(err);
  }
})();
