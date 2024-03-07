// Randomize the pips once

// Set the count to be one (now you have randomized once)

// Repeat as long as (pips are not equal) 

    // Randomize again
    
    // Increment counter by one
// Write the answer (including the count) to the html page (answer div)

let count = 1;
do {
  
var pips1 = Math.floor(Math.random() *5) +1;
var pips2 = Math.floor(Math.random() *5) +1;
  count++;
} while (pips1 !== pips2);

document.getElementById("answer").innerHTML = `Same dice pips: ${pips1} and ${pips2}<br>There were ${count} randomization rounds until we got the same pips.`;
//This will work too!!
/*document.getElementById("answer").innerHTML = "Same dice pips:" + " " + pips1 + " " + "and" + " " + pips2 +"<br>" +
"There were" + " " + count + " " + "randomization rounds until we got the same pips.";*/