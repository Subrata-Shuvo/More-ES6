/* Map mane holo -- kono ekta array ache, sei array'r moddhe loop through kore prottek ta element theke kichu ekta ( +, -, *, /, %, square........ onno kichu o hote pare) korba,, then setar output/ hisebe ekta array paba,{Mane result ta return korbe}
*/

// Map er asol kaj 3 ta,, se gulu holo 
// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array


// finiding length of each item from an array
const friends = ['Tom hanks', 'Tom cruise', 'Tom brady', 'Tom brady'];
const fLengths = friends.map(friend => friend.length);
// console.log(fLengths);


const products = [
    { name: 'water bottle', price: 50, color: 'blue' },
    { name: 'Mobile Phone', price: 12550, color: 'black' },
    { name: 'Smart watch', price: 2550, color: 'black' },
    { name: 'sticky note', price: 50, color: 'red' },
    { name: 'water glass', price: 50, color: 'white' }
];

const productNames = products.map(product => product.name);
const productPrices = products.map(productPrice => productPrice.price)
console.log(productPrices)

/* we can also console log the item
products.map(product => console.log(product)); */

// FOR EACH -- if we dont need to return the value using map,, we can use for each

/* Difference between map and forEach is -- 

// map does the return the full array,
// forEach wont return the value */

products.forEach(product => console.log(product));




