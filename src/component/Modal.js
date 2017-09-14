import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import { propTypes as ModalProps } from 'react-modal/lib/components/Modal';

class Modal extends React.Component {
	static propTypes = {
		title    : PropTypes.string,
		showClose: PropTypes.bool,
		...ModalProps
	}

	render() {
		const { title, showClose, children, onRequestClose, ...rest } = this.props;
		console.log(onRequestClose);
		return (
			<ReactModal isOpen={ true }
			            onRequestClose={ onRequestClose }
			            { ...rest } >
				<section>
					<header>
						{ showClose && <span>&times;</span> }
						{ title && <h1>{ title }</h1> }
					</header>
					<article>
						{ children }
					</article>
				</section>
			</ReactModal>
		);
	}
}

export default Modal;