const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

// const valA = nullValue ?? "valA 的默认值";
// const valB = emptyText ?? "valB 的默认值";
// const valC = someNumber ?? 0;

const valA = nullValue || "valA 的默认值";
const valB = emptyText || "valB 的默认值";
const valC = someNumber || 0;


console.log('%c 🍆 valA: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', valA); // 'valA 的默认值'
console.log('%c 🥝 valB: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valB); // 'valB 的默认值'
console.log('%c 🥧 valC: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valC); // 42

