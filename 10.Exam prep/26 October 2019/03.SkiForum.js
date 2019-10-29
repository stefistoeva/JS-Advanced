class Forum {
    constructor() {
        this._users = [];
        this._questions = [];
        this._id = 1;
    }

    register(username, password, repeatPassword, email) {
        if(username === '' || password === '' || repeatPassword === '' || email === '') {
            throw new Error('Input can not be empty');
        }

        if(password != repeatPassword) {
            throw new Error('Passwords do not match');
        }

        const findUsername = this._users.find(user => user.username === username);
        const findEmail = this._users.find(user => user.username === username);

        if(findUsername && findEmail) {
            throw new Error('This user already exists!');
        }

        //            repeatPassword, 

        const newUser = {
            username, 
            password, 
            email, 
            status: 'logout'
        }
        this._users.push(newUser);
        return `${username} with ${email} was registered successfully!`;
    }


    //the same logic like a logout() function
    login(username, password) {
        let user = this._users.filter((user) => user.username === username)[0];
        if(user === undefined) {
            throw new Error('There is no such user');
        }

        if(user.password === password) {
            user.status = 'login';
            return 'Hello! You have logged in successfully';
        }
    }

    logout(username, password) {
        let user = this._users.filter((user) => user.username === username)[0];
        if(user === undefined) {
            throw new Error('There is no such user');
        }

        if(user.password === password) {
            user.status = 'logout';
            return 'You have logged out successfully';
        }
    }

    postQuestion(username, questions) {
        let user = this._users.filter((user) => user.username === username)[0];
        if(user === undefined || user.status !== 'login') {
            throw new Error('You should be logged in to post questions');
        }

        if(questions === '') {
            throw new Error('Invalid question');
        }

        this._questions.push({
            id: this._id,
            questions, 
            username
        });

        this._id++;

        return 'Your question has been posted successfully';
    }

    postAnswer(username, questionId, answer) {
        let user = this._users.filter((user) => user.username === username)[0];

        if(user === undefined || user.status === 'logout') {
            throw new Error('You should be logged in to post answers');
        }

        if(answer === '') {
            throw new Error('Invalid answer');
        }

        let question = this._questions.filter((question) => question.id === questionId)[0];
        if(questionId !== question.id) {
            throw new Error('There is no such question');
        }

        if(question.answer === undefined){
            question.answer = [];
        }
        
        let ans = {
            username,
            answer
        };

        question.answer.push(ans);
        return 'Your answer has been posted successfully';
    }

    showQuestions() {
       return this._questions
        .map(q => {
            let out = '';

            for (const answer of q.answer) {
                out += `\n---${answer.username}: ${answer.answer}`;
            }

           return `Question ${q.id} by ${q.username}: ${q.questions}${out}`;
       }).join('\n');
    }
}

let forum = new Forum();

forum.register('Michael', '123', '123', 'michael@abv.bg');
forum.register('Stoyan', '123ab7', '123ab7', 'some@gmail@.com');
forum.login('Michael', '123');
forum.login('Stoyan', '123ab7');

forum.postQuestion('Michael', "Can I rent a snowboard from your shop?");
forum.postAnswer('Stoyan',1, "Yes, I have rented one last year.");
forum.postQuestion('Stoyan', "How long are supposed to be the ski for my daughter?");
forum.postAnswer('Michael',2, "How old is she?");
forum.postAnswer('Michael',2, "Tell us how tall she is.");

console.log(forum.showQuestions());

//90/100
