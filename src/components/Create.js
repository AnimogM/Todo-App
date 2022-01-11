import React, { useState } from 'react'

const Create = () => {
    const [name, setName] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if(name){
            setName('')
        }else{

        }
    }
    return (
        <div className='modal'>
            <form>
                {error && <p className='error'>please enter a valid todo</p>}
                <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
                <button type='submit'>ADD</button>
            </form>
        </div>
    )
}

export default Create
