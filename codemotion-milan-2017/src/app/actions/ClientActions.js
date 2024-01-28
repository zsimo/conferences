import Api from '../Api';
import AppDispatcher from '../dispatcher/AppDispatcher';
import ClientConstants from '../constants/ClientConstants';

export default {

    initWebSocket() {
        Api.initWebSocket();
    },

    newMessage(message) {
        AppDispatcher.dispatch({
            actionType: ClientConstants.NEW_MESSAGE,
            message,
        });
    },

    load() {
        Api.loadRooms();
    },

    loaded(newRooms) {
        AppDispatcher.dispatch({
            actionType: ClientConstants.LOADED,
            newRooms,
        });
    },

    loadError(response) {
        AppDispatcher.dispatch({
            actionType: ClientConstants.LOAD_ERROR,
            response,
        });
    },

};
