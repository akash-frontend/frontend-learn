export default function todosReducer(todos, action) {
    const { type } = action;
    switch (type) {
        case "add":
            const { id, text } = action;
            return [...todos, { id, text, done: false }];
        case "change":
            const updatedTodo = action.todo;
            return todos.map((existingTodo) => {
                if (existingTodo.id === updatedTodo.id) {
                    return updatedTodo;
                } else {
                    return existingTodo;
                }
            });
        case "remove":
            const todoId = action.id;
            return todos.filter((todo) => todo.id !== todoId);
    }
}


// central state management 
// all other components are free from logic of the state
// they either this action has happen or showing updated state to UI