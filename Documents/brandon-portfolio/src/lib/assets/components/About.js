import React, { Component } from 'react';
import '../App.css';
// import about from '../headings/about.svg'
import react from '../icons/react.png'
// import angularjs from '../icons/angularjs.png'
import css3 from '../icons/css3.png'
import git from '../icons/git.png'
import html5 from '../icons/html5.png'
import javascript from '../icons/javascript.png'
import jquery from '../icons/jquery.png'
// import photoshop from '../icons/photoshop.png'
import php from '../icons/php.png'
import sass from '../icons/sass.png'
// import shopify from '../icons/shopify.png'
import wordpress from '../icons/wordpress.png'

class About extends Component {
  render() {
    return (
      	<section id="about" className="About gradient">
      		<div className="About-container">
              <h2>About</h2>
              <div className="flex">   
                <div className="About-text flex-about">
      	        	<p>After obtaining my bachelor's degree in Accounting in 2013 and working in the industry for three years, I decided to turn my passion for web development into a career.</p>
                  <p>Furthering my knowledge through online courses, literature, and personal projects. Eventually landing several different jobs to hone my skills.</p>
                  <p>Being a developer that is continuing to learn at every opportunity, I have always enjoyed the problem solving aspect of development. I love being able to find multiple solutions for a problem or even multiple ways to build a website from scratch. I hope you will let me prove to you my passion for this career.</p>
            	  </div>
                <div className="About-tech flex-about">
                  <h3>Experienced in:</h3>
                  <div className="About-icons">
                    <img className="About-icon" src={javascript} alt="Javascript" />
                    <img className="About-icon" src={html5} alt="HTML5" />
                    <img className="About-icon" src={css3} alt="CSS3" />
                    <img className="About-icon" src={wordpress} alt="Wordpress" />
                    <img className="About-icon" src={git} alt="Git" />
                    <img className="About-icon" src={sass} alt="SASS" />
                    <img className="About-icon" src={jquery} alt="JQuery" />
                    <img className="About-icon" src={php} alt="PHP" />
                  </div>
                  <h3>Learning:</h3>
                   <div className="About-icons">
                    <img className="About-icon" src={react} alt="React" />
                    {/* <img className="About-icon" src={angularjs} alt="AngularJS" /> */}
                  </div>
                </div>
            </div>
          </div>
        </section>
    );
  }
}

export default About;
