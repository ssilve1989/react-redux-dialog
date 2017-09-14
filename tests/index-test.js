import React from 'react'
import configureStore from 'redux-mock-store';
import expect from 'expect';
import { Provider } from 'react-redux';
import { setModal, unsetModal, Actions } from 'src/actions';
import reducer from 'src/reducer';
import ModalContainer from 'src/container/ModalContainer';
import { renderToStaticMarkup as render } from 'react-dom/server';
import { combineReducers, createStore } from 'redux';

const mockStore = configureStore();

describe('React Redux Dialog', () => {
	const DummyComponent = () => <div className="dummy">I'm Dumb</div>;

	it('initial reducer returns null', () => {
		expect(reducer(undefined, {})).toEqual(null);
	});

	describe('Actions and Reducers', () => {
		let store;

		beforeEach(() => {
			store = mockStore({});
		});

		it(`should dispatch and handle ${Actions.SET_MODAL}`, () => {
			const props = {
				componentProps: {  },
				modalProps: { title: "Dummy Modal" }
			}
			store.dispatch(setModal(DummyComponent, props));
			const action = store.getActions()[0];
			expect(action).toEqual({
				type: Actions.SET_MODAL,
				payload: { Component: DummyComponent, props }
			});

			let state = reducer(undefined, action);
			expect(state).toEqual({
				Component: DummyComponent,
				props
			});
		});

		it(`dispatches and handles ${Actions.UNSET_MODAL}`, () => {
			store.dispatch(unsetModal());
			const action = store.getActions()[0];
			expect(action).toEqual({ type: Actions.UNSET_MODAL });

			let state = { Component: DummyComponent, props: { anything: 'goes here' }};
			state = reducer(state, action);
			expect(state).toBe(null);
		});
	});
})
