/**
 * 1. 实现状态切换
 * 2. 实现then的异步执行
 * 3. 实现resolve的值是promise实例
 * 4. 实现then的链式调用
 * 5. 实现其他方法
 */

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class Promise2 {
  constructor(execute) {
    this.state = PENDING
    this.value = ''
    this.reason = ''
    this.onFulfilledCallBacks = []
    this.onRejectedCallBacks = []
    const resolve = (value) => {
      if (value instanceof this.constructor) {
        value.then(resolve, reject)
        return
      }
      if (this.state === PENDING) {
        this.state = FULFILLED
        this.value = value
        setTimeout(() => {
          this.onFulfilledCallBacks.forEach(callback => {
            callback(this.value)
          })
        });
      }
    }
    const reject = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        setTimeout(() => {
          this.onRejectedCallBacks.forEach(callback => {
            callback(this.reason)
          })
        });
      }
    }
    execute(resolve, reject)
  }

  static all(promises) {
    return this((resolve, reject) => {
      const promiseNum = promises.length
      let resolvedNum = 0
      let resolvedValues = new Array(promiseNum)
      for (let i = 0; i < promiseNum; i++) {
        this.resolve(promises[i]).then(val => {
          resolvedNum++
          resolvedValues[i] = val
          if (resolvedNum === promiseNum) {
            resolve(resolvedValues)
          }
        },
        reason => {
          reject(reason)
        })
        
      }
    })
  }

  then(onFulfilled, onRejected) {
    return new this.constructor((resolve, reject) => {
      if (this.state === FULFILLED) {
        setTimeout(() => {
          try {
            const callbackValue = onFulfilled(this.value)
            resolve(callbackValue)
          } catch (error) {
            reject(error)
          }
          
        });
      }
      if (this.state === REJECTED) {
        setTimeout(() => {
          try {
            const callbackValue = onRejected(this.reason)
            resolve(callbackValue)
          } catch (error) {
            reject(error)
          }
          
        });
      }
      if (this.state === PENDING) {
        this.onFulfilledCallBacks.push(() => {
          try {
            const callbackValue = onFulfilled(this.value)
            resolve(callbackValue)
          } catch (error) {
            reject(error)
          }
        })
        this.onRejectedCallBacks.push(() => {
          try {
            const callbackValue = onRejected(this.reason)
            resolve(callbackValue)
          } catch (error) {
            reject(error)
          }
        })
      }
    })
  }
}



let p = new Promise2((resolve,reject) =>{
  setTimeout(()=>{
    resolve(1)
  },1000)
})
p.then(val => {
  console.log(val);
  return new Promise2((resolve) => {
    setTimeout(()=>{
      resolve(2)
    },1000)
  })
}).then(val => {
  console.log(val);
  return 3
}).then(val => {
  console.log(val);
})
console.log(p);