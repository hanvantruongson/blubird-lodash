const { compact } = require('lodash');
var lodash = require('lodash');
var _ = require('lodash/core');


// lodash.assign
function obj1() {
    this.name = 'Son';
    this.age = 24;
}
let obj2 = {address: 'Da Nang' };
let obj3 = {job: 'IT', sex: 'male', phone: '0905'};
function assign() {
    let full = lodash.assign(obj2, obj3);
    console.log(full);
}
assign();
function assign2() {
    let name = lodash.assign(new obj1, obj2);
    console.log(name);
}
assign2();


// lodash.get
console.log( lodash.get(obj3, 'job'));


// lodash.pick
console.log(lodash.pick(obj3, ['job', 'phone']))


// lodash.merge
console.log(lodash.merge(obj2, obj3));
console.log(lodash.merge(obj3,new obj1));


// lodash.map
function dienKien(n) {
    if (n > 5)
        return n;
    else
        return 'Nho hon 5';
}
console.log( _.map([4,6], dienKien));


// lodash.filter
var collection = [
    {name: 'Son', age: 20, },
    {name: 'Tran', age: 12}
]
var kiemtra = _.filter(collection, function(c){
    return c.age > 18 ;
})
console.log(kiemtra);


// lodash.omit
var object = {'name': 'Hoang', 'age': 20, 'address': 'Ha Noi'}
console.log(lodash.omit(object, ['address', 'age'])) ;


// lodash.reduce
console.log(_.reduce([1, 2], function(sum, n) {
    return sum + n;
  }, 0))


// lodash.flatten
var mang = _.flatten([1, [2, [3, [4]], 5]]);
console.log(mang)