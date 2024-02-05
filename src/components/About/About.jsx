import React from 'react'
import aboutImage from '../../assets/images/about_image.jpg'
import { Button } from 'antd'
import { DownloadOutlined } from '@ant-design/icons';
import "./About.css"
import resumePdf from '../../assets/pdf/Swapnil_Manale_Resume.pdf'

const About = () => {

  return (
    <section id='about'>
      <div className='aboutImageBox'>
      <img className='aboutImage' src={aboutImage} alt='About'/>
      <div className='imageFrame' />
      </div>
      <div className='aboutContent'>
        <span className='aboutText'>About Me</span>
        <div className='lineAnimation'></div>
        <p className='aboutPara'>Enthusiastic React.js Developer with a solid foundation in building
         dynamic and interactive web applications. Proficient in creating
          modern, user-centric interfaces and implementing functionality using
           React and related technologies. Skilled in front-end development
            with a strong grasp of HTML5, CSS3, and JavaScript ES6+. Quick learner
             and team player, eager to contribute to collaborative projects and
              grow in a dynamic development environment. Committed to staying
               updated with the latest web development trends and best practices.
         </p>
         <a href={resumePdf} download='resume'>
         <Button className='aboutbtn' type="primary" shape="round" icon={<DownloadOutlined />} size='large'>Download Resume</Button>
         </a>
      </div>
    </section>
  )
}

export default About