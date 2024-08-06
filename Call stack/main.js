// Call stack
function add(a, b) {
  return a + b
}

function average(a, b) {
  return add(a, b) / 2
}

const result = average(10, 20)
console.log("🚀 ~ result:", result)

/*
  Chạy từ global() => average() => add()
  add()
  average()
  global()
*/
