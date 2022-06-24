import React from 'react'
import './Footer.css';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <div className="container6">
    <div className="chat"> 
    <img src="photo/Animation.gif" alt="Animation" className="logoAnimation" style={{borderRadius : "5px" , width : "50px"}}></img>
     </div>
    <div className="desc"> Living, learning, & leveling up one day at a time. </div>
    <div className="social"> 
    <div className="s1"><a href="https://www.facebook.com/shubham.kanojia.756/"><FacebookOutlinedIcon  /></a></div>
<div className="s2"><a href="https://www.instagram.com/_shubh_16_5/"><InstagramIcon/></a></div>
    <div className="s3"><a href="https://www.linkedin.com/in/shubham-kanojia-2621441b9/"><LinkedInIcon/></a></div>
    <div className="s4">
    <a href="https://github.com/ShubhOO7"><TwitterIcon/></a>
    </div>

    <div className="s5">
        <a href="https://github.com/ShubhOO7"><GitHubIcon/></a>
    </div>
     
     
     
     
     
     </div>

     <div className="end">  HandCrafted by : Shubh </div>
    

    </div>
  )
}

export default Footer