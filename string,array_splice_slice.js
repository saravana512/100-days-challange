String:
slice(indexStart)
slice(indexStart, indexEnd)


Array:
slice()
slice(start)
slice(start, end)

splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)


toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)




sample: 

const a = [1,2,3,4,5,6, 7]

// console.log(a.slice(2, 5))
console.log(a.splice(2, 4, 'demo', 'arum'))

console.log(a)