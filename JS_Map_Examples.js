//Map - Apply or run a function for each item/object in a list
var arr = [0,1,2,3,4,5];

function double(obj){
   return obj * 2;
}

console.log(arr.map(double));
//result = [0,2,4,6,8,10]

// Map - Same as above but with anonymous function
var arr = [0,1,2,3,4,5];

var newArr = arr.map(function (obj){
   obj = obj * 2;
   return obj;
});

console.log(newArr);
//result = [0,2,4,6,8,10];