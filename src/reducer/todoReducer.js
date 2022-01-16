export const reducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return [...state, action.payload];
        case 'DELETE':
            return (state.filter((todo) => todo.id !== action.payload.id))
        case 'COMPLETE':
            return state.map((todo) => {
                    if (todo.id === action.payload.id){
                        return {...todo, complete: !todo.complete};
                    }
                    else {
                        return todo;
                    }
                });
        case 'EDIT':
            return state.map((todo) => {
                console.log(action.payload.name)
                if (todo.id === action.payload.id){
                    return {...todo, name: action.payload.name};
                }
                else {
                    return todo;
                }
            });
        default:
            return state;
    };

};