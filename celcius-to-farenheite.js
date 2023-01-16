// celcius to farenheite
/*
let c = 26;
let f = (c * 9 / 5) + 32;
console.log("farenheite scale tempreture is :", f, "F")
*/
// with function

function celciusToFarenheit(tempreture) {
    let farenheite = (tempreture * 9 / 5) + 32;
    return farenheite;
}
let celciusTempreture = 26;
let result = celciusToFarenheit(celciusTempreture);
console.log(result, "F")