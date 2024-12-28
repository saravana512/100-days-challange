const fetchData = (val1) => {
    console.log(val1);
};

function debounce (fn, d) {
    let timer;
    return function (...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, args)
        }, d)
    }
}

const getData = debounce(fetchData, 300)
