function solve() {
   const [ filter, name, quantity, price ] = Array.from(document.getElementsByTagName('input'));
   const [ filterBtn, addBtn, buyBtn ] = Array.from(document.getElementsByTagName('button'));
   const totalPrice = document.querySelector("body > h1:nth-child(4)");
   const myProduct = document.querySelector("#myProducts > ul");
   const availableProduct = document.querySelector("#products > ul");

   let sum = 0;
   
   addBtn.addEventListener('click', function(e) {
      e.preventDefault();
      nameValue = name.value;
      quantityValue = Number(quantity.value);
      priceValue = Number(price.value).toFixed(2);
      
      let li = document.createElement('li');
      let span = document.createElement('span');
      span.textContent = nameValue;
      let strong = document.createElement('strong');
      strong.textContent = 'Available: ' + quantityValue;
      let div = document.createElement('div');

      let strongPrice = document.createElement('strong');
      strongPrice.textContent = priceValue;
      let btn = document.createElement('button');
      btn.textContent = "Add to Client's List";

      btn.addEventListener('click', function() {
         let liMy = document.createElement('li');
         liMy.textContent = nameValue;
         let strongPriceMy = document.createElement('strong');
         strongPriceMy.textContent = priceValue;
         liMy.appendChild(strongPriceMy);
         myProduct.appendChild(liMy);
         sum += Number(priceValue);
         totalPrice.textContent = '';
         totalPrice.textContent = `Total Price: ${sum.toFixed(2)}`;

         if(quantityValue > 1) {
            strong.textContent = 'Available: ' + (--quantityValue);
         } else {
            this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);
         }
      })

      div.appendChild(strongPrice);
      div.appendChild(btn);

      li.appendChild(span);
      li.appendChild(strong);
      li.appendChild(div);

      availableProduct.appendChild(li);
   });

   filterBtn.addEventListener('click', function() {

   });

   buyBtn.addEventListener('click', function() {
      totalPrice.textContent = `Total Price: 0.00`;
      // this.parentNode.removeChild(document.querySelector("#myProducts > ul > li"));
      document.querySelector("#myProducts > ul > li").remove;
   });
}

//60/100
