import './style1.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userlist, setUserlist] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/Users')
      .then(res => setUserlist(res.data))
      .catch(err => console.log(err));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault(); 

    const userExist = userlist.some(u => u.username === username && u.password === password);
    if (userExist) {
      navigate('/');
    } else {
      alert("Invalid username or password");
    }
  }

  return (
    <div>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form onSubmit={handleLogin}>
              <br />
              <h2>Login Form</h2>
              <div className="inputbox">
                <ion-icon name="mail" />
                <input 
                  type="email" 
                  required 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                />
                <label htmlFor="">Email</label>
              </div>
              <div className="inputbox">
                <ion-icon name="lock" />
                <input 
                  type="password" 
                  required 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                />
                <label htmlFor="">Password</label>
              </div>
              <div className="forget">
                <label htmlFor="">
                  <input type="checkbox" />
                  Remember Me
                  <a href="#">Forget Password</a>
                </label>
              </div>
              <button type="submit"> 
                Log in
              </button>
              <div className="register">
                <p>
                  Don't have an account
                  <Link to='/signup'>Signup</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Login;

















// import './style1.css';
// import React , {useState,useEffect } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// import axios from 'axios'
// const Login = () => {
//     const navigate=useNavigate()
//     const[username,setUserName]=useState('')
//     const[password,setPassword]=useState('')
//     const[userlist,setUserlist]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:3001/Users')
//         .then(res=>setUserlist(res.data))
//         .catch(err=>console.log(err))
//     },[])

//     const handleLogin=()=>{
//         const userExist=userlist.some(u=>u.username===username && u.password===password)
//         if(userExist){
          
//             navigate('/')
//         }
//         else{
//             alert("Invalid username or password")
//         }
//     }
//   return (
//     <div>
      
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Document</title>
//   <link rel="stylesheet" href="style1.css" />
//   <section>
//     <div className="form-box">
//       <div className="form-value">
//         <form action="">
//           <br />
//           <h2>Login Form</h2>
//           <div className="inputbox">
//             <ion-icon name="mail" />
//             <input type="email" required="" />
//             <label htmlFor="">Email</label>
//           </div>
//           <div className="inputbox">
//             <ion-icon name="lock" />
//             <input type="password" required="" />
//             <label htmlFor="">Password</label>
//           </div>
//           <div className="forget">
//             <label htmlFor="">
//               <input type="checkbox" />
//               Remember Me
//               <a href="#">Forget Password</a>
//             </label>
//           </div>
//           <button className="button-77" role="button">
//             Log in
//           </button>
//           <div className="register">
//             <p>
//               Don't have an account
//               <a href="demo1.html">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </section>


//     </div>
//   )
// }

// export default Login









// /*


// import React from 'react'
// import './style1.css';
// const Login = () => {
//   return (
//     <div>
      
//   <meta charSet="UTF-8" />
//   <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//   <title>Document</title>
//   <link rel="stylesheet" href="style1.css" />
//   <section>
//     <div className="form-box">
//       <div className="form-value">
//         <form action="">
//           <br />
//           <h2>Login Form</h2>
//           <div className="inputbox">
//             <ion-icon name="mail" />
//             <input type="email" required="" />
//             <label htmlFor="">Email</label>
//           </div>
//           <div className="inputbox">
//             <ion-icon name="lock" />
//             <input type="password" required="" />
//             <label htmlFor="">Password</label>
//           </div>
//           <div className="forget">
//             <label htmlFor="">
//               <input type="checkbox" />
//               Remember Me
//               <a href="#">Forget Password</a>
//             </label>
//           </div>
//           <button className="button-77" role="button">
//             Log in
//           </button>
//           <div className="register">
//             <p>
//               Don't have an account
//               <a href="demo1.html">Register</a>
//             </p>
//           </div>
//         </form>
//       </div>
//     </div>
//   </section>


//     </div>
//   )
// }

// export default Login



// import React , {useState,useEffect } from 'react'
// import { Link,useNavigate } from 'react-router-dom'
// import axios from 'axios'
// const Login = () => {
//     const navigate=useNavigate()
//     const[username,setUserName]=useState('')
//     const[password,setPassword]=useState('')
//     const[userlist,setUserlist]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:3001/user')
//         .then(res=>setUserlist(res.data))
//         .catch(err=>console.log(err))
//     },[])

//     const handleLogin=()=>{
//         const userExist=userlist.some(u=>u.username===username && u.password===password)
//         if(userExist){
          
//             navigate('/')
//         }
//         else{
//             alert("Invalid username or password")
//         }
//     }
//   return (
   
//         <div class="login-page">
//     <div class="form" onSubmit={handleLogin}>
//     <form class="login-form">
   
//       <input type="text"placeholder="username" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
//       <br></br>
//       <br></br>
//       <input type="password" placeholder="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//       <br></br>
//       <br></br>
//       <button>login</button>
//       <br></br>
//       <br></br>
//       <Link to="/signup">Don't have an account?Signup</Link>
//     </form>
    
//   </div>
// </div>
//   )
// }

// export default Login;

// */