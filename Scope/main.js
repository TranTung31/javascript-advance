// Scope in Javascript

/*
  - Có 3 loại phạm vi:
    + Global scope (Toàn cầu)
    + Code block (Khối mã): let, const
    + Local scope (Hàm): var, function
  - Khi gọi hàm thì luôn có 1 phạm vi mới được tạo ra
  - Các hàm có thể truy cập các biến trong phạm vi của nó và bên ngoài nó
*/

// * Ví dụ biến global
var message = 'Học Javascript nâng cao'

function logger() {
  console.log(message)
}

logger()

// * Ví dụ biến code block (Khối mã): Tất cả những đoạn code được viết trong dấu { } sẽ gọi là code block
// Chú ý: Sử dụng var trong code block sẽ vẫn có thể truy cập được bên ngoài phạm vi { }
{
  const age = 18
  console.log(age)
}

// * Ví dụ biến local scope (Hàm)
function logger1() {
  const messageLogger1 = 'Hello world'
  console.log(messageLogger1);
}

logger1();
// console.log(messageLogger1) => Error
// Khi hàm logger1 được gọi => khối code trong logger1 sẽ được thực thi => tạo ra phạm vi local scope
// => biến messageLogger1 chỉ có thể được sử dụng trong hàm