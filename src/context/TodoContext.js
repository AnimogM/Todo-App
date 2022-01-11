import React, {useContext, createContext} from 'react'

const TodoContext = createContext()

const TodoContextProvider = ({children}) => {
    return (
        <TodoContext.Provider>
            {Children}
        </TodoContext.Provider>
    )
}

export default TodoContextProvider
