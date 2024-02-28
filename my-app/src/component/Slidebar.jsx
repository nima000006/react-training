import React from 'react'
import { Link } from 'react-router-dom'

const Slidebar = () => {
  // Fetch the username from local storage
  const username = localStorage.getItem("username");

  // Check if the username exists
  const isLoggedIn = username !== null;
  const clearLocalStorage = () => {
    localStorage.clear("username");
    localStorage.clear("password");
  }
  return (
    
    <div style={{background:'#000',
     color:'#fff',
     height:"100vh",
      width: '30%', 
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center'
      }}>
        <Link to="/profile" style={{marginTop: '20px'}}>
        profile
      </Link>
        {!isLoggedIn  ? (
            <Link to="/login" style={{marginTop: '20px'}}>
                login
            </Link>
            ): (
                <a href='/' style={{marginTop: '20px'}} onClick={clearLocalStorage}>Sign out</a>
            )
       }
      
    </div>
  )
}

export default Slidebar
