import { call, put, takeEvery } from 'redux-saga/effects'
// import Api from '...'
// Generator函数：可以暂停执行，所以前面要加*号与普通函数以示区别
// 整个 Generator 函数就是一个封装的异步任务，或者说是异步任务的容器。异步操作需要暂停的地方，都用 yield 语句注明。
// Generator 函数可以暂停执行和恢复执行
function* gen(x:number){
    var y = yield x+2;
    return y
}
var g = gen(1);
g.next() // { value: 3, done: false }
g.next() // { value: undefined, done: true }