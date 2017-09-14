# react-redux-dialog

[![Travis][build-badge]][build]
[![npm package][npm-badge]][npm]
[![Coveralls][coveralls-badge]][coveralls]

Gracefully handle presenting Modal Dialogs via Redux. Leverages [react-modal](https://github.com/reactjs/react-modal).

# Installation
```bash
npm i -S react redux react-redux react-redux-dialog
```

# Usage

## Mount the reducer
The reducer must be mounted at 'modal'.
```javascript
import { combineReducers } from 'redux';
import { reducer as modal } from 'react-redux-dialog';

export default combineReducers({ 
    modal,
    // ... other reducers
})
```

## Mount the container
```jsx harmony
import { ModalContainer } from 'react-redux-dialog';
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
import { setModal } from 'react-redux-dialog';

setModal(AnyComponent, {
    componentProps: { /* Props your AnyComponent uses */ },
    modalProps: { ... }
})
```

And that's it! The ModalContainer will take care of the rest.

### modalProps
| Property | type | Required? | Description |
|:--|:--|:--|:--
title | string | no | A title for the modal, that will appear in the header |
showClose | [boolean=false] | no | Show a close button for the modal

Additionally any other valid prop that [react-modal](https://github.com/reactjs/react-modal) uses will be passed along to the internal Modal.

[build-badge]: https://img.shields.io/travis/ssilve1989/react-redux-dialog/master.png?style=flat-square
[build]: https://travis-ci.org/ssilve1989/react-redux-dialog

[npm-badge]: https://img.shields.io/npm/v/react-redux-dialog.svg.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-redux-dialog

[coveralls-badge]: https://img.shields.io/coveralls/ssilve1989/react-redux-dialog/master.png?style=flat-square
[coveralls]: https://coveralls.io/github/ssilve1989/react-redux-dialog
