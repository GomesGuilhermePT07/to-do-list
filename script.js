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
        localStorage.setItem(localStorageName,values);
    }
}