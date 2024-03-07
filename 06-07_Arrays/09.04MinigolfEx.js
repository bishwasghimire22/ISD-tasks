// Create an array with minigolf results of eight players 
let minigolf = [23, 19, 37, 20, 21, 30, 26, 24];

 // Sort the array in ascending order
 

function showResults() {
    minigolf.sort();

    // Assign the smallest result to a variable
    let smallestResult = minigolf[0];

    // Assign the index of the last array item to a variable
    let lastIndex = minigolf.length - 1;

    // Assign the biggest result to a variable
    let biggestResult = minigolf[lastIndex];

    // Write the answer on the page, in the answer div, as content of the div
    document.getElementById("answer").innerHTML = (`The smallest result is ${smallestResult}(winner)<br>The biggest result is ${biggestResult}`);
}
