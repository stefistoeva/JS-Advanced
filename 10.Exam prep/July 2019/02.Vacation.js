class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
    
    get numberOfChildren() {
        this._numberOfChildren =  0;

        for(let grade in this.kids) {
            this._numberOfChildren += this.kids[grade].length;
        }
    
        return this._numberOfChildren;
    }

    registerChild(name, grade, budgetChild) {
        if(this.budget > budgetChild) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
        
        if(this.kids.hasOwnProperty(grade) == false) {
            this.kids[grade] = [];
        } 
        
        if(this.kids[grade].findIndex(gr => gr.startsWith(name)) > -1) {
            return `${name} is already in the list for this {destination} vacation.`;
        }

        this.kids[grade].push(`${name}-${budgetChild}`);
        return this.kids[grade];
    }

    removeChild(name, grade) {
        if(this.kids.hasOwnProperty(grade)) {
            const index = this.kids[grade].findIndex(n => n.startsWith(name));

            if (index > -1) {
                this.kids[grade].splice(index, 1);
                return this.kids[grade];
            }
        }

        return `We couldn't find ${name} in ${grade} grade.`;
    }

    toString() {
        if(this.numberOfChildren <= 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }

        let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}\n`;
        
        for(const grade in this.kids) {
            result += `Grade: ${grade}\n`;
            
            for (let i = 0; i < this.kids[grade].length; i++) {
                result += `${i + 1}. ${this.kids[grade][i]}\n`;
            }
        }

        return result;
    }
}
