//  Destructuring Object to extract values to variables

const fish = { id: 58, name: 'King Hilsha', price: 2000, phone: '018888888888', address: 'Chandpur', dress: 'silver' };

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

const { phone, address, price, dress } = fish;
// console.log(phone, price);
// console.log(dress);


// console.log(dress);
// console.log(dress);
// console.log(dress);
// console.log(dress);


const office = {
    name: 'Amoled Code',
    ceo: { id: 12, name: 'Shuvo', food: 'Kosa mangso' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
};
// const work = office.web.work;
// const framework = office.web.framework;

const { work, framework } = office.web;
const { food } = office.ceo;
const { second, third } = office.web.tech;
console.log(work, framework, food);