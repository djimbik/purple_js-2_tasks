class Car {
    #make;
    #model;
    #_run;

    constructor(make, model, run) {
        this.#make = make;
        this.#model = model;
        this.#run = run;
    }

    get #run() {
        return this.#_run;
    }

    set #run(newRun) {
        this.#_run = newRun;
    }

    changeRun(newRun) {
        this.#run = newRun;
    }

    info() {
        console.log(`марка: ${this.#make}, модель: ${this.#model}, пробег: ${this.#run}`)
    }
}

const bwm = new Car('BMW', 'M3', 3000);
bwm.info(); // марка: BMW, модель: M3, пробег: 3000
bwm.changeRun(5000);
bwm.info(); // марка: BMW, модель: M3, пробег: 5000
