const data = {
    name: "sar1",
    age: 23,
    hobby: {
        hobb1: "cricket",
        hobb2: "coading"
    }
}

// console.log(data);

// This is direct refference
// const data1 = data

//This is shallow copy
// Top level only change if the nested object is available it will direct refference in the parent object
const data1 = { ...data };

//This is deep copy 
// const data1 = JSON.parse(JSON.stringify(data));

data1.name = 'demo';
// data1.hobby.hobb1 = 'coading1';

console.log(data, data1)