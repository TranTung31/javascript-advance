/*
  Đề 1:
    - Cho 1 mảng arr = [1, 2, 3]
    => result: arr1 = [1, 2, 3, 1, 2, 3]
*/

// // Cách 1:
// const arr = [1, 2, 3]
// const result = [...arr, ...arr] // Spread
// console.log('result 1: ', result)

// // Cách 2:
// const arr = [1, 2, 3]
// let result = []
// for (let i = 0; i < 2; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     // result.push(j + 1)
//     result = [...result, j + 1]
//   }
// }
// console.log('result 2: ', result)

/*
  Đề 2:
    - Cho 1 mảng arr = [
      {
        _id: 'id-1',
        value: 'value id-1'
      },
      {
        _id: 'id-2',
        value: 'value id-2'
      },
      {
        _id: 'id-3',
        value: 'value id-3'
      }
    ]
    - Cho 1 mảng arrOrderIds = ['id-2', 'id-3', 'id-1']
    => result: arr1 = [
      {
        _id: 'id-2',
        value: 'value id-2'
      },
      {
        _id: 'id-3',
        value: 'value id-3'
      },
      {
        _id: 'id-1',
        value: 'value id-1'
      }
    ]
    - Chú ý: Sắp xếp mảng cũ dựa trên mảng arrOrderIds sao cho được mảng mới không ảnh hưởng tới mảng
    ban đầu
*/

// // Cách 1:
// const arr = [
//   {
//     _id: 'id-1',
//     value: 'value id-1'
//   },
//   {
//     _id: 'id-2',
//     value: 'value id-2'
//   },
//   {
//     _id: 'id-3',
//     value: 'value id-3'
//   }
// ]

// const arrOrderIds = ['id-2', 'id-3', 'id-1']

// const mapOrder = (arr, arrOrderIds, key) => {
//   if (!arr || !arrOrderIds || !key) return

//   const arrClone = [...arr]
//   return arrClone.sort((a, b) => arrOrderIds.indexOf(a[key]) - arrOrderIds.indexOf(b[key]))
// }
// const result = mapOrder(arr, arrOrderIds, '_id')
// console.log('result: ', result)
// console.log('arr: ', arr)