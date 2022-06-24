import React from 'react'
import Button from "./shared/Button"
import {Link} from 'react-router-dom'

function message() {
  return (
    <div className="last">
        <div className="mess" style={{color :" #a15cfa" , fontWeight : "700" ,fontSize : "50px" , margin : "10%"}}>
            Your message has been sent to the admin.
        </div>
        <Link to="/">
        <Button resume = {"Home"}></Button></Link>
    </div>
  )
}

export default message