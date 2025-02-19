
let todolist = JSON.parse(localStorage.getItem('todo-List')) || [];
listRead();
minDate();
function listRead() {

    let todoListHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        const todoObject = todolist[i];
        const name = todoObject.name;
        const duedate = todoObject.dueDate;
        const html = `<div>${i + 1}. ${name} </div>
                    <div>${duedate}</div>  
                    <button onclick="deleteFromList(${i});">Delete</button>`;
        todoListHTML += html;
    }




    document.querySelector('.list-elements').innerHTML = todoListHTML;
    localStorage.setItem('todo-List', JSON.stringify(todolist));

}

function deleteFromList(index) {
    todolist.splice(index, 1);
    localStorage.setItem('todo-List', JSON.stringify(todolist));
    listRead();

}

function minDate() {
    const today = new Date().toISOString().split('T')[0];
    document.querySelector('.date-input').min = today;
}

function addToList() {
    const newtask = document.querySelector('.task-input');
    const newDueDate = document.querySelector('.date-input');
    const name = newtask.value;
    const dueDate = newDueDate.value;
    if (newtask.value.length > 0) {
        todolist.push({
            name: name,
            dueDate: dueDate
        });
    }
    localStorage.setItem('todo-List', JSON.stringify(todolist));
    newtask.value = '';
    listRead();
}


document.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        addToList();
    }
});