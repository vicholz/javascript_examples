//Filter - Create a custom filter to filter out or only return specific values

//Filter empty/false from array
var arr = ["", null, undefined, "true", true, "false", false, 0, "0", 1, "1"];

function filterInvalid(obj){
   return !!obj; // Use OR boolean operator to check if obj is true and return it if it is
   // this is the same as doing this:
   // if (obj === true) return obj;
}

console.log(arr.filter(filterInvalid));
//result = ["true", true, "false", "0", 1, "1"];

//Filter values lower than 10
var arr = [1,4,3,6,9,10,11,50,100];

function filterLessThan10(obj){
   return obj >= 10; // shortcut (obj >= 10) will be true or false, and the obj will be retuned if it is true
   // this is the same as
   // if (obj >= 10){
   //    return obj;
   // }
}

console.log(arr.filter(filterLessThan10));
//result = [10,11,50,100];

// Same as above but with anonymous function
var arr = [1,4,3,6,9,10,11,50,100];

var newArr = arr.filter(function (obj){
   if (obj >= 10){
      return obj;
   }
});

console.log(newArr);
//result = ["true", true, "false", "0", 1, "1"];