import React from 'react'
import './Body2.css';
function Body2() {
  return (
    <div className="container2">
        <div className="part1">
            <div className="title1">
            Hi, I’m Shubh. Nice to meet you.
            </div>
            <div className="description1">
            Since beginning my journey as a web developer nearly 1 years ago, I've been doing development since my 2nd Year . Currently working on improving problem solving skills. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
            </div>
        </div>
        {/* <div className="part2">
            part2
        </div>
         */}
        <div className="float">
            <div className="float1"> 
               <h1 float11>
                   B.Tech Student
               </h1>
               <div float12 style={{width : "80%"}}>
               I started my journey of B.Tech on Dec 2020. Since then my journey of B.Tech is full of ups and downs in terms of acing in race of technology.
               </div>
               <div float13>
               <h3>Things I enjoy doing</h3>


               <ul className="b">
                 <li>Creating a new stuff</li>
                 <li>Curious about new technology</li>
                 <li>Exploring and Adventuring</li>
               </ul>               
               </div>
             </div>
            <div className="float2"> 
            
            <h1 float11>
                   A Web Developer
               </h1>
               <div float12 style={{width : "80%"}}>

                   I like to code things from scratch, and enjoy bringing ideas to life in the browser.That's What I say for Web Development. Create New Stuff.
               </div>
               <div float13>
               <h3>Stuff Build So far</h3>


               <ul className="b">
                 <li>DSA - Decoder</li>
                 <li>Feedback App</li>
                 <li>CRUD App</li>
                 <li>Weather App</li>
                 <li>College Desk</li>
               </ul>               
               </div>
            
            
             </div>
            <div className="float3"> 
            <h1 float11>
                   Competitive Programmer
               </h1>
               <div float12 style={{width : "80%"}}>
                   I started my journey of Competitive progamming on April 2021. Since then 
                   solved problem on various different platforms.
               </div>
               <div float13>
               <h3>Programming Profile </h3>


               <ul className="b">
                 <li>Solved more than 300 problem on leetcode</li>
                 <li>Solved more than 200 problem on Gfg</li>
                 <li>3 star on Codechef</li>
               </ul>               
               </div>
             </div>
        </div>
    </div>
  )
}

export default Body2