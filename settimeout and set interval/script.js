// setTimeout(() => {
//   console.log("Runs after 2 seconds");
// }, 2000); 


let counter = 0;
let intervalId = setInterval(() => {
  counter++;
  console.log("Running every second", counter);

  // Stop after 5 times
  if (counter === 5) {
    clearInterval(intervalId); // stop the loop
  }
}, 1000);