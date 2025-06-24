// 6/22/25 - Updated code after Node.js update for GSAP integration.

import React from 'react';
import ReactModal from 'react-modal';

class Project extends React.Component {
	constructor () {
	    super();
		    this.state = {
		      showModal: false
	    };
	    
	    this.handleOpenModal = this.handleOpenModal.bind(this);
	    this.handleCloseModal = this.handleCloseModal.bind(this);
	    
	}
	  
	handleOpenModal() {
	    this.setState({ showModal: true});
	}
	  
	handleCloseModal() {
	    this.setState({ showModal: false});
	}

	componentWillMount() {
	    ReactModal.setAppElement('body');
	}

	render() {
		const { details } = this.props;

		return (
			<li className="Project">
				<div onClick={this.handleOpenModal}>
					<img className="Project-image" src={'projects/' + details.image} alt={details.name}/>
					<div className="Project-overlay">
						<p>{details.name}</p>
					</div>
				</div>
				<div >
					<ReactModal 
						isOpen={this.state.showModal} 
						contentLabel="This is my Mod" 
						shouldCloseOnOverlayClick={true}
						onRequestClose={this.handleCloseModal}
					>
					<div className="modal-header">
						<h3>{details.name}</h3>
					</div>
					<div className="modal-body">
						<img className="Project-image" src={'projects/' + details.image} alt={details.name} />
						<p className="desc-body">{details.desc}</p>
					</div>
          			<div className="modal-footer">
          				{ details.havLink && <a className="button" target="_blank" href={details.link}>Click for {details.buttontext}</a>}
						<button className="button" onClick={this.handleCloseModal}>Close Modal</button>
          			</div>
        			</ReactModal>
        			
				</div>
				<div className="Project-tag">
					<p>{details.tag}</p>
				</div>
			</li>
		)
	}
}

// const props = {};

export default Project;

// import React, { useState, useEffect } from 'react';
// import ReactModal from 'react-modal';

// const Project = ({ details }) => {
//   const [showModal, setShowModal] = useState(false);

//   useEffect(() => {
//     // Set app element for accessibility
//     ReactModal.setAppElement('body');
//   }, []);

//   const handleOpenModal = () => setShowModal(true);
//   const handleCloseModal = () => setShowModal(false);

//   return (
//     <li className="Project">
//       <div onClick={handleOpenModal} role="button" tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && handleOpenModal()}>
//         <img className="Project-image" src={`projects/${details.image}`} alt={details.name} />
//         <div className="Project-overlay">
//           <p>{details.name}</p>
//         </div>
//       </div>
//       <ReactModal
//         isOpen={showModal}
//         contentLabel={details.name}
//         shouldCloseOnOverlayClick={true}
//         onRequestClose={handleCloseModal}
//         className="Modal"
//         overlayClassName="Overlay"
//       >
//         <div className="modal-header">
//           <h3>{details.name}</h3>
//         </div>
//         <div className="modal-body">
//           <img className="Project-image" src={`projects/${details.image}`} alt={details.name} />
//           <p className="desc-body">{details.desc}</p>
//         </div>
//         <div className="modal-footer">
//           {details.havLink && (
//             <a className="button" target="_blank" rel="noopener noreferrer" href={details.link}>
//               Click for {details.buttontext}
//             </a>
//           )}
//           <button className="button" onClick={handleCloseModal}>
//             Close Modal
//           </button>
//         </div>
//       </ReactModal>
//       <div className="Project-tag">
//         <p>{details.tag}</p>
//       </div>
//     </li>
//   );
// };

// export default Project;