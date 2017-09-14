import { Actions } from './actions';

export const getModalState = state => state.modal;

export default (state = null, action) => {
	switch(action.type) {
		case Actions.SET_MODAL: {
			const { Component, props } = action.payload;
			return Object.assign({}, state, { Component, props });
		}

		case Actions.UNSET_MODAL: {
			return null;
		}

		default:
			return state;
	}
}