
export const todoReducer = (state = [], action) => {

    switch (action.type) {
        case 'add':
            return [action.payload, ...state];
        case 'edit':
            return state.map( (todo) => {
                if(todo.id === action.payload.id) {
                    return action.payload;
                } else {
                    return todo;
                }
            });
        case 'delete':
            return state.filter( todo => todo.id !== action.payload.id);
        case 'changeDone':
            return state.map( (todo) => {
                if(todo.id === action.payload.id) {
                    console.log({
                        ...todo,
                        done: !todo.done
                    });
                    return {
                        ...todo,
                        done: !todo.done
                    };
                } else {
                    return todo;
                }
            });
        default:
            return state;
    }
}