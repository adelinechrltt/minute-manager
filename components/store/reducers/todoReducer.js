let initialState = {
    todo : [
        { id: 1, title: "1 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Urgent" },
        { id: 2, title: "2 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Important"},
        { id: 3, title: "3 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Done"},
        { id: 4, title: "4 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: "Done"},
        { id: 5, title: "5 Lorem ipsum dolor sit amet", description:"Lorem ipsum dolor sit amet", priority: ""},
    ]
}

const todoReducer = (state = initialState, action) => {
    switch(action.type){
        default: 
            return state;
    }
}

export default todoReducer;