import React, { useState } from 'react'

function AdminPage() {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const fetchHandler = async(e)=> {
        e.preventDefault()
        try {
            const loginData = await fetch('http://localhost:5036/admin/login-admin',
                {
                    method: 'POST',
                    headers:{
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({email,password})
                }
            )

            const response = await loginData.json()
            console.log(response);

        if (!loginData.ok) {
            console.log('error')
        }

        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
    <form onSubmit={fetchHandler}>
        <label>Email:
            <input
                onChange={(e)=> setEmail(e.target.value)}
                type='email'
                placeholder='Enter your email...'
                value={email}
                />
        </label>
        <label>Password:
            <input
                onChange={(e)=> setPassword(e.target.value)}
                type='password'
                placeholder='Enter your password...'
                value={password}
                />
        </label>
        <button>
            Submit
        </button>
    </form>
    </>
  )
}

export default AdminPage