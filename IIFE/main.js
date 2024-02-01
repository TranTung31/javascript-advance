// IIFE - Immediately Invoked Function Expression
// Là 1 function expression được gọi ngay lập tức



// 1. IIFE trông như thế nào?
(function() {
  console.log("1. This is IIFE!")
})()

// 2. Dùng dấu ; trước IIFE
let course = 'Javascript'

;(function() {
  console.log("2. This is IIFE!")
})()

// 3. IIFE là hàm private
;(function myFunc() {
  console.log("3. This is IIFE!")
})()
// Không thể gọi hàm myFunc bên ngoài IIFE
// myFunc() => TypeError

// 4. Sử dụng IIFE khi muốn che dấu tên hàm, tên biến ở phạm vi global, thường được các thư viện sử dụng
;(function() {
  let fullName = 'abc'
})()
// console.log(fullName) => TypeError

// 5. Ví dụ sử dụng IIFE
;const app = (function() {
  let cars = []
  return {
    get() {
      console.log(cars)
    },
    add(car) {
      cars.push(car)
    },
    update(index, car) {
      cars[index] = car
    }, 
    delete(index) {
      cars.splice(index)
    }
  }
})()

