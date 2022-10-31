class Account {
    #type
    constructor(numbConta, type, owner, sale, status) {
        this.numbConta = numbConta;
        this.#type = type
        this._owner = owner;
        this._sale = sale;
        this._status = status
    }
    get getType() {
        return this.#type
    }
    set setType(newType) {
        this.#type = newType
    }

    get getOwner() {
        return this._owner
    }
    set setOwner(newOwner) {
        this._owner = newOwner
    }

    get getSale() {
        return this._sale
    }
    set setSale(newSale) {
        this._sale = newSale
    }

    get getStatus() {
        return this._sale
    }
    set setStatus(newStatus) {
        this._status = newStatus
    }

    openAccount() {
        if (!this._status) {
            console.log('Opening Account...');
            this._status = true;
            if (this.#type == 'cc') {
                this._sale = 50;
            }
            else if (this.#type == 'cp') {
                this._sale = 150;
            }
        }
        else {
            console.log('Already have an account');
        }
    }
    deposit(value) {
        if(this._status) {
            this._sale += value
        }
        else {
            console.log('You need to open an account for deposit.')
        }
    }
    cashout(value) {
        if(this._status) {
            if (this._sale >= value) {
                this._sale -= value
            }
            else {
                console.log("You can't cash out this quantity now.")
            }
        }
        else {
            console.log('You need to open an account for cash out.')
        }
    }
    monthlypayment() {
        if(this._status) {
            if(this._sale >= 12) {
                this._sale -= 12
            }
            else {
                console.log('You no have cash suficient for pay the monthly payment')
            }
        }
        else {
            console.log('You need to open an account for pay the monthly payment.')
        }
    }
}

var people1 = new Account(undefined, undefined, 'Jubileu', 0, false);

people1.setType = 'cp';
people1.openAccount();
console.log(people1);
people1.setOwner = 'jaozada';
console.log(people1);




