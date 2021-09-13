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
## 6. 设备判断：android、ios、web
```javascript
const isDevice = function() { // 判断是android还是ios还是web
  var ua = navigator.userAgent.toLowerCase()
  if (ua.match(/iPhone\sOS/i) === 'iphone os' || ua.match(/iPad/i) === 'ipad') { // ios
    return 'iOS'
  }
  if (ua.match(/Android/i) === 'android') {
    return 'Android'
  }
  return 'Web'
}
```
----
## 7. 判断是否为微信
```javascript
const isWx = function() { // 判断是否为微信
  var ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    return true
  }
  return false
}
```
----
## 8. 文本复制功能
```javascript
const copyTxt = function(text, fn) { // 复制功能
  if (typeof document.execCommand !== 'function') {
    console.log('复制失败，请长按复制')
    return
  }
  var dom = document.createElement('textarea')
  dom.value = text
  dom.setAttribute('style', 'display: block;width: 1px;height: 1px;')
  document.body.appendChild(dom)
  dom.select()
  var result = document.execCommand('copy')
  document.body.removeChild(dom)
  if (result) {
    console.log('复制成功')
    typeof fn === 'function' && fn()
    return
  }
  if (typeof document.createRange !== 'function') {
    console.log('复制失败，请长按复制')
    return
  }
  var range = document.createRange()
  var div = document.createElement('div')
  div.innerhtml = text
  div.setAttribute('style', 'height: 1px;fontSize: 1px;overflow: hidden;')
  document.body.appendChild(div)
  range.selectNode(div)
  var selection = window.getSelection()
  console.log(selection)
  if (selection.rangeCount > 0) {
    selection.removeAllRanges()
  }
  selection.addRange(range)
  document.execCommand('copy')
  typeof fn === 'function' && fn()
  console.log('复制成功')
}
```
----
## 9. 是否为PC端
```javascript
const isPC = function() { // 是否为PC端
  let userAgentInfo = navigator.userAgent
  let Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
  let flag = true
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false
      break
    }
  }
  return flag
}
```
----
## 10. 判断图片加载完成
```javascript
const imgLoadAll = function(arr, callback) { // 图片加载
  let arrImg = []
  for (let i = 0; i < arr.length; i++) {
    let img = new Image()
    img.src = arr[i]
    img.onload = function() {
      arrImg.push(this)
      if (arrImg.length == arr.length) {
        callback && callback()
      }
    }
  }
}
```
----
## 11. 音频加载完成操作
```javascript
const loadAudio = function(src, callback) { // 音频加载
  var audio = new Audio(src)
  audio.onloadedmetadata = callback
  audio.src = src
}
```

----
## 12. 图片地址转base64
```javascript
const getBase64 = function(img) { //传入图片路径，返回base64，使用getBase64(url).then(function(base64){},function(err){}); 
  let getBase64Image = function(img, width, height) { //width、height调用时传入具体像素值，控制大小,不传则默认图像大小
    let canvas = document.createElement("canvas");
    canvas.width = width ? width : img.width;
    canvas.height = height ? height : img.height;
    let ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    let dataURL = canvas.toDataURL();
    return dataURL;
  }
  let image = new Image();
  image.crossOrigin = '';
  image.src = img;
  let deferred = $.Deferred();
  if (img) {
    image.onload = function() {
      deferred.resolve(getBase64Image(image));
    }
    return deferred.promise();
  }
}
```
----
## 13. base64图片下载功能
```javascript
const downloadFile = function(base64, fileName) { //base64图片下载功能
  let base64ToBlob = function(code) {
    let parts = code.split(';base64,');
    let contentType = parts[0].split(':')[1];
    let raw = window.atob(parts[1]);
    let rawLength = raw.length;
    let uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
      uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
      type: contentType
    });
  };
  let aLink = document.createElement('a');
  let blob = base64ToBlob(base64); //new Blob([content]);
  let evt = document.createEvent("HTMLEvents");
  evt.initEvent("click", true, true); //initEvent不加后两个参数在FF下会报错  事件类型，是否冒泡，是否阻止浏览器的默认行为
  aLink.download = fileName;
  aLink.href = URL.createObjectURL(blob);
  aLink.click();
}
```

----
## 14. H5软键盘缩回、弹起回调
```javascript
const h5Resize = function(downCb, upCb) { //当软件键盘弹起会改变当前 window.innerHeight，监听这个值变化 [downCb 当软键盘弹起后，缩回的回调,upCb 当软键盘弹起的回调]
  var clientHeight = window.innerHeight;
  downCb = typeof downCb === 'function' ? downCb : function() {}
  upCb = typeof upCb === 'function' ? upCb : function() {}
  window.addEventListener('resize', () => {
    var height = window.innerHeight;
    if (height === clientHeight) {
      downCb();
    }
    if (height < clientHeight) {
      upCb();
    }
  });
}
```






