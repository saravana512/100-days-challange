const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
// Output [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]

const groupAnagrams = (input) => {
    const arr = new Map();
    for (let index = 0; index < input.length; index++) {
        const element = input[index];
        const check = element.split('').sort().join('');
        if (!arr.has(check)) {
            arr.set(check, [element])
        } else {
            arr.get(check).push(element)
        }
    }
    return Array.from(arr.values())

}

console.log(groupAnagrams(input));


const che = new Set();
 che.add()