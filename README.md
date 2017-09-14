# react-redux-dialog

[![Travis](https://img.shields.io/travis/ssilve1989/react-redux-dialog.svg)](https://travis-ci.org/ssilve1989/redux-session-manager-middleware)
[![npm](https://img.shields.io/npm/v/react-redux-dialog.svg?style=flat-square)](https://www.npmjs.com/package/redux-session-manager-middleware)
[![Coveralls](https://img.shields.io/coveralls/ssilve1989/react-redux-dialog.svg?style=flat-square)](https://coveralls.io/github/ssilve1989/react-redux-dialog)

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
