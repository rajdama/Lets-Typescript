"use strict";
// function addTwo(num){  !!!!wrong way!!!! 
//     return num+2
// }
Object.defineProperty(exports, "__esModule", { value: true });
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function signUp(name, email, isPaid) {
    return 1;
}
signUp("raj", "raj@gmail", true);
var arr = [1, 2, 3];
arr = arr.map(function (val) {
    return val + 1;
});
console.log(arr);
