// String:
// Not affect the original string

slice(indexStart)
slice(indexStart, indexEnd)


// Array:

// slice Not affect the original string
slice()
slice(start)
slice(start, end)

// slice  affect the original string
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ itemN)

// slice  affect the original string
toSpliced(start)
toSpliced(start, deleteCount)
toSpliced(start, deleteCount, item1)
toSpliced(start, deleteCount, item1, item2)
toSpliced(start, deleteCount, item1, item2, /* …, */ itemN)




// sample: 

// const a = [1,2,3,4,5,6, 7]

// // console.log(a.slice(2, 5))
// console.log(a.splice(2, 4, 'demo', 'arum'))

// console.log(a)

// const a = 'this is the saravana kumar 123';

// console.log(a)
// console.log(a.slice(1, 3))
// console.log(a)