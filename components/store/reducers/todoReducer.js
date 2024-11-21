let initialState = {
    todo : [
        { id: 1, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Urgent" },
        { id: 2, title: "2 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Important"},
        { id: 3, title: "3 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Done"},
        { id: 4, title: "4 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Done"},
        { id: 5, title: "5 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: ""},
    ]
}

export const selectTaskById = (state, id) => {
  return state.todos.todo.find(task => task.id === id);
};

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        case "UpdateCompletion_TODO": 
            let updateTodo = state.todo.map((t) => {
                if (t.id === action.payload) {
                return { ...t, completed: !t.completed };
                } else {
                return t;
                }
            });
        
        default: 
            return state;
    }
}

export default todoReducer;