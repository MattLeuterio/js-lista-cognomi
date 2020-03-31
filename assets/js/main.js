/**
 *  - chiedere all’utente il cognome
    - inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
    - stampa la lista ordinata alfabeticamente
    - scrivi anche la posizione della lista in cui il nuovo utente si trova
 */

 
var list = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
var surnameInput = document.getElementById('surnameInput');
var listCont = document.getElementById('list-container');
var btnAdd = document.getElementById('btnAdd');



console.log(list);

btnAdd.addEventListener('click',
   function() {
      var items = '';
      list.push(surnameInput.value);   
      

      for (var i = 0; i < list.length; i++) {
      list.sort();   
      items += '<li>' + list[i] + '</li>';
      }

      listCont.innerHTML = items;

      var posItem = list.indexOf(surnameInput.value) + 1;
      console.log(posItem);
      document.getElementById('position').innerHTML = posItem;
      document.getElementById('pos-visibility').classList.remove('u_hidden'); 
   
      surnameInput.value = '';
      surnameInput.focus(); 
   }
);