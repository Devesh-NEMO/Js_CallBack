console.log("start")

setTimeout(function cb (){
    console.log("Callback");
}, 5000 );

console.log("end");

function hello(x){
    console.log("hello World!");
    x()
}

hello(function x() {
    console.log("hello x");
});

