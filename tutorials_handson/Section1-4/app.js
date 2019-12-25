class NameField {
    constructor(name) {
        const field = document.createElement('li');
        field.textContent = name;
        const nameListHook = document.querySelector('#names');
        nameListHook.appendChild(field);
    }
}

class NameGenerator {
    constructor() {
        const btn = document.querySelector('button');
        this.names = ['Ravi', 'Chavi', 'Kavi'];
        this.index = 0;
        btn.addEventListener('click', () => {
            this.addName();
        });
    }

    addName() {
        const name = new NameField(this.names[this.index]);
        this.index++;
        if(this.index >= this.names.length)
            this.index = 0;
    }
}


const gen = new NameGenerator();