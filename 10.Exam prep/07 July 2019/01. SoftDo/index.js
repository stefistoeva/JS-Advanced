function mySolution(){
    const textarea = document.getElementsByTagName('textarea')[0];
    const nameOptional = document.getElementsByTagName('input')[0];
    const pendingArea = document.getElementById('pendingQuestions');
    const openArea = document.getElementById('openQuestions');
    const sendBtn = document.getElementsByTagName('button')[0];

    sendBtn.addEventListener('click', function(e) {
        const text = textarea.value;
        const name = nameOptional.value ? nameOptional.value : 'Anonymous';

        const pendingContent = createDivElement('pendingQuestion');
        setImage(pendingContent);
        setSpanElement(pendingContent, name);
        setParagraph(pendingContent, text);
        const actionDiv = createDivElement('actions');
        setBtn(actionDiv, 'archive');
        setBtn(actionDiv, 'open', '', name, text);

        pendingContent.appendChild(actionDiv);
        pendingArea.appendChild(pendingContent);
        textarea.value = '';
        nameOptional.value = '';
    });

    function createDivElement(className) {
        const div = document.createElement('div');
        div.classList.add(className);
        return div;
    }

    function setImage(currDiv) {
        const img = document.createElement('img');
        img.setAttribute('src', './images/user.png');
        img.setAttribute('width', 32);
        img.setAttribute('height', 32);
        currDiv.appendChild(img);
    }

    function setSpanElement(currDiv, name) {
        const span = document.createElement('span');
        span.textContent = name;
        currDiv.appendChild(span);
    }

    function setParagraph(currDiv, text) {
        const p = document.createElement('p');
        p.textContent = text;
        currDiv.appendChild(p);
    }

    function setInput(divEl, className, type, message) {
        const input = document.createElement('input');
        input.classList.add(className);
        input.setAttribute('type', type);
        input.setAttribute('placeholder', message);
        divEl.appendChild(input);
        return input;
    }

    function setOl(divEl, className) {
        const ol = document.createElement('ol');
        ol.classList.add(className);
        ol.type = 1;
        divEl.appendChild(ol);
        return ol;
    }

    function setLi(el, content) {
        const li = document.createElement('li');
        li.textContent = content;
        el.appendChild(li);
        return li;
    }

    function setBtn(div, className, content = '', name = '', text = '') {
        const btn = document.createElement('button');
        btn.classList.add(className);
        if(content === '') {
            btn.textContent = className.split();
            btn.textContent = className[0].toLocaleUpperCase() + className.slice(1);
        } else {
            btn.textContent = content;
        }

        if(className === 'archive') {
            btn.addEventListener('click', (e) => {
                e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
            });
        } else if (className === 'open') {
            btn.addEventListener('click', (e) => {
                const openContent = createDivElement('openQuestion');
                setImage(openContent);
                setSpanElement(openContent, name);
                setParagraph(openContent, text);
                const actionDiv = createDivElement('actions');
                setBtn(actionDiv, 'reply');
               
                openContent.appendChild(actionDiv);
                openArea.appendChild(openContent);
                e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
            });
        } else if(className === 'reply') {
            btn.addEventListener('click', (e) => {
                const replyDiv = createDivElement('replySection');
                
                changeBtn = document.getElementsByClassName('reply')[0].textContent;
                if(changeBtn === 'Back') {
                    document.getElementsByClassName('reply')[0].textContent = 'Reply';
                    document.getElementsByClassName('replySection')[0].style.display = 'none';
                } else if (changeBtn === 'Reply') {
                    document.getElementsByClassName('reply')[0].textContent = 'Back';
                    setInput(replyDiv, 'replyInput', 'text', 'Reply to this question here...');
                    setBtn(replyDiv, 'replyButton', 'Send');
                    setOl(replyDiv, 'reply');
                    replyDiv.style.display = 'block';
                }
                div.appendChild(replyDiv);
            });
        } else if(className === 'replyButton') {
            btn.addEventListener('click', () => {
                const inputField = document.querySelector("#openQuestions > div > div > div > input");
                const ol = document.querySelector("#openQuestions > div > div > div > ol");
                setLi(ol, inputField.value);
                document.querySelector("#openQuestions > div > div > div:nth-child(2) > input").value = '';
            });
        }
        
        div.appendChild(btn);
        return btn;
    }
}
