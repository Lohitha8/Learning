console.log('*********Q1********')

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllValues(obj) {
 console.log(Object.values(obj))
}
printAllValues(obj);

console.log('*********Q2********');

var obj = {name : 'RajiniKanth', age : 33, hasPets : false};
function printAllkeys(obj) {
 console.log(Object.keys(obj))
}
printAllkeys(obj);

console.log('*********Q3********');

var obj = {name: 'ISRO', age: 35, role: 'Scientist'};
function convertListToObject(obj) {
    console.log(Object.entries(obj));
}
convertListToObject(obj);

console.log('*********Q4********');

var arr = ['GUVI', 'I', 'am', 'a geek'];
function transformFirstAndLast(arr) {
    var myObject = {};
    key = arr.shift();
    value = arr.pop();
    myObject[key] = value
    console.log(myObject);
}
  transformFirstAndLast(arr);

console.log('*********Q5********');

var arr = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];
function fromListToObject(arr) {
 var newObject = {};
 newObject = Object.assign({}, arr);
 console.log(newObject);
 }
fromListToObject(arr);

console.log('*********Q6********');
