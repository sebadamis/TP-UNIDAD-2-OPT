import React from 'react'
import "./Login.css"


function Login() {
    return (

        <>
            <body className='login-container'>
                <div className="login-box">
                    <h2>Login</h2>
                    <form>
                        <div className="user-box">
                            <input type="text" name="" required="" />
                            <label className='user-name'>Nombre Usuario</label>
                            </div>
                            <div className="user-box">
                            <input type="password" name="" required="" />
                            <label className='password-text'>Password</label>
                        </div>
                    </form>
                </div>
            </body>

        </>

        
    )
}

export default Login