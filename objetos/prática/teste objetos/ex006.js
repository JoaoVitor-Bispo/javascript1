class Account {
    #type
    constructor(numbConta, type, owner, sale, status) {
        this.numbConta = numbConta;
        this.#type = type
        this._owner = owner;
        this._sale = sale;
        this._status = false
    }
    get getNumbconta () {
        return this.numbConta
    }
    set setNumbconta (newnum) {
        this.numbConta = newnum
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
            this._status = true;
            if (this.#type == 'cc') {
                this._sale += 50;
            }
            else if (this.#type == 'cp') {
                this._sale += 150;
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
    closeAccount() {
        if(this._status) {
            if(this._sale == 0) {
                this._status = false
                this._owner = undefined
            }
            else {
                console.log('Your sale needs to be 0 for to close the account')
            }
        }
        else {
            console.log('You need to open an account for to close the account.')

        }
    }
}

function account_open() {
    let main = document.querySelector('main')
    let owner = document.querySelector('#ownerc').value
    let num_account = document.querySelector('#numc').value
    let type_account = document.querySelector('#typec').value
    if (owner.length == 0 || num_account.length == 0 || type_account.length == 0) {
        window.alert('Put informations valids in your account')
    }
    else {
        let account =  new Account(num_account, type_account, owner, 0)

        account.openAccount()
        document.querySelector('#account_op').remove()

        let change_datas = document.createElement('div')
        main.appendChild(change_datas)
        change_datas.textContent = 'Change Datas'
        change_datas.className = 'id_changedatas'

        // Start event change datas
        change_datas.addEventListener('click', () => {
            let change_sale = document.createElement('div')
            change_sale.textContent = 'Deposit'
            change_sale.className = 'id_changesale'
            if (document.querySelectorAll('.id_changesale').length > 0) {
                change_sale.remove()
            }
            else {
                change_datas.after(change_sale)
                // Start event deposit
                change_sale.addEventListener('click', () => {
                    let new_sale = document.createElement('input')
                    new_sale.className = 'id_newsale'
                    new_sale.type = 'number'
                    change_sale.appendChild(new_sale)
                    if (document.querySelectorAll('.id_newsale').length > 1) {
                        new_sale.remove()
                    }
                    else {
                        new_sale.addEventListener('keyup', function(e) {
                            if (e.code == 'Enter') {
                                account.deposit(Number(new_sale.value))
                            }
                        })
                    }
                    // End event deposit    
                })
            }
            let cashout_div = document.createElement('div')
            cashout_div.textContent = 'Cashout'
            cashout_div.className = 'id_cashoutdiv'
            if (document.querySelectorAll('.id_cashoutdiv').length > 0) {
                cashout_div.remove()
            }
            else {
            // Start Event Cashout
                change_datas.after(cashout_div)
                cashout_div.addEventListener('click', function () {
                    let cashout_input = document.createElement('input')
                    cashout_input.className = 'id_cashout'
                    cashout_input.type = 'number'
                    change_sale.before(cashout_input)
                    if (document.querySelectorAll('.id_cashout').length > 1) {
                        cashout_input.remove()
                    }
                    else {
                        cashout_input.addEventListener('keyup', function(e) {
                            if (e.code == 'Enter') {
                                account.cashout(Number(cashout_input.value))
                            }
                        })
                    }
        
                })
            }
        }) 

        let view_informations = document.createElement('div')
        main.appendChild(view_informations)
        view_informations.textContent = 'View Informations of account'

            let sale_children = document.createElement('div')
            let type_children = document.createElement('div')
            let num_children = document.createElement('div')
            let owner_children = document.createElement('div')

        view_informations.addEventListener('click', () => {
            sale_children.innerHTML = ''
            sale_children.innerHTML = `Your sale: ${account.getSale}`
            view_informations.after(sale_children)

            type_children.innerHTML = ''
            type_children.innerHTML = `Type of your account: ${account.getType}`
            view_informations.after(type_children)

            num_children.innerHTML = ''
            num_children.innerHTML = `Number's ID of your account: ${account.getNumbconta}`
            view_informations.after(num_children)

            owner_children.innerHTML = ''
            owner_children.innerHTML = `Owner of account: ${account.getOwner}`
            view_informations.after(owner_children)

        })
        console.log(account)
    }
}




