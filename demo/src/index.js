import React  from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import Demo from './Demo';
import store from './store';

render(
	<Provider store={ store }>
		<Demo />
	</Provider>, document.querySelector('#demo')
)
