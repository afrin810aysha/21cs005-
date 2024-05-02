import React from 'react'
import"./Navbar.css"
import { NavLink } from 'react-router-dom'
import{useAuth} from './Auth'

const Navbar = () => {
    const auth=useAuth()
  return (
 <div>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/ad'>Admin</NavLink>
        <NavLink to="/User" >User</NavLink>
        {!auth.User && <NavLink to="/Login">Login</NavLink>}
        {!auth.User && <NavLink to="/Signup">Signup</NavLink>}
      </nav>
    </div>
  )
}
export default Navbar