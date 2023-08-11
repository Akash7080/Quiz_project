//var arr=[10,20,50,60,70,8,88];
/*
for(var i=0;i<=6;i++){
    console.log(arr[i]);
}
 
// console.log(arr.length);
for(var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/
//var arr=new Array(5,7,10,44,8,2,12,50)
/*
for(var i in arr){
    console.log(i);
}

for(var val of arr){
    console.log(val);
}
*/ 
/*
var arr=[10,7,18,5,44,99,6,15,2,17]
for(var i=0;i<arr.length;i++){
    for(var j=i+1;j<arr.length;j++){
        if(arr[i]<arr[j]){
            var tmp=arr[j]
            arr[j]=arr[i]
            arr[i]=tmp
        }
    }
}
console.log(arr);
 
var arr=[
        [1,2,3,4,11],
        [5,6,7,8,11],
        [10,11,12,15,11]];
    // console.log(arr[1][2]);
    for(var i=0;i<arr.length;i++){
        for(j=0;j<arr[0].length;j++){
            console.log(arr[i][j]);
        }
        console.log("\n");
    }
   
   var obj={
    name:"amit",
    age:20,
    city:"noida"
   }
//    console.log(obj);
console.log(obj.name+" "+obj.age+" "+obj.city);

var obj=[
    {name:"amit",age:30,city:"noida1"},
    {name:"hari",age:31,city:"noida2"},
    {name:"sumit",age:32,city:"noida3"},
    {name:"arti",age:33,city:"noida4"},
    {name:"rani",age:34,city:"noida5"}
]
// console.log(obj);
// console.log(obj[0]);
// console.log(obj[0].name);
for(var i=0;i<obj.length;i++){
    console.log(obj[i].name+" "+obj[i].age+" "+obj[i].city);
}

var a=100
console.log(`<h2>dffsdfdsf ${a}</h2>
<h3>adasd</h3>`);
 */

// function 
// 1-function with no argument and not return value
// 2-function with  argument and not return value
// 3-function with  argument and with return value
// 4-function with no argument and with return value
/*
function_name()
function function_name(){
    statement 
}
function_name()

show()
function show(){
    console.log("show called");
}
show()
show()
show()
 
// function user(name,age){
//     console.log("User Data-",name," age=",age);
// }
// user('amit',30)
// user('sumit',35)

// function data(a,b){
    console.log(a,b);
    // console.log(arguments[2],arguments[3],arguments[4],arguments[5]);
// }
// data(10,20,30,40,50,60)

// function data(a,b,...rest){
//     console.log(a,b);
//     // console.log(rest);
//     console.log(rest[2],rest[3]);
// }
// data(10,20,30,40,50,44,22,22)

// function display(a,b,c=100){
//     console.log(a,b,c);
// }
// display(10,20)
// display(50,70,80)