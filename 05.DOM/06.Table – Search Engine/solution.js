function solve() {
   const inputField = document.getElementById('searchField');
   const selectedRow = document.getElementsByClassName('select');
   const allRow = Array.from(document.querySelector('table tbody').children);

   document.getElementById('searchBtn').addEventListener('click', () => {
      Array.from(selectedRow).forEach(row => row.classList.remove('select'));
      
      for(const row of allRow) {
         for (const cell of Array.from(row.children)) {
            let isSame = cell
               .textContent  
               .toLowerCase()
               .includes(inputField.value.toLowerCase());
               if(isSame) {
                  row.classList.add('select');
               }
         }
      }

      inputField.value = '';
   });
}
