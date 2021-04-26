var fs = require("fs");
const callbackReadFile = (err, filedata) => {   
    if (err) return console.error(err);   
    console.log(filedata.toString());   
}
//Đọc file bằng hàm readFile
fs.readFile('file1.txt', callbackReadFile);  
 
console.log('Kết thúc chương trình')

// function first(){
//     // Mô phỏng delay code
//     setTimeout( function(){
//         console.log("Một");
//     }, 5000 );
// }
// function second(){
//     console.log("Hai");
// }
// first();
// second();