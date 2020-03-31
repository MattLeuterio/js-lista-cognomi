/**
 *  - chiedere all’utente il cognome
    - inserirlo in un array con altri cognomi: ‘Bianchi’, ‘Rossi’, ‘Duzioni’, ‘Balsano’, ‘Verdi’
    - stampa la lista ordinata alfabeticamente
    - scrivi anche la posizione della lista in cui il nuovo utente si trova
 */

 // References

 var aList = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
 var surnameInput = document.getElementById('surnameInput');
 var listCont = document.getElementById('list-container');
 var btnAdd = document.getElementById('btnAdd')

 var btnAdd = document.getElementById('btnAdd');
 btnAdd.addEventListener('click',
    function() {
        aList.push(surnameInput.value);
        newAdd = '<li>' + surnameInput.value + '</li>';
        listCont.innerHTML += newAdd;
        aList.sort();        
        console.log(aList);   
    }
 );

 for (var i = 0; i < aList.length; i++) {      
    aList.sort(); 
    var surname = aList[i];
    var allSurname = listCont.innerHTML;
    var newSurname = '<li>' + surname + '</li>';
    var all = allSurname + newSurname;
    listCont.innerHTML = all;
 }   

 

 //Declare variables
 var usersArray = ['Bianchi', 'Rossi', 'Duzioni', 'Balsano', 'Verdi'];
 var usersArraySorted;
 var usersInput;
 var usersInputInArray;


//Force a non-empty input
 do {
   usersInput = prompt('Your surname, sir?');
 } while (usersInput == '');

//Add the input to the array and sort it, giving a before/after output
usersArray.push(usersInput);
usersInputInArray =  usersArray.indexOf(usersInput);
console.log('Original position is ', usersInputInArray, 'in the array ', usersArray);
usersArraySorted = usersArray.sort();
console.log('Sorted position is ', usersArraySorted.indexOf(usersInput), 'in the array ', usersArraySorted);
 