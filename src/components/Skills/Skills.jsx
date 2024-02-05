import React from 'react'
import reactLogo from "../../assets/images/react_logo.png"
import htmlLogo from "../../assets/images/html_logo.png"
import cssLogo from "../../assets/images/css-logo.png"
import javaScriptLogo from "../../assets/images/javascript_logo.png"
import reduxLogo from "../../assets/images/redux_logo.png"
import firebaseLogo from "../../assets/images/firebase_logo.png"
import wordpressLogo from "../../assets/images/wordpress_logo.png"
import { Row, Col } from 'antd'
import './Skills.css'

const Skills = () => {

  const skillsData = [
    { id: 1, name: 'HTML', image: htmlLogo },
    { id: 2, name: 'CSS', image: cssLogo },
    { id: 3, name: 'JavaScript', image: javaScriptLogo },
    { id: 4, name: 'React', image: reactLogo },
    { id: 5, name: 'React Native', image: reactLogo },
    { id: 6, name: 'Redux', image: reduxLogo },
    { id: 7, name: 'Firebase', image: firebaseLogo },
    { id: 8, name: 'WordPress', image: wordpressLogo },
  ];

  return (
    <section id='skills'>
      <span className='skillText'>My Skills</span>
      <div className='lineAnime'></div> 
      <Row gutter={[16, 16]} justify='center' style={{marginTop: 40}} >
        {skillsData.map((skill) => (
          <Col key={skill.id} xs={24} sm={12} md={8} lg={6} className='skillCol'>
            <div className='skillBox'>
              <img src={skill.image} alt={skill.name} />
              <p className='skillName'>{skill.name}</p>
            </div>
          </Col>
        ))}
      </Row>
    </section>
  )
}

export default Skills