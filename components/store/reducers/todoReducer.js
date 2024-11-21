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
        case "Complete_TODO": 
            let completedTodo = state.todo.map((t) => {
                if (t.id === action.payload) {
                return { ...t, priority: "Done" };
                } else {
                return t;
                }
            });

            return {...state, todo: completedTodo};
        
        case "Reopen_TODO":
            let reopenTodo = state.todo.map((t) => {
                if(t.id === action.payload) {
                    return { ...t, priority: ""};
                } else {
                    return t;
                }
            })

            return {...state, todo: reopenTodo};

        default: 
            return state;
    }
}

export default todoReducer;