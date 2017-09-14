# react-redux-modal

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

# Installation
```bash
npm i -S react-redux-modal
```

# Usage

## Mount the reducer
The reducer must be mounted at 'modal'.
```javascript
import { combineReducers } from 'redux';
import { reducer as modal } from 'react-redux-modal';

export default combineReducers({ 
    modal,
    // ... other reducers
})
```

## Mount the container
```jsx harmony
import { ModalContainer } from 'react-redux-modal';
class App extends React.Component {
	render() {
		return (
			<div>
			    <ModalContainer />
			    {/* ... the rest of your component */}
            </div>
		)
	}
}
```

## Dispatch a modal via setModal
```javascript
import { setModal } from 'react-redux-modal';

setModal(AnyComponent, {
    componentProps: { ... },
    modalProps: { ... }
})
```

And that's it! The ModalContainer will take care of the rest.

[build-badge]: https://img.shields.io/travis/user/repo/master.png?style=flat-square
[build]: https://travis-ci.org/user/repo

[npm-badge]: https://img.shields.io/npm/v/npm-package.png?style=flat-square
[npm]: https://www.npmjs.org/package/npm-package

[coveralls-badge]: https://img.shields.io/coveralls/user/repo/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/user/repo
