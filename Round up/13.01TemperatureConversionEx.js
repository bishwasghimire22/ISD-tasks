function convert() {
    var conversionType = document.getElementById("conversion").value;
    var temperature = Number(document.getElementById("temperature").value);
    var resultElement = document.getElementById("result");
    
    if (conversionType === "celsius") {
        // Convert Fahrenheit to Celsius
        var celsius = (temperature - 32) * 5 / 9;
        resultElement.value = celsius.toFixed(0);
    } else if (conversionType === "fahrenheit") {
        // Convert Celsius to Fahrenheit
        var fahrenheit = (temperature * 1.8) + 32;
        resultElement.value = fahrenheit.toFixed(0);
    }
}