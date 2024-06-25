class Billing {
    constructor(amount) {
        this.amount = amount;
    }

    calculateTotal() {
        return 0;
    };
}

class FixBilling extends Billing {
    calculateTotal() {
        return this.amount;
    };
}

class HourBilling extends Billing {
    constructor(amount, hour) {
        super(amount);
        this.hour = hour;
    }

    calculateTotal() {
        return this.amount * this.hour;
    };
}

class ItemBilling extends Billing {
    constructor(amount, elems) {
        super(amount);
        this.elems = elems;
    }

    calculateTotal() {
        return this.amount * this.elems;
    };
}

const fixBilling = new FixBilling(100);
console.log(fixBilling.calculateTotal()); // 100

const hourBilling = new HourBilling(50, 10);
console.log(hourBilling.calculateTotal()); // 500

const itemBilling = new ItemBilling(20, 15);
console.log(itemBilling.calculateTotal()); // 300