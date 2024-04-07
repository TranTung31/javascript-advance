// Primitive and References types

/*
  - Value types (Primitive data types) Kiểu dữ liệu nguyên thủy (tham trị)
    + String
    + Number
    + Boolean
    + BigInt
    + Symbol
    + undefined
    + null
  - Reference types (Non-primitive data types) (tham chiếu)
    + Object
    + Array
    + Function
*/

/*
// Ví dụ 1 (value types):
let a = 1
let b = a

a = 2

console.log('a = ', a) // 2
console.log('b = ', b) // 1
*/

/*
// Ví dụ 2 (reference types):
// Khi khai báo biến a bằng 1 object thì nó sẽ lưu địa chỉ vùng nhớ vào biến a
let a = {
  name: 'Nguyen Van A'
}

// Khi gán biến a cho biến b thì thực chất nó sẽ gán địa chỉ vùng nhớ của biến a cho biến b => cho phép biến b có thể truy cập vào cùng 1 vùng nhớ với a => b.name sẽ sửa đổi giá trị trong biến a
let b = a
b.name = 'Nguyen Van B'

console.log('a = ', a) // { name: 'Nguyen Van B' }
console.log('b = ', b) // { name: 'Nguyen Van B' }
*/

/*
// Ví dụ 3 (reference types):
let a = {
  name: 'Nguyen Van A'
}

// Trường hợp 1: Sửa đổi vẫn ảnh hưởng tới object ban đầu
// function createObj(obj) {
//   obj.name = 'Nguyen Van B'
//   return obj
// }

// Trường hợp 2: Sửa đổi không ảnh hưởng tới object ban đầu
function createObj(obj) {
  // const newObj = JSON.parse(JSON.stringify(obj)) // Clone sâu
  const newObj = {...obj} // Clone nông
  newObj.name = 'Nguyen Van B'
  return newObj
}

const result = createObj(a)
console.log('a = ', a)
console.log('result = ', result)
*/