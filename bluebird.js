const { resolve } = require('bluebird');
const Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));


//new promise .then .catch .finally .join 
function sum(a,b) {
    return new Promise( (resolve, reject) => {
        if(a === undefined && b === undefined)
            reject('Input undefined');
            if(a === null && b === null)
            reject('Input null');
            if(typeof a !== 'number' && typeof b !== 'number')
            reject('Input not number');
            resolve(a + b);
        }).then(result => console.log('Sum = ' + result))
        .catch(reason => console.log(reason))
        .finally(() => console.log('Ket thuc chuong trinh'));
}
function add() {
    function geta(){
        return 2;
    }
    function getb() {
        return 8;
    }
    Promise.join(geta(), getb(), sum(geta(), getb()), function(a, b, sum){
        console.log("Joined: " + 'a = '+ a + ", " + 'b = ' + b)});
    Promise.props({
        a : geta(),
        b : getb()
    }).then(result => {console.log('Props: ' + result.a + ', ' + result.b)})
}
add()


//.all .spread
function checkcontent() {
    Promise.all([
        fs.readFileAsync('file1.txt'),
        fs.readFileAsync('file2.txt')
    ]).spread( (file1, file2) => {
        if(file1.equals(file2)){
            console.log('Trung nhau');
        }
        else
        console.log('Khong trung');
    })
}
checkcontent();


//.error
function showerr() {
    fs.readFileAsync("file1.txt").then( (readfile) => {
        console.log("Doc file thanh cong")
    }).error( (e) => {
        console.error("unable to read file, because: ", e.message);
    });
}
showerr();


//.try
function guessMyName(name){
    return Promise.try(() => {
        if(name !== "Son"){
            throw new Error(name + "khong phai ten cua toi")
        }
        else{ 
            console.log('Chao Son');
    }})
}
guessMyName('Son');


// promise.method
function promiseMethod() {
    const hello = () =>
    {
        return "Hello";
    }
    const promiseHello = Promise.method(hello);
    
    promiseHello().then(data => console.log(data));
}
promiseMethod();


//.resolve, 
function promiseResolve() {
    Promise.resolve([1,2,3]).get(2).then((x) => {
        console.log(x);
    })
}
promiseResolve();


//.reject
function promiseReject() {
    Promise.reject([1,2,3]).catch((x) => {
        console.log("Loi");
    })
}
promiseReject();


//.all
function promiseAll() {
    var arr = [];
    for (var i = 0; i < 10; ++i) {
        arr.push(("Number " + i));
    }
    Promise.all(arr).then(function() {
        console.log(arr);
    });
}
promiseAll();


//.isFulfilled .isRejected .isPending .isCancelled .value .reason
function promiseInspection() {
    var myPromise = new Promise((resolve,reject) => {
            resolve("Thanh cong");
            reject('Loi');
    });
    myPromise.then((data) => {
        console.log("Fulfilled:", myPromise.isFulfilled());
        console.log("Rejected:", myPromise.isRejected());
        console.log("Cancelled:", myPromise.isPending());
        console.log("Cancelled:", myPromise.isCancelled());
        console.log("Value:", myPromise.value());
    }).catch((err) => console.log("Reason:", myPromise.reason()))
}
promiseInspection();


//promise.any
function promiseAny() {
    Promise.any([
        new Promise(reject => setTimeout(reject, 3000, '✗')),
        new Promise(resolve => setTimeout(resolve, 2000, 'I got a job!')),
        new Promise(resolve => setTimeout(resolve, 1000, 'I could have gotten a better job!')),
        new Promise(reject => setTimeout(reject, 1000, '✗')),
    ]).then(function(value) {
        console.log(value)
    });
}
promiseAny();


//promise.some
function promiseSome() {
    Promise.some([
        {name: 'Tran'},
        {name: 'Vu'},
        {name: 'Son'},
        {name: 'Trung'}
    ], 2).spread(function(first, second) {
        console.log(first, second);
    });
}
promiseSome();


//promise.map
function promiseMap() {
    Promise.map([1,2,3], num => {
        return num+1;
    }).then(numbers => {
        console.log(numbers);
    })
}
promiseMap();


//Promise.reduce
function promiseReduce() {
    Promise.reduce([9, 5, 7], (num, total) => {
            return total + num;
    }, 0).then((total) => {
        console.log(total);
    });
}
promiseReduce();


//Promise.filter
function promiseFilter() {
    Promise.filter([1, 2, 3], num => {
        return num % 2 === 0;
    }).then(numbers => {
        console.log(numbers);
    })
}
promiseFilter();


//Promise.each
function promiseEach() {
    var items = ["A", Promise.delay(1000, "B"), Promise.reject("Loi va dung lai"), "C"];
    Promise.each(items, (item) => {
        return Promise.delay(2000).then(() => {
            console.log("On iterator: " + item);
        });
    }).catch((rejection) => {
        console.log("Catch: " + rejection);
    });
}
promiseEach();


//Promise.mapSeries
function promiseMapSeries() {
    function test(time){
        return (value) => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('Time is', time, 'ms');
                    resolve(time);
                },time);
            })
        }
    }
    Promise.resolve([test(2000),test(1200),test(2500),test(1)]).mapSeries((asyncMethod) =>{
        return asyncMethod();
    }).then((result) =>{
        console.log(`result`,result);
    })
}
promiseMapSeries();


//Promise.race
function promiseRace() {
    Promise.race([Promise((resolve) => setTimeout(resolve, 700, 'slow'))],
    [new Promise((resolve) => setTimeout(resolve, 500, 'slow'))],
    [new Promise((resolve) => setTimeout(resolve, 100, 'quick'))])
    .then((value) => console.log(value));
}
promiseRace();