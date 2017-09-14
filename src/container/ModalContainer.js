import React from 'react';
import { connect } from 'react-redux';
import Modal from '../component/Modal';
import { getModalState } from '../reducer';
import { unsetModal } from '../actions';

const ModalContainer = ({ state, unsetModal }) => {
	if(!state) return null;
	const { Component, props: { modalProps={}, componentProps={} } } = state;

	return (
		<Modal onRequestClose={ unsetModal } { ...modalProps }>
			<Component { ...componentProps } />
		</Modal>
	);
}

export default connect(state => ({
	state: getModalState(state)
}), { unsetModal })(ModalContainer);