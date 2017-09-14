// module.exports = {
// 	ModalContainer: require('./container'),
// 	Actions       : require('./actions').Actions,
// 	setModal      : require('./actions').setModal,
// 	unsetModal    : require('./actions').unsetModal,
// 	reducer       : require('./reducer')
// };
import Modalcontainer from './container/ModalContainer';
import { Actions, setModal, unsetModal } from './actions';
import reducer from './reducer';

export { Modalcontainer, reducer, Actions, setModal, unsetModal };