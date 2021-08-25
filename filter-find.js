/*filter helps to select the spsecific items depending on some conditions

// Filter return the reslt with full element in an array
and if we are seraching for a item which is not in the array FIND will return the value as a empty array.

Filter shows the output with all the items which we searched for

*/

const numbers = [14, 12, 13, 14, 25, 16, 27, 38, 49, 10];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 20);
// console.log(smallNumbers);



const products = [
    { name: 'water bottle', price: 50, color: 'blue' },
    { name: 'Mobile Phone', price: 12550, color: 'black' },
    { name: 'Smart watch', price: 2550, color: 'black' },
    { name: 'sticky note', price: 50, color: 'red' },
    { name: 'water glass', price: 50, color: 'white' }
];
const expensive = products.filter(product => product.price > 100);
// console.log(expensive);

const black = products.filter(product => product.color == 'yellow');
// console.log(black);


/* FIND -- does the same job of filter but in the time of showing output it returns only the element where filter return the full array

and if we are seraching for a item which is not in the array FIND will return the value as undefined.

Find shows the output with only the first matched item which we searched for
*/

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem);
