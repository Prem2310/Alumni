import '../App.css';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import React, { useState } from 'react';
import { supabase } from './supabaseClient';
import { auth } from '@supabase/auth-ui-react';


export const Register = () => {
    const [formData,setFormData] = useState({
      fullName:'',email:'',phone:'',college:'',branch:'',year:'',about:'',city:'',state:'',code:''
    })
    const[newpassword,setPasssword]=useState({
      password:''
    })
    console.log(formData)
  
    function handleChange(event){
      setFormData((prevFormData)=>{
        return{
          ...prevFormData,
          [event.target.name]:event.target.value
        }
  
      })
      setPasssword((prevFormData)=>{
        return{
          ...prevFormData,
          [event.target.name]:event.target.value
        }
  
      })
    }
  
    async function handleSubmit(e){
      e.preventDefault()
  
      try {
        const { data, error } = await supabase.auth.signUp(
          {
            email: formData.email,
            password:newpassword.password,
            options: {
              data: {
                full_name: formData.fullName,
                phone:formData.number,
                college:formData.college,
                branch:formData.branch,
                year:formData.year,
                about:formData.about,
                city:formData.city,
                state:formData.state,
                code:formData.code
              }
              
            }
          }
        )
        if (error) throw error
        alert('Check your email for verification link')

      } catch (error) {
        alert(error)
      }
    }
  
    return (
      <div className='register-page'>
          
          <div className="container">
          <div className='title'>
            Register Now
          </div>
               
           <div className='user-details'>
              <form  className='register' style={{alignItems:'center'}} onSubmit={handleSubmit}>
              <input type="text" name="fullname" placeholder="Full Name" required onChange={handleChange}/>
              <input type="email" name="email" placeholder="Email id" onChange={handleChange}/>
              <input type="number" name="phone" placeholder="Phone No."onChange={handleChange}/>
              <input type="text" name="college" placeholder="College" onChange={handleChange}/>
              <input type="text" name="branch" placeholder="Branch" onChange={handleChange}/>
              <input type="number" name="year" placeholder="Batch Year"onChange={handleChange}/>
              <textarea name="About" placeholder='About You' onChange={handleChange}/>
              <input type='text' name="city" placeholder='City' onChange={handleChange}/>
              <input type='text' name="state" placeholder='State' onChange={handleChange}/>
              <input type='text' name="code" placeholder='Postal Code' onChange={handleChange}/>
              <input type="password" name="password" placeholder="Password" onChange={handleChange}/>
              <button type='submit' className='sign-up'><ExitToAppIcon style={{verticalAlign:'middle'}}/> SIGN ME UP!</button>
                  </form>
                    </div>    
          
          </div>
          </div>
    )
}
export default Register