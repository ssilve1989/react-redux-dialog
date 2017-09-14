import React from 'react';
import DemoModal from './DemoModal';
import ModalContainer from '../../src/container/ModalContainer';
import { setModal } from '../../src/actions';
import { connect } from 'react-redux';

class Demo extends React.Component {
	render() {
		return (
			<div>
				<h1>react-redux-modal Demo</h1>
				<ModalContainer />
				<button onClick={ this.onClick }>Click me</button>
			</div>
		)
	}

	onClick = () => {
		this.props.setModal(DemoModal, {
			modalProps: { title: "Demo Modal" },
			componentProps: {}
		});
	}
}

export default connect(null, { setModal })(Demo);