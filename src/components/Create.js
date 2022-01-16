import React, { useState } from 'react'

import { TodoContextApi } from '../context/TodoContext'

const Create = ({ inputElement }) => {

    const { name, setName, dispatch } = TodoContextApi()
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            dispatch({type: 'ADD', payload: {id: Date.now(), name: name, complete: false}})
            setName('')
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div className=''>
            <form onSubmit={handleSubmit}>
                {error && <p className='error'>please enter a valid todo title</p>}
                <input ref={inputElement} type="text" value={name} onChange={(e)=> setName(e.target.value)} placeholder='type todo title here...'/>
            </form>
        </div>
    )
}

export default Create
