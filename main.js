//get input element
let filterInput = document.getElementById('filter-input');

//add EventListener
filterInput.addEventListener('keyup',filterNames);

function filterNames(){
    //get value of input

    let filterValue = document.getElementById('filter-input').value.toUpperCase();
    
     //get names ul
     let ul = document.getElementById('names');

     //Get items from ul
     let li = ul.querySelectorAll('li.collection-item');

     //Loop through all the li
     for (let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName('a')[0];

        //if matches
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            li[i].style.display = '';
        }
        else{
            li[i].style.display = 'none';
        }
        
     }

}