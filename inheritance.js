class TeamMember {
    name;
    role = 'Support web dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}



class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address)
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, 'Start a meet session');
    }
}

class StudentCare extends TeamMember {
    buildARoutine(student) {
        console.log(this.name, 'Build a routine', student);
    }
}

class NaptuneDev extends TeamMember {
    codeEditor;
    constructor(name, address, editor) {
        super(name, address)
        this.codeEditor = editor;
    }
    releaseApp(version) {
        console.log(this.name, 'release app version', version);
    }
}


const aamir = new Support('Aamir Khan', 'bd', 11);
const salman = new Support('Sallu vai', 'dubai', 4);
const saruk = new Support('srk', 'dubai', 9);
const akshay = new Support('aksay kumar', 'dubai', 11);

const alia = new StudentCare('Alia Bhatt', 'mumbai');
const ash = new NaptuneDev('Ash', 'Mumbai', 'Android Studio');

ash.releaseApp('1.4.5');
// console.log(ash);

// console.log(aamir, salman);


