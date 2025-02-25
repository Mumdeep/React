import React, { useState } from 'react'

const Login = () => {
    
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        
    
        const handleSubmit = (e)=>{
            e.preventDefault()
            const signupData = JSON.parse(localStorage.getItem('userform'));
            console.log('>>>>signUpData>>>>',signupData);
            if(!signupData){
                alert('Please signup first');
            }
           if(signupData && signupData.email === email && signupData.password === password){
            alert('Login successful');
            setEmail('')
           setPassword('')
           } else{
            alert('Invalid email or password');
           }
           
       }
       const remove = () => {
        localStorage.clear();
        alert('Logout successfully');
       }


  return (
    <div>
      <h2>Login</h2>
            <form onSubmit={handleSubmit}>
               
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
                
                <button>SUBMIT</button>
                <button onClick={remove}>LOG OUT</button>
            </form>


    </div>
  )
}

export default Login
