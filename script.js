const localStorageName = 'to-do-list-gg'

function newTask(){
    let input = document.getElementById('input-new-task');
    
    // Validation
    if(!input.value){
        alert('Please enter a task');
    } 
    // else if() {

    // }
    else {
        // Increment to localStorage
        let values = JSON.parse(localStorage.getItem('localStorageName') || "[]");
        values.push({
            name: input.value
        });
        localStorage.setItem(localStorageName,JSON.stringify(values));
    }
}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageName) || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = '';

    for(let i=0; i<values.length; i++){
        list.innerHTML= `<li>${values[i]['name']}</li>`
    }
}