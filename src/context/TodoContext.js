import React, {useContext, createContext, useState, useReducer} from 'react';

import {reducer} from '../reducer/todoReducer'

const TodoContext = createContext();

export const TodoContextApi = () => {
    return (
        useContext(TodoContext)
    );
};

const TodoContextProvider = ({children}) => {

    const [show, setShow] = useState(false)
    const [name, setName] = useState('');

    const [todos, dispatch] = useReducer(reducer, [{id: 2, name: "sleep", complete: true}]);

    const handleShow = () => {
        setShow(true);
    };

    const handleHide = () => {
        setShow(false);
    };

    return (
        <TodoContext.Provider value={{show, handleShow, handleHide, name, setName, todos, dispatch}}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoContextProvider;
