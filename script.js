document.getElementById('convertButton').addEventListener('click', function() {
    const tempInput = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(tempInput)) {
        resultDiv.textContent = 'Please enter a valid temperature.';
        return;
    }

    let convertedTemp;

    switch (inputUnit) {
        case 'celsius':
            if (outputUnit === 'fahrenheit') {
                convertedTemp = (tempInput * 9/5) + 32;
            } else if (outputUnit === 'kelvin') {
                convertedTemp = tempInput + 273.15;
            } else {
                convertedTemp = tempInput;
            }
            break;
        case 'fahrenheit':
            if (outputUnit === 'celsius') {
                convertedTemp = (tempInput - 32) * 5/9;
            } else if (outputUnit === 'kelvin') {
                convertedTemp = (tempInput - 32) * 5/9 + 273.15;
            } else {
                convertedTemp = tempInput;
            }
            break;
        case 'kelvin':
            if (outputUnit === 'celsius') {
                convertedTemp = tempInput - 273.15;
            } else if (outputUnit === 'fahrenheit') {
                convertedTemp = (tempInput - 273.15) * 9/5 + 32;
            } else {
                convertedTemp = tempInput;
            }
            break;
    }

    resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(2)}° ${outputUnit.charAt(0).toUpperCase() + outputUnit.slice(1)}`;
});
