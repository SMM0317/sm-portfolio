import React from 'react'
import Logo from '../../assets/images/logosm.png'
import { LinkedinOutlined, GithubOutlined, InstagramOutlined, TwitterOutlined } from '@ant-design/icons';
import './Footer.css'

const Footer = () => { 

    const currentYear = new Date().getFullYear();

  return (
    <div className='footerContainer'>
      <img className='footerLogo' src={Logo} alt="MKV" />
      <div className='copyrightsBox'>
      <p className='footerText'> {currentYear} &copy; Swapnil Manale. All rights reserved.</p>
      <p className='footerText'>Icons by <a href='https://icons8.com/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>icons8.com.</a></p>
      </div>
      <div className='socialContainer'>
      <div className='socialIconBox'>
      <a href='https://www.linkedin.com/in/swapnil-manale/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <LinkedinOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://github.com/SMM0317' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <GithubOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://www.instagram.com/swapnil_manale/' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <InstagramOutlined />
      </a>
      </div>
      <div className='socialIconBox'>
      <a href='https://twitter.com/manale_swapnil' target='_blank' rel="noreferrer" style={{ color: '#fff' }}>
      <TwitterOutlined />
      </a>
      </div>
      </div>
    </div>
  )
}

export default Footer