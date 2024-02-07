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
    // creating the new task
    let modifiedTask = {
        "id": id,
        "name": newName,
        "urgency": newUrgency
    }

    // insert index of the task that user wants to replace
    const indexToReplace = todos.findIndex(function(t){
        return t.id == id;
    });

    // if loop to check if the findIndex can find the index, if not findIndex to return -1
    if (indexToReplace > -1) {
        todos[indexToReplace] = modifiedTask;
    }
}