// Function returns the four digit key codes between min-max 
/* function generateKeyCode(min, max) {
   
    // Randomize the key code with Math.random() function
   

    // Convert a number to a string with the toString() method.
    // Use the length property of the text string.
    
    // Add leading zeros to keyCode, if needed (eg. 9 -> 0009)
    // with loop
    
    // Return four digit key code as a text
    
}


// For hundred times

    // Call generateKeyCode() function 
    // Print key code to the document
    
    // If ordinal number of the keyCode MODULO (%) 10 equals zero

        // Print html line break to the document
        
    }
} */
//Show result in html page (div with id value "keycodes")

// Function returns the four-digit key codes between min-max 
function generateKeyCode(min, max) {
    // Randomize the key code with Math.random() function
    let keyCode = Math.round((Math.random() * (max - min)) + min);

    // Convert a number to a string with the toString() method.
    // Use the length property of the text string.
    let keyCodeString = keyCode.toString();

    // Add leading zeros to keyCode, if needed (e.g., 9 -> 0009) with a loop
    while (keyCodeString.length < 4) {
        keyCodeString = '0' + keyCodeString;
    }

    // Return four-digit key code as a text
    return keyCodeString;
}

// For a hundred times
for (let i = 1; i <= 100; i++) {
    // Call generateKeyCode() function
    let keyCode = generateKeyCode(0, 9999);

    // Print key code to the document
    document.getElementById('keycodes').innerHTML += keyCode + ' ';

    // If the ordinal number of the keyCode MODULO (%) 10 equals zero
    if (i % 10 === 0) {
        // Print HTML line break to the document
        document.getElementById('keycodes').innerHTML += '<br>';
    }
}