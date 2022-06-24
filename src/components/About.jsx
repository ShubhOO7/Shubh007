import React from 'react'
import Header from './Header';
import Button from "./shared/Button"
function About() {
  return (
      <>
        <Header/>
        <div className="head">
            <h1>About Me
            </h1>
            <h1 style={{margin :" 2%" , color : "white"}}>I am Shubham Kanojia</h1>
            <div className="bio">
                <div className="essay">
                An engineering student with major in Electronics and Communication Engineering and a major inclination towards Competitive Programming and Web Development. I love exploring new and upcoming technologies . I'm also adept at motivating others. Passionate about food and code.
                </div>
                <div className="value">
                    <table >
                       <tr>
                         <td>Name </td>
                         <td>: Shubham Kanojia</td>
                       </tr>
                       <tr>
                         <td>Age </td>
                         <td> : 21</td>
                       </tr>

                       <tr>
                         <td>Nationality </td> 
                         <td> : Indian</td>
                       </tr>
                       <tr>
                         <td>Language </td>
                         <td> : English ,Hindi</td>
                       </tr>
                       <tr>
                         <td>College</td>
                         <td> : National Institute of Technology , Jamshedpur</td>
                       </tr>
                     </table>
                </div>
            </div>
            <div className="resume">
            <a href="https://github.com/ShubhOO7/resume/blob/main/Shubh2.pdf">
            <Button resume={"RESUME"}>   </Button>
            </a>
               
            </div>
        </div>
      </>
  )
}
Button.defaultProps = {
    resume: "Say Hello"
}
export default About