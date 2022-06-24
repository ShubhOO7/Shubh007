import React from 'react'
import { ImCross } from "react-icons/im";
import { AiOutlineReload } from "react-icons/ai";
import Button from "./shared/Button"
import {Link} from "react-router-dom"

function hello() {
  return (
    <>
    <div className="hellonav">
     <div className="navimg">
     <img src="photo/Animation.gif" alt="Animation" className="logoAnimation"></img>
     </div>
     <div className="navanimate">
     <img src="photo/avatar.svg" alt="avatar.img" className="nav-avatar"></img>
     </div>
     <div className="navbutton">
     <a href="/connect"> <AiOutlineReload style={{color :" #a15cfa"}}/></a>
     <Link to="/"> <ImCross style={{color :" #a15cfa"}}/></Link>
     
     
     </div>
     </div>
     <div className="hello-body">
     <div className="nav-des">
     Thanks for taking the time to reach out. How can I help you today?
     </div>

     <div class="parent">
<div class="div1">
<input type="text" className="formControl1" placeholder="Name"></input>
<input type="email" className="formControl2" placeholder="Email"></input>
 </div>

<div class="div3"><textarea rows="10" cols="100" className="for" placeholder="Message"></textarea> </div>
<div class="div4" className="btn-hello">
<Link to="/message">

<Button type="submit" >Submit</Button> 
</Link>
</div>
</div>
     </div>
    </>
  )
}

export default hello