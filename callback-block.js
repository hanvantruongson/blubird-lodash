var fs = require("fs");
var data = fs.readFileSync('file1.txt');
console.log(data.toString());
console.log("Ket thuc chuong trinh.");