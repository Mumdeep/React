import React, { useState } from 'react'

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNo, setPhoneNo] = useState('')

    const handleSubmit = (e)=>{
        e.preventDefault()
        const data = {
            name,email,password,phoneNo
        }
        console.log('>>>>data>>>>',data);
        localStorage.setItem("userform",JSON.stringify(data))
        setEmail('')
        setName('')
        setPassword('')
        setPhoneNo('')
    }
    return (
        <div>
            <h2>Sign up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='enter name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='enter email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='enter password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type='text'
                    placeholder='enter phoneNo'
                    value={phoneNo}
                    onChange={(e) => setPhoneNo(e.target.value)}
                />
                <button>SUBMIT</button>
            </form>


        </div>
    )
}

export default Signup
