// Task 01: Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.
// async function fun  (arr){
//     for (let i = 0; i < arr.length; i++) {
  
//     console.log(arr[i]);
//     await new Promise((resolve) => setTimeout(resolve, 1000));
// }}
// console.log(fun(["yoser","souha","nour"]))  


// Task 02: Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.
//async function task () { 
  // let mydata= await fetch ("https://api.github.com/users/yosser16")
 // console.log( await mydata.json() ); 
 
//} 
//task() 
// Task 03 : Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
  //01  async function task () { 
  //  let mydata= await fetch ("https://api.githube.com/users/yosser16")
   //try { 
    
    // console.log( await mydata.json() ); 
  // } catch (error) {
     
  //   console.log( 'the error is ${error} ');
  // }
  //} 
  //task()  
   // 02 :  Write a function chainedAsyncFunctions that calls three separate async functions sequentially. Each function should log a message after a delay of 1 second. Chain these functions using await.
//   function function1  (){ 
//     console.log("this is function one ");
//    }
//    function function2  (){
//     console.log("this is function two ");
//    }
//    function  function3 (){
//     console.log("this is function three ");
//    } 
//  async function delay(duration) {
//        return new Promise((resolve) => {
//         setTimeout(resolve, duration);
//       });
//     }
    
//      async function chained() {
//        await delay(1000);
//        function1();
//       await delay(1000);
//     function2();
//       await delay(1000);
//        function3(); } 
//        chained (); 

   // task 4 : Task 04: Awaiting Concurrent Requests: Create an async function concurrentRequests that makes two API calls concurrently using Promise.all(). Log the combined results after both requests have resolved.
//  async function  concurrentRequests  (){
//     let first = await fetch  ("https://api.github.com/users/yosser16")
//    let second =  await  fetch ("https://api.github.com/users/BoubakerSaif") 
//    let firstob = await first.json(); 
//    let secondob = await second.json();   
//    console.log(await Promise.all([firstob, secondob]));
//    } 
   
//    concurrentRequests() 

   //task 5 : 
    // async function parallelCalls () {
    //     let urls =["https://api.github.com/users/yosser16","https://api.github.com/users/BoubakerSaif"] ; 
    //     let promises= urls.map((url)=>{
    //         return fetch(url).then((response)=> response.json())
    //     });
    //     let data =await Promise.all (promises) ; 
    //     console.log(data);
    // } 
    // parallelCalls () 