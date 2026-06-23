function display(a,b){
    console.log(a,b())
}

display(1, ()=>{
    return "Hello"
})

// Schedulers
var setInter = setInterval(() => {
    console.log("SK")
}, 1000)

setTimeout(()=>{
    console.log("Hello World")
    clearInterval(setInter) 
}, 5000)