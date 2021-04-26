const promise = new Promise((resolve, reject) => {
    // Note: resolve chỉ cho phép truyền đúng 1 param
    return resolve(27);
    return reject('lỗi');
  })
  promise.then(number => console.log(number)) // 27
  promise.catch(err => console.log(err)) // lỗi

// var promise = new Promise((resolve,reject)=>{
//     var n = 0;
//     if(n == 1){
//         return resolve([{
//             name:"oanh",
//         },{
//             name:"sơn"
//         }])
//     }
//     else{
//         return reject(new Error('lỗi rồi nè !'))
//     }   
// })
// promise.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("done!");
// });


// function demopromise(){
//   var promise = new Promise((resolve, reject) => {
//       var i = 1;
//       if(i == 1){
//           return resolve('number 1');
//       }
//       else{
//           return reject(new Error('loi roi'));
//       }
//   });
//   promise.then((data) => {
//       console.log(data);
//   }).catch((err) => {
//       console.log(err);
//   }).finally(() => {
//       console.log("ket thuc");
//   });
// }
// demopromise();

