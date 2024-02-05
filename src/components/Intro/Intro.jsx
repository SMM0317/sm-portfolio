import React from 'react'
import { Button } from 'antd';
// import Profile from '../../assets/images/swapnil_manale.png'
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
             <br /> Front end Developer</span>
        <p className='introPara'>I'm a Skilled Front end Developer with a solid foundation in building dynamic and interactive web and mobile applications.
         Proficient in creating modern, user-centric interfaces and implementing functionality using React and related technologies.
         </p>
         <Button className='introbtn' type="primary" shape="round" size='large' onClick={handleContactBtn}>Contact Me</Button>
      </div>
      <div>
        <img className='introImage' src="https://media.licdn.com/dms/image/C4E03AQG-SKuSrWpo0w/profile-displayphoto-shrink_800_800/0/1644563335958?e=1708560000&v=beta&t=ih3I5CtgmTLcbIL1HuJxxoZBZaptku2LUAURCQc6CrU" alt='Profile'/>
      </div>
    </section>
  )
}

export default Intro