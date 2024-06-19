const Character = function (race, name, language) {
    this.race = race;
    this.name = name;
    this.language = language;
}

Character.prototype.speak = function () {
    console.log(`Мой язык: ${this.language}, мое имя: ${this.name}`);
}

const Ork = function (name) {
    Character.bind(this, 'Орк', name, 'Орочий')();
    this.weapon = 'Axe';
}

Ork.prototype = Object.create(Character.prototype);
Ork.prototype.constructor = Ork;

Ork.prototype.hit = function () {
    console.log('Двойной удар с разворота');
}

const Elf = function (name) {
    Character.bind(this, 'Эльф', name, 'Эльфийский')();
    this.spell = 'Fireball';
}

Elf.prototype = Object.create(Character.prototype);
Elf.prototype.constructor = Elf;

Elf.prototype.spellCast = function () {
    console.log('Кастую и запускаю Fireball');
}

const ork = new Ork('Гаррош');
ork.speak(); // Мой язык: Орочий, мое имя: Гаррош
ork.hit(); // Двойной удар с разворота

const elf = new Elf("Лор'темар Терон");
elf.speak(); // Мой язык: Эльфийский, мое имя: Лор'темар Терон
elf.spellCast(); // Кастую и запускаю Fireball