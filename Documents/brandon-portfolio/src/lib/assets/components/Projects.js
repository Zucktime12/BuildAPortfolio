// 6/22/25 - Updated code after Node.js update for GSAP integration.

import React, { Component } from 'react';
import '../App.css';
// import projects from '../headings/projects.svg'
import myProjects from '../myProjects';
import Project from './Project';

class Projects extends Component {

	constructor() {
		super();
		this.state = {
			projects: {},
		};
	}

	componentWillMount() {
	    this.setState({
			projects: myProjects
		});
	}

	render() {
	  	return (
	    	<section id="projects" className="Projects gradient">
	    		<div className="Projects-container">
	    			<h2>My Work!</h2>

		            <ul className="Projects-list">
						{
							Object
							.keys(this.state.projects)
							.map(key => <Project key={key} index={key} details={this.state.projects[key]} />)
						}
					</ul>
	        	</div>
	      	</section>
	  	);
	}
}

export default Projects;
    

// import React, { useState, useEffect } from 'react';
// import '../App.css';
// import myProjects from '../myProjects';
// import Project from './Project';

// const Projects = () => {
//   const [projects, setProjects] = useState({});

//   useEffect(() => {
//     setProjects(myProjects);
//   }, []);

//   return (
//     <section id="projects" className="Projects gradient">
//       <div className="Projects-container">
//         <h2>My Work!</h2>
//         <ul className="Projects-list">
//           {Object.keys(projects).map((key) => (
//             <Project key={key} index={key} details={projects[key]} />
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// };