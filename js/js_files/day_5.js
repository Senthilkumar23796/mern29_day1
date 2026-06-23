console.log("API Concept")

//Fetch method
// 1. Initially results in Pending State
// 2. The Promises have a 3 State
//     a. Pending
//     b. Fulfilled or Success
//     c. Rejected or Failed
//console.log(fetch("https://dummyjson.com/users"))
// Now in console the Promise Pending State

// Now Handle the Promises we have 2 Methods
// 1. .then()  and  2. .catch()
// 2. async and await
console.log("Before Fetch") 
// Fetch and then and Catch method
// fetch("https://dummyjson.com/users").then((res)=>{
//     return res.json();
// }).then((data) => {
//     console.log(data.users[0].firstName)
// }).catch((err)=>{
//     console.log(err)
// })

const fetchData = async () => {
    try{
        const res = await fetch("https://dummyjson.com/uses")
    //console.log(await res.json())
    const data = await res.json()
    console.log(data.users[0].lastName)
    }catch(error){

    console.log("error")

    }
}

fetchData()