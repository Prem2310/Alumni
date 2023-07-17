

import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { supabase } from './supabaseClient';
import { auth } from '@supabase/auth-ui-react';

const SignUp = (setToken) => {
  const handleRegister=()=>{
    window.location.href="/register";
};
  let navigate =  useNavigate()
  const [formData,setFormData] = useState({
    fullName:'',email:'',password:''
  })

  console.log(formData)

  function handleChange(event){
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        [event.target.name]:event.target.value
      }

    })

  }

  async function handleSubmit(e){
    e.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      })
      if (error) throw error
      setToken(data)
      navigate('/Profile')
    } catch (error) {
      alert(error)
    }
  }

  return (
   
    <div class="loginPage">
      <form onSubmit={handleSubmit}>
        <div class="cover">
        <h1>LogIn</h1>
        <input  placeholder='FULLNAME' name='fullName' class="hello" onChange={handleChange}/>
        <input  placeholder='EMAIL' name='email' class="hello"onChange={handleChange}/>
        <input placeholder='PASSWORD'name='password' class="hello"type="password"onChange={handleChange}/>
        <button type='submit'class="login-btn">
          Log-In
        </button>
        <div type='submit'class="login-btn trial" onClick={handleRegister}>
          Register
        </div>
      </div>
        </form>
        </div>
  )
}

export default SignUp