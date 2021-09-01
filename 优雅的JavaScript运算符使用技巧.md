## 1. 可选链接运算符(？.)
> * 可选链操作符( ?. )允许读取位于连接对象链深处的属性的值，而不必明确验证链中的每个引用是否有效。
> * ?. 操作符的功能类似于 . 链式操作符，不同之处在于，在引用为空(nullish ) (null 或者 undefined) 的情况下不会引起错误，该表达式短路返回值
> * 语法：`obj?.prop   obj?.[expr]   arr?.[index]    func?.(args)`
```javascript
let title = data && data.children && data.children[0] && data.children[0].title
 // 等价于
let title = data?.children?.[0]?.title;

// 对于方法的调用
object.runsOnlyIfMethodExists?.()

let parent = {
  name: "parent",
  friends: ["p1", "p2", "p3"],
  getName: function() {
    console.log(this.name)
  }
};

parent.getName?.()   // parent
parent.getTitle?.()  //不会执行
```
---
## 2. 空值合并操作符（??）
> * 空值合并操作符（??）是一个逻辑操作符，当左侧的操作数为 null 或者 undefined 时，返回其右侧操作数，否则返回左侧操作数。
> * 与逻辑或操作符（||）不同，逻辑或操作符会在左侧操作数为假值时返回右侧操作数。也就是说，如果使用 || 来为某些变量设置默认值，可能会遇到意料之外的行为。比如为假值（例如，'' 或 0）时
```javascript
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

const valA = nullValue ?? "valA 的默认值";
const valB = emptyText ?? "valB 的默认值";
const valC = someNumber ?? 0;

console.log('%c 🍆 valA: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', valA); // 'valA 的默认值'
console.log('%c 🥝 valB: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valB); // ''（空字符串虽然是假值，但不是 null 或者 undefined）
console.log('%c 🥧 valC: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valC); // 42
```
```javascript
const nullValue = null;
const emptyText = ""; // 空字符串，是一个假值，Boolean("") === false
const someNumber = 42;

const valA = nullValue || "valA 的默认值";
const valB = emptyText || "valB 的默认值";
const valC = someNumber || 0;


console.log('%c 🍆 valA: ', 'font-size:20px;background-color: #E41A6A;color:#fff;', valA); // 'valA 的默认值'
console.log('%c 🥝 valB: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valB); // 'valB 的默认值'
console.log('%c 🥧 valC: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', valC); // 42
```
---
## 3. 逻辑空分配（?? =）
```javascript
(x ??= y ) === (x ?? (x = y);)
```
---
## 4. 逻辑或分配（|| =）
```javascript
(x ||= y ) === (x || (x = y))
```

---
## 5. 逻辑与分配（&& =）
```javascript
(x &&= y) === (x && (x = y))

```
----