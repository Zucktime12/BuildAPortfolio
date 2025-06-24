import React, { Component } from 'react';
import '../App.css';
// import contact from '../headings/contact.svg'
// import instagram from '../social/instagram.svg'
// import github from '../social/github.svg'
// import twitter from '../social/twitter.svg'
// import linkedin from '../social/linkedin.svg'
// import resume from '../resume.pdf'


class Contact extends Component {

  	render() {
	  return (
	    	<section id="contact" className="Contact">
	    		<div className="Contact-container">
	        	<h2>Contact</h2>

	        	<div className="Contact-text">
	        		Send me an <a href="mailto:bwzuck12@gmail.com">email</a>, I'd love to hear from you! 
	        	</div>

	        	<div className="Contact-ctas">
					<div className="Contact-cta">
						<p>Resume is Available Upon Request</p>
					</div>
	        	</div>        	
			</div>
	      </section>
	  );
	}
}

export default Contact;