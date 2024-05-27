import React from 'react'
import { Button } from 'antd';
import Profile from '../../assets/images/swapnil_manale.png'
import './Intro.css';

const Intro = () => {

const handleContactBtn = () => {
  document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
}

  return (
    <section id='intro'>
      <div className='introContent'>
        <span className='hello'>Hello,</span>
        <span className='introText'>
            I'm <span className='introName'>Swapnil Manale</span>
             <br /> Software Developer</span>
        <p className='introPara'>I am a skilled developer with 2 years of extensive experience in building dynamic and interactive web and mobile applications. Proficient in creating modern, user-centric interfaces and implementing functionality using React and related technologies.
         </p>
         <Button className='introbtn' type="primary" shape="round" size='large' onClick={handleContactBtn}>Contact Me</Button>
      </div>
      <div>
        <img className='introImage' src={Profile} alt='Profile'/>
      </div>
    </section>
  )
}

export default Intro