// Hoisting - kéo lên, đưa lên
// Khái niệm: Đưa phần khai báo biến hoặc hàm lên đầu phạm vi

// Hoisting với "var" và "function declaration"
/*
// Ví dụ 1 (var):
console.log(age) // undefined
console.log(fullName) // ReferenceError: fullName is not defined

var age = 20
// Lưu ý: Phần khai báo được đưa lên, còn phần gán giá trị thì không
*/

/*
// Ví dụ 2 (function declaration):
console.log(sum(5, 6)) // 11
function sum(a, b) {
  return a + b
}
// Lưu ý: Đối với function thì phần được hoisting đưa lên đầu sẽ là cả hàm sum()
*/

// Hoisting với "let" và "const"
/*
// Ví dụ 1 (let, const tương tự nhau):
console.log(fullName) // ReferenceError: Cannot access 'fullName' before initialization
let fullName = 'Nguyen Van A'
// Lưu ý: Khai báo biến với "let" hoặc "const" khi được hoisting không được tạo giá trị (Khác với khi khai báo biến "var" sẽ được tạo giá trị undefined)
*/

/*
// Ví dụ 2:
const counter1 = makeCounter()

console.log(counter1()) // 1

function makeCounter() {
  let counter = 0

  return increase
  function increase() {
    return ++counter
  }
}
*/