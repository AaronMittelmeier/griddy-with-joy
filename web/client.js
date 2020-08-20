import WebSocket from 'ws';
import { msgFormatter, sleep } from './socketFunc.js';

const runClient = async (url) => {
  const wsclient = new WebSocket(url);
  var clientMessage = msgFormatter('ClientMessage');

  wsclient.onopen = function (server) {
    console.log("Connected to Server\n");

    this.send(clientMessage);
    console.log(`\n     Sending Message: ===> ${clientMessage}\n`);

    wsclient.onmessage = function (serverMessage) {
      console.log(`\n===> Received Message: ${serverMessage.data}\n`);
     
      this.send(msgFormatter(clientMessage));
      console.log(`\n     Sending Message : ===> ${clientMessage}\n`);

      if (serverMessage.data == 'disconnect')
        {
          clientMessage = 'timeout';
          this.send(clientMessage);
        }

      };
    };

    wsclient.onclose = function (event) {
      if (event.wasClean) {
        console.log(`Connection closed cleanly, code=${event.code} reason=${event.reason}\n`);
      } else {
        console.log('Connection Is Dead....\n');
      }
    };

    wsclient.onerror = function (error) {
      console.log(`ERROR: ${error.message}\n`);
    };
};


runClient("ws://localhost:8088");