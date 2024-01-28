import rest from 'rest';
import mime from 'rest/interceptor/mime';
import EnvProps from './class/EnvProps';
import WebSocketWrapper from './class/WebSocketWrapper';
import ClientActions from './actions/ClientActions';

// create a rest client
const client = rest.wrap(mime);
const regStatusSuccess = /2\d{2}$/i;

class Api {
    initWebSocket() {
        const onMessage = (message) => {
            ClientActions.newMessage(JSON.parse(message.data));
        };
        const fallBack = () => {
            ClientActions.load()
        };
        const displayWebSocket = new WebSocketWrapper({ subPath: EnvProps.displaySubPath, onMessage, fallBack });
        displayWebSocket.connect();
    }

    loadRooms() {
        client({ path: '/rooms' }).then((response) => {
            if (response.status.code.toString().match(regStatusSuccess)) {
                ClientActions.loaded(response.entity);
            } else {
                ClientActions.loadError(response);
            }
        }, (response) => {
            ClientActions.loadError(response);
        });
    }

}

export default new Api();
