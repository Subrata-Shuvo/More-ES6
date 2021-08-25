class Support {
    name;
    role = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'Start a meet session');
    }
}
const aamir = new Support('Aamir Khan', 'bd');
const salman = new Support('Sallu vai', 'dubai');
aamir.startSession();
salman.startSession();
// console.log(aamir, salman);


