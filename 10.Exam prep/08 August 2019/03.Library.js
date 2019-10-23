class Library {
    constructor(libraryName) {
        this.libraryName = libraryName;
        this.subscribers = [];
        this.subscriptionTypes = {
            normal: this.libraryName.length,
            special: this.libraryName.length * 2,
            vip: Number.MAX_SAFE_INTEGER
        };
    }

    subscribe(name, type) {
        if(!this.subscriptionTypes[type]) {
            throw new Error(`The type ${type} is invalid`); 
        }

        const foundSubscriber = this.subscribers.find(s => s.name === name);
        if(!foundSubscriber) {
            this.subscribers.push({
                name,
                type, 
                books: []
            });
        } else {
            foundSubscriber.type = type;
        }
        return foundSubscriber 
            ? foundSubscriber 
            : this.subscribers[this.subscribers.length - 1];
    }

    unsubscribe(name) {
        const subIndex = this.subscribers.findIndex(s => s.name === name);

        if(subIndex === -1) {
            throw new Error(`There is no such subscriber as ${name}`);
        } 

        this.subscribers.splice(subIndex, 1);
        return this.subscribers;
    }

    receiveBook(subscriberName, bookTitle, bookAuthor) {
        const foundSubscriber = this.subscribers.find(s => s.name === subscriberName);
        if(!foundSubscriber) {
            throw new Error(`There is no such subscriber as ${subscriberName}`);
        }

        const subType = foundSubscriber.type;
        const subTypeBooksCount = this.subscriptionTypes[subType];

        if(foundSubscriber.books.length >= subTypeBooksCount) {
            throw new Error(`You have reached your subscription limit ${subTypeBooksCount}!`);
        }
    
        foundSubscriber.books.push({ title: bookTitle, author: bookAuthor });
        return foundSubscriber;
    }

    showInfo() {
        if (!this.subscribers.length) {
            return `${this.libraryName} has no information about any subscribers`;
        }
        return this.subscribers
            .map(s => {
                const booksOutput = s.books
                    .map(b => `${b.title} by ${b.author}`)
                    .join(', ');

                return `Subscriber: ${s.name}, Type: ${s.type}\nReceived books: ${booksOutput}`;
            })
            .join('\n');
    }
}
