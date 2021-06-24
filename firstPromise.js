async function firstSuccessfulPromise(promiseArray) {
  let ans = await Promise.allSettled(promiseArray).
   then((results) => results.find(result => result.status === 'fulfilled'));
   if(ans) {
     return ans.value;
   } else {
     return undefined;
   }
   
 }
 
 let promise = firstSuccessfulPromise([new Promise((resolve, reject) => reject()), 
               new Promise((resolve, reject) => resolve("Success!"))]);
 promise.then(result => console.log(result));
 
 module.exports.firstSuccessfulPromise = firstSuccessfulPromise;