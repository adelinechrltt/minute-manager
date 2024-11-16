let initialState = {
    todo : [
        { id: 1, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Urgent", completed: false },
        { id: 2, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Important", completed: false },
        { id: 3, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "", completed: false },
        { id: 4, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "", completed: false },
        { id: 5, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "", completed: false },
    ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default todoReducer;