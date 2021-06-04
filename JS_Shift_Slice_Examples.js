// Shift - Take the first item out of the array and return it. - WARNING this modifies the original array. You should use slice to make a copy if that is what you need.
// array.shift() removed the first item from the array and returns the item which was removed.
// Slice is similar to shift but it does not modify the original object. It returns a copy.
// array.slice(N) returns the array without the N first items. If 0 or empty it will return the full array.
// array.slice(-N) retuns the last N items. -1 is the last, -2 is the last 2.

var arr = ["one","two","three","four","five"];

var arrCopy = arr.slice(1); //Make a copy in case you need to keep the original - minus the first item
console.log(arrCopy);
//result = ["two","three","four","five"]

var shiftedItem = arrCopy.shift();
console.log("Got item: " + shiftedItem + " - array is now: " + arrCopy);
//result = Got item: two - array is now: three,four,five