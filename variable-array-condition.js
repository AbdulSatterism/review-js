// variable and variable naming rule
// array rule
// if else rules

var bottleColor = 'yellow';
var waterQuantity = 1;
var isFull = false;

// Array
var items = ['Name', 'mug', 'pen', 'bottle'];
items.indexOf('bottle'); //it's definen his index number
items.push('Alur Dokan'); // it's added one item in array last element
items.pop(); // it's remove one item from array last item

items.shift('Alor Poth') // it's added one item in array first element
items.unshift() // it's remove one item in array first element


// condition
if (items.length >= 4) {
    console.log('you have too many stuff on your desk')
}
else if (items.length == 4) {
    console.log('you have four stuff');
}
else {
    console.log('wow you have clean')
}