const uid = () => Math.random().toString(34).slice(2);

export const addTodo = (todoTitle, todoDesc, todoPriority) => {
    return {
        type: "Add_TODO",
        payload: {
            id: uid(),
            title: todoTitle,
            description: todoDesc,
            priority: todoPriority
        }
    }
}

export const completeTodo = (id) => {
    return {
      type: "Complete_TODO",
      payload: id,
    }
};

export const reopenTodo = (id) => {
    return {
      type: "Reopen_TODO",
      payload: id,
    }
};

export const deleteTodo = (id) => {
    return {
      type: "Delete_TODO",
      payload: id,
    }
};