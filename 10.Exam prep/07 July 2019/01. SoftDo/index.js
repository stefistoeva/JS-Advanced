function mySolution(){
    const textarea = document.getElementsByTagName('textarea')[0];
    const nameOptional = document.querySelector("#inputSection > div > input[type=username]");
    const sendBtn = document.getElementsByTagName('button')[0];
    sendBtn.addEventListener('click', addQuestion);
    
    function addQuestion() {
        const newQ = createDivElement('pendingQuestion');

        setImage(newQ);
        setSpanElement(newQ, nameOptional);
        setParagraph(newQ, textarea);

        const div = createDivElement('actions');
        const archive = setBtn(div, 'archive');
        archive.addEventListener('click', removeQuestion)
        
        function removeQuestion() {
            document.getElementById('pendingQuestions').removeChild(newQ);
        }

        const open = setBtn(div, 'open');
        open.addEventListener('click', moveToOpenQ);

        function moveToOpenQ() {
            const openQ = createDivElement('openQuestion');
            setImage(openQ);
            setSpanElement(openQ, nameOptional);
            setParagraph(openQ, textarea);

            const divAction = createDivElement('actions');
            const reply = setBtn(divAction, 'reply');
            reply.addEventListener('click', replyFunction);

            function replyFunction() {
                const divElement = createDivElement('replySection');
                let valueInput = setInput(divElement, 'replyInput', 'text', 'Reply to this question here...');
                const replyBtn = setBtn(divElement, 'replyButton', 'Send');
                replyBtn.addEventListener('click', replyMessage);

                function replyMessage() {
                    // if(valueInput.value) {
                    //     let liElement = setLi();
                    //     let olElement = olElement().appendChild(li)
                    // }
                    
                }

                // function setLi() {
                //     let li = document.createElement('li');
                //     li.textContent = valueInput.value;
                //     return li;
                // }

                // function olElement() {
                //     let olElement = document.createElement('ol');
                //     olElement.classList.add('reply');
                //     olElement.setAttribute('type', 1);
                // }

                divElement.appendChild(replyBtn);

                document.getElementById('openQuestions').appendChild(divElement);
            }

            openQ.appendChild(divAction);

            document.getElementById('openQuestions').appendChild(openQ);
            // removeQuestion();
        }

        newQ.appendChild(div);

        document.getElementById('pendingQuestions').appendChild(newQ);
        // textarea.value = '';
        // nameOptional.value = '';
    }

    
    function createDivElement(className) {
        let div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    function setImage(currDiv) {
        let img = document.createElement('img');
        img.setAttribute('src', './user.png');
        img.setAttribute('width', 32);
        img.setAttribute('height', 32);
        currDiv.appendChild(img);
    }

    function setSpanElement(currDiv, username) {
        let span = document.createElement('span');
        username.value !== '' ? span.textContent = username.value : span.textContent = 'Anonymous';
        currDiv.appendChild(span);
    }

    function setParagraph(currDiv, textarea) {
        let p = document.createElement('p');
        p.textContent = textarea.value;
        currDiv.appendChild(p);
    }
    
    //refactor function attribute
    function setBtn(div, className, content = '') {
        let btn = document.createElement('button');
        btn.classList.add(className);
        if(content === '') {
            btn.textContent = className.split();
            btn.textContent = className[0].toLocaleUpperCase() + className.slice(1);
        } else {
            btn.textContent = content;
        }
        div.appendChild(btn);
        return btn;
    }

    function setInput(divEl, className, type, message) {
        let input = document.createElement('input');
        input.classList.add(className);
        input.setAttribute('type', type);
        input.setAttribute('placeholder', message);
        divEl.appendChild(input);
        return input;
    }
}

//33/100 !!!
