// Closure
/*
  - Khái niệm: Nó là 1 hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến bên ngoài phạm vi của nó
  - Ứng dụng:
    + Viết code ngắn gọn hơn
    + Biểu diễn ứng dụng tính Private trong OPP
  - Lưu ý:
    + Biến được tham chiếu (refer) trong closure sẽ không xóa khỏi bộ nhớ khi hàm cha thực thi xong
    + Các khái niệm JS nâng cao rất dễ gây nhầm lẫn
*/

/*
// Ví dụ 1:
function createCounter() {
  let counter = 0

  function increase() {
    return ++counter
  }

  return increase
}

const counter1 = createCounter()

console.log(counter1()) // 1
console.log(counter1()) // 2
console.log(counter1()) // 3
*/

/*
// Ví dụ 2:
function logger(namespace) {
  function createLogger(message) {
    console.log(`[${namespace}] ${message}`)
  }

  return createLogger
}

const infoLogger = logger('Info')
infoLogger('abc')
infoLogger('xyz')

const errorLogger = logger('Error')
errorLogger('abc')
errorLogger('xyz')
*/

/*
// Ví dụ 3:
function createStorage(name) {
  // Trả về dữ liệu về client theo dạng obj
  const store = JSON.parse(localStorage.getItem(name)) ?? {}

  const save = () => {
    // Lưu dữ liệu vào localStorage theo dạng JSON
    localStorage.setItem(name, JSON.stringify(store))
  }

  const obj = {
    get() {
      return store
    },
    getByKey(key) {
      return store[key]
    },
    set(key, value) {
      store[key] = value
      save()
    },
    remove(key) {
      delete store[key]
      save()
    }
  }

  return obj
}

const storage = createStorage('profile_setting')
storage.set('fullName', 'Nguyen Van A')
storage.set('age', 20)
storage.set('gender', 'male')
storage.remove('gender')
console.log(storage.get())
console.log(storage.getByKey('fullName'))

const storage1 = createStorage('profile_setting_1')
storage1.set('fullName', 'Nguyen Van A')
storage1.set('age', 20)
storage1.set('gender', 'male')
storage1.remove('gender')
console.log(storage1.get())
console.log(storage1.getByKey('fullName'))
*/
