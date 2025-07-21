var a = 10
console.log(a)
var a = 100
console.log(a)
var a = "hello"
console.log(a)
var a = "World"
console.log(a)

console.log(x)
var x = 0

 
let n = 57;

if (n > 50){
    console.log("n is greater then 50")
}
else{
    console.log("n is less then 50 ")
}

console.log(" ")

let bb=100
{
    var aa=10
    let y =11


    console.log(aa)
    console.log(y)
}
console.log(bb)


console.log("----------Closure----------")

function outer() {
  let name = "Kael";  
  function inner() {
    console.log("Hello " + name); 
  }
  return inner;
}

const greet = outer(); 
greet(); 


function ab(){
    setTimeout(function(){
        console.log()
    }
)
}


var func = function (xyz){
    console.log(xyz);

}
func();


console.log("start")

setTimeout(function abc(){
    console.log("setTimeOUt")
},5000);
console.log("End")
console.log("hello world")

function greetUser(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greetUser("Kael", sayBye);


function downloadFile(url, callback) {
  console.log("Downloading from", url);
  setTimeout(() => {
    console.log("Download complete!");
    callback(); // call the callback after download
  }, 2000);
}

downloadFile("https://example.com/video", () => {
  console.log("Now playing the video...");
});


//----------- promises

const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("✅ Promise resolved!");
  } else {
    reject("❌ Promise rejected!");
  }
});

// Using `.then()` and `.catch()`
myPromise
  .then((message) => {
    console.log(message); // ✅ Promise resolved!
  })
  .catch((error) => {
    console.error(error); // ❌ Promise rejected!
  });


  // setTimeOut

  function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("📦 Data loaded!");
    }, 2000);
  });
}

fetchData().then((data) => {
  console.log(data); // after 2s: 📦 Data loaded!
});


// -- Fake API

function getUserData(username) {
  return new Promise((resolve, reject) => {
    if (!username) {
      reject("Username is required");
    } else {
      setTimeout(() => {
        resolve({ name: username, id: 1 });
      }, 1500);
    }
  });
}

getUserData("Kael")
  .then((user) => {
    console.log("User:", user);
  })
  .catch((err) => {
    console.error(err);
  });
