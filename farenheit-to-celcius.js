// farenheit to celcius with function

function farenheitToCelcius(temp) {
    let celcius = (temp - 32) * 5 / 9;
    return celcius;
}
let celciusTemp = 78.8;
let result = farenheitToCelcius(celciusTemp);
console.log("Celcius tempreture is :", result)