// let arr =[1,2,3,4,5];
//write a program in javascript outPut will be 
//[5,2,3,4,5]
// let a =[1,2,3,4,5];
// let b =arr[0];
// arr[0]=arr[arr.length-1];
// arr[arr.length-1];
// arr[arr.length-1]=b;
// console.log(arr);

// var Employee = { company: 'xyz' } 
// var emp1 = Object.create(Employee); 
// delete emp1.company 
// console.log(emp1.company);

// console.log(0.1+ 0.3);

// const f = void function b() { return 'f'; }();
// console.log(f);


const object = {
    prop1: 1,
    prop2: 2 
  }
  
  object.prop1 = 5;   // object is still mutable!
  object.prop3 = 3;   // object is still mutable!
  
  console.log(object);