interface Todo {
    id: string;
    title: string;
    description: string;
    priority: string;
    completed: boolean;
  }
  
  interface RootState {
    todos: {
      todo: Todo[];
    };
  }
  