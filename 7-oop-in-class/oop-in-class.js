class Character {
    constructor(race, name, language) {
        this.race = race;
        this.name = name;
        this.language = language;
    }

    speak() {
        console.log(`Мой язык: ${this.language}, мое имя: ${this.name}`);
    }
}

class Ork extends Character {
    constructor(name) {
        super('Орк', name, 'Орочий');
        this.weapon = 'Axe';
    }

    hit() {
        console.log('Двойной удар с разворота');
    }

    speak() {
        console.log('Привет, я - Орк!');
        console.log(`Мой язык: ${this.language}, мое имя: ${this.name}`);
    }
}

class Elf extends Character {
    constructor(name) {
        super('Эльф', name, 'Эльфийский');
        this.spell = 'Fireball';
    }

    spellCast() {
        console.log('Кастую и запускаю Fireball');
    }

    speak() {
        console.log('Привет, я - Эльф!');
        console.log(`Мой язык: ${this.language}, мое имя: ${this.name}`);
    }
}

const ork = new Ork('Гаррош');
ork.speak();
ork.hit();

const elf = new Elf("Лор'темар Терон");
elf.speak();
elf.spellCast();