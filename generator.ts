// 1: Generator 函数是能够暂停和恢复运行的函数
// 2:遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
// 3:下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
// 4:如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
// 5:如果该函数没有return语句，则返回的对象的value属性值为undefined。
// Iterator 的作用有三个：
// 一是为各种数据结构，提供一个统一的、简便的访问接口；
// 二是使得数据结构的成员能够按某种次序排列；
// 三是 ES6 创造了一种新的遍历命令for...of循环，Iterator 接口主要供for...of消费。（意思就是任何自己定义的数据结构都可以用for of来循环遍历）
// 原生具备 Iterator 接口的数据结构如下。

// Array
// Map
// Set
// String
// TypedArray
// 函数的 arguments 对象
// NodeList 对象
// Generator 函数就是遍历器生成函数，因此可以把 Generator 赋值给对象的Symbol.iterator属性，从而使得该对象具有 Iterator 接口。
// for...of循环可以自动遍历 Generator 函数运行时生成的Iterator对象，且此时不再需要调用next方法。
let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

iter.next() // { value: 'a', done: false }
iter.next() // { value: 'b', done: false }
iter.next() // { value: 'c', done: false }
iter.next() // { value: undefined, done: true }