import React from 'react'

import { useDispatch } from 'react-redux'
import { login,logout } from '../store/userSlice'

function Product() {
    const dispatch = useDispatch();
    const user = {
        username:'khamdenglao',
        password:'123'
    }
    const handleLogin = () => {
        dispatch(login(user))
    }

  return (
    <div>
        <h1>Product</h1>
        <button onClick={handleLogin}>login</button>
        <button onClick={() => dispatch(logout())}>logout</button>
    </div>
  )
}

export default Product