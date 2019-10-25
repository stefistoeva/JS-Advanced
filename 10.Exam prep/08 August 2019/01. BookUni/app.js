function solve() {
    const [ titleIn, yearIn, priceIn ] = Array.from(document.getElementsByTagName('input'));
    const addBtn = document.getElementsByTagName('button')[0];
    const [ oldBooks, newBooks ] = Array.from(document.getElementsByClassName('bookShelf'));
    const fieldForPrice = document.querySelector("body > h1:nth-child(3)");
    let sum = 0;
    
    addBtn.addEventListener('click', function(e) {
                //when button is in a form !!! -> preventDefault();
        e.preventDefault();
        const title = titleIn.value;
        const year = Number(yearIn.value);
        const price = Number(priceIn.value);
        if(title.value !== '' && year > 0 && price > 0) {
            if(year >= 2000) {
                createBook(true, title, year, price, newBooks);
            } else {
                createBook(false, title, year, price, oldBooks);
            }
        }
    });

    function createBook(isNew, bookTitle, bookYear, bookPrice, shelf) {
        bookPrice = isNew === true ? bookPrice : 0.85 * bookPrice;
        const div = document.createElement('div');
        div.classList.add('book');
        const p = document.createElement('p');
        p.textContent = `${bookTitle} [${bookYear}]`;
        const buyBtn = document.createElement('button');
        buyBtn.textContent = `Buy it only for ${bookPrice.toFixed(2)} BGN`;
        buyBtn.addEventListener('click', function(e) {
            sum += bookPrice;
            this.parentNode.parentNode.removeChild(this.parentNode);
            fieldForPrice.textContent = `Total Store Profit: ${sum.toFixed(2)} BGN`;
        });

        div.appendChild(p);
        div.appendChild(buyBtn);

        if(isNew) {
            const moveBtn = document.createElement('button');
            moveBtn.textContent = 'Move to old section';
            moveBtn.addEventListener('click', function(e) {
                this.parentNode.parentNode.removeChild(this.parentNode);
                createBook(false, bookTitle, bookYear, bookPrice, oldBooks);
            })
            div.appendChild(moveBtn);
        }

        shelf.appendChild(div);
    }
}
