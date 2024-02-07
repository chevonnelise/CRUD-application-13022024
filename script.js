document.addEventListener("DOMContentLoaded", function(){
    function main() {
        let todos = [];

        // add todos
        addTodo(todos, "Walk the dog", 5);
        addTodo(todos, "Clean the room", 3);
        addTodo(todos, "Pay the bill", 2);
    }

    main();
});