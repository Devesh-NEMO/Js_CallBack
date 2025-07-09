console.log("start")

setTimeout(function cb (){
    console.log("Callback 'output after 5 seconds' ");
}, 5000 );

console.log("end");

function hello(x){
    console.log("hello World!");
    x()
}

hello(function x() {
    console.log("hello x");
}, 10000);



const arr = [5,4,9,2,8]

function double(x){
    return x * 2;
}

function triple(x){
    return x * 3;
}
function binary(x){
    return x.toString(2)
}

const output = arr.map(double);
const output1 = arr.map(triple);
const output2 = arr.map(binary);

console.log(output)
console.log(output1)
console.log(output2)
