Array.prototype.lastIndex = function () {
    return [this[this.length-1]]
}

console.log([1,23,45,56].lastIndex())