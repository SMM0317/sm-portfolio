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
        <p className='aboutPara'>Dynamic and results-oriented Developer with 2 years of extensive experience in Angular, React, React Native and supplemented by foundational knowledge in Node.js and MongoDB. Skilled in creating dynamic web and mobile applications and adept at bug fixing. Leading teams and enhancing performance, dedicated to building solutions that meet real-world needs.
         </p>
         <a href={resumePdf} download='resume'>
         <Button className='aboutbtn' type="primary" shape="round" icon={<DownloadOutlined />} size='large'>Download Resume</Button>
         </a>
      </div>
    </section>
  )
}

export default About