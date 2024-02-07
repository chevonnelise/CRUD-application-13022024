let todos = [];

function addTodo(todos, name, urgency){
    let newTodo = {
        id: Math.floor(Math.random() * 100 + 1),
        name: name,
        urgency: urgency
    };
    todos.push(newTodo);
}

function modifyTask(todos, id, newName, newUrgency) {
    
}