import { useState } from "react";

function useWebsocket() {
    const [data, setData] = useState([]);
    const socket = new WebSocket("wss://stream.binance.com:9443/ws/ethusdt@trade")
    socket.onmessage = function(event:any) {
        setData(event.data)
    }
    return [data]
}

export default useWebsocket;