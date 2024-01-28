export default class WebSocketWrapper {
    constructor({ subPath = 'websocket', onOpen = () => {}, onMessage = () => {}, onClose = () => {}, onError = () => {}, fallBack = () => {}, checkInterval = 5000 }) {
        this.subPath = subPath;
        this.onOpen = onOpen;
        this.onMessage = onMessage;
        this.onClose = onClose;
        this.onError = onError;
        this.fallBack = fallBack;
        this.checkInterval = checkInterval;
    }

    connect() {
        this.reconnect();
        setInterval(this.checkConnection.bind(this), this.checkInterval);
    }

    reconnect() {
        const location = window.location;
        try {
            this.socket = new WebSocket(`${(location.protocol === 'https:') ? 'wss' : 'ws'}://${location.hostname}/${this.subPath}`);
            this.socket.onopen = this.onOpen;
            this.socket.onmessage = this.onMessage;
            this.socket.onclose = this.onClose;
            this.socket.onerror = this.onError;
        } catch (e) {
            // no op
        }
        try {
            this.fallBack();
        } catch (e) {
            // no op
        }
    }

    checkConnection() {
        if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
            this.reconnect();
        }
    }
}
