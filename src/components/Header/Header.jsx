import React, {useState} from 'react'
import Logo from '../../assets/images/logosm.png'
import "./Header.css"
import { Link } from 'react-scroll'
import { MenuOutlined } from '@ant-design/icons';

const Header = () => {
  const [showMenuItem, setShowMenuItem] = useState(false);
  return (
      <nav className='navBar'>
      <img className='logo' src={Logo} alt="MKV" />
        <div className='desktopMenu'>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={500} className="desktopMenuItem">About</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuItem">Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-5} duration={500} className="desktopMenuItem">Skills</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-5} duration={500} className="desktopMenuItem">Contact Me</Link>
        </div>
        <MenuOutlined className='menuIcon' onClick={() => setShowMenuItem(!showMenuItem)}/>
        <div className='mobileMenu' style={{display: showMenuItem? 'flex' : 'none'}}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuItem" onClick={() => setShowMenuItem(false)}>Home</Link>
          <Link activeClass='active' to='about' spy={true} smooth={true} offset={-75} duration={500} className="mobileMenuItem" onClick={() => setShowMenuItem(false)}>About</Link>
          <Link activeClass='active' to='projects' spy={true} smooth={true} offset={-100} duration={500} className="mobileMenuItem" onClick={() => setShowMenuItem(false)}>Projects</Link>
          <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-5} duration={500} className="mobileMenuItem" onClick={() => setShowMenuItem(false)}>Skills</Link>
          <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-5} duration={500} className="mobileMenuItem" onClick={() => setShowMenuItem(false)}>Contact Me</Link>
        </div>
      </nav>
   
  )
}

export default Header