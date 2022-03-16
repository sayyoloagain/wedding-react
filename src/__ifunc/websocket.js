// import alertify from 'alertifyjs'

class WebSocketClient {
    constructor(props, url, args) {
        this.url = url
        this.autoReconnectInterval = 10 * 1000;	// ms
        this.args = args || {}
        this.props = props;

        this.reconnectTimeoutId = null;
    }
    open(url) {
        if (typeof (url) !== 'undefined' && url !== null) {
            this.url = url;
        }

        // console.log(this)
        this.instance = new WebSocket(this.url + '?clientid=' + this.args);
        this.instance.onopen = this.onOpen.bind(this)
        this.instance.onmessage = this.onMessage.bind(this)
        this.instance.onclose = this.onClose.bind(this)
        this.instance.onerror = this.onError.bind(this)
    }
    send(data, option) {
        try {
            this.instance.send(data, option);
        } catch (e) {
            this.instance.emit('error', e);
        }
    }
    reconnect() {
        // console.log(`WebSocketClient: retry in ${this.autoReconnectInterval}ms`);
        //this.instance.removeAllListeners();
        if (this.reconnectTimeoutId) {
            clearTimeout(this.reconnectTimeoutId)
        }
        this.reconnectTimeoutId = setTimeout(() => {
            // console.log("WebSocketClient: reconnecting...");
            this.open(this.url, this.args);
        }, this.autoReconnectInterval)
    }

    onOpen() {
        // console.log("WebSocketClient: connected " + this.url)
    }
    onMessage(message) {
        // console.log("WebSocketClient: message", data)
        // this.emit('message', message.data)
        console.log(message);
        // alert('WS Message')
        // alertify.message('WS Message')

        try {
            let _data = JSON.parse(message.data.toString())
            
        } catch (error) {

        }
    }
    onError(e) {
        // console.log("WebSocketClient: error")
        switch (e.code) {
            case 'ECONNREFUSED':
                this.reconnect();
                break;
            default:

                break;
        }
    }
    onClose(e) {
        // console.log("WebSocketClient: closed");
        switch (e.code) {
            case 1000:	// CLOSE_NORMAL
                // console.log("WebSocket: closed");
                break;
            default:	// Abnormal closure
                this.reconnect();
                break;
        }
    }
}
export default WebSocketClient;