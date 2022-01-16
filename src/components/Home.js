import React, { useRef } from 'react';
import {BiTrash, BiEdit} from 'react-icons/bi';

import { TodoContextApi } from '../context/TodoContext';
import Create from './Create';

const Home = () => {

    const { todos,  dispatch, setName } = TodoContextApi()
    const inputElement = useRef()

    const handleEdit = (name, id) => {
        setName(name)
        inputElement.current.focus()
        dispatch({type: "DELETE", payload: {id: id}})
    }

    return (
        <div className='home'>
            <Create inputElement={inputElement}/>
            {todos.map((todo) => {
                const { id, name, complete} = todo
                return (
                    <div key={id} className='tab'>
                        <div className='text-box'>
                            <input type='checkbox' checked={complete} onChange={()=> dispatch({type: "COMPLETE", payload: {id: id}})}/>
                            <h4 className={complete? 'cross': 'normal'}>{name}</h4>
                        </div>
                        <div className="icons-box">
                            <BiTrash className='icon' size={20} onClick={()=> dispatch({type: "DELETE", payload: {id: id}})}/>
                            <BiEdit className='icon' size={20} onClick={()=> handleEdit(name, id)}/>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Home
