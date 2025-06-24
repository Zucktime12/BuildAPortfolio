import React, { Component } from 'react';
import '../App.css';


class Footer extends Component {
  render() {
    return (
      	<section className="Footer">
      		<div className="Footer-container">
        		<a href="/" className="Footer-link">
      				<p>Brandon | {new Date().getFullYear()}</p>
            </a>
        	</div>
        </section>
    );
  }
}

export default Footer;
