export const Actions = {
	SET_MODAL  : "@react-redux-modal/SET_MODAL",
	UNSET_MODAL: "@react-redux-modal/UNSET_MODAL"
}

export const setModal   = (Component, props) => ({ type: Actions.SET_MODAL, payload: { Component, props } })
export const unsetModal = () => ({ type: Actions.UNSET_MODAL });