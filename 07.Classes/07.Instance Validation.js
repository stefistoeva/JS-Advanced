class CheckingAccount {
    _clientId;
    _email;
    _firstName;
    _lastName;

    constructor(clientId, email, firstName, lastName) {
        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get clientId() {
        return this._clientId;
    }

    set clientId(value) {
        if(value.length !== 6) {
            throw new TypeError('Client ID must be a 6-digit number');
        }
    }

    get email() {
        return this._email;
    }

    set email(value) {
        const pattern = /^[A-z0-9]+@[A-z.]+$/g;
        if(!pattern.test(value)) {
            throw new TypeError('Invalid e-mail');
        }
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(value) {
        this.nameValidation(value, 'First');
        this._firstName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(value) {
        this.nameValidation(value, 'Last');
        this._lastName = value;
    }

    nameValidation(value, name) {
        if(value.length < 3 || value.length > 20) {
            throw new TypeError(`${name} name must be between 3 and 20 characters long`);
        }

        const pattern = /^[A-Za-z]+$/g;
        if(!pattern.test(value)) {
            throw new TypeError(`${name} name must contain only Latin characters`);
        }
    }
}

let acc = new CheckingAccount('1314', 'ivan@some.com', 'Ivan', 'Petrov')
