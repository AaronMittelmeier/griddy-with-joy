import WebSocket from 'ws';
import { msgFormatter, sleep } from './socketFunc.js';

const runClient = async (url) => {
  const wsclient = new WebSocket(url);
  var clientMessage = "Client";

  wsclient.onopen = function (server) {
    console.log("Connected to server\n");
    console.log(server);
    //console.log(wsclient);

    clientMessage = "Client";
    clientMessage = msgFormatter(clientMessage);

    this.send(clientMessage);
    console.log(`\nSending Message: => ${clientMessage}\n`);

    wsclient.onmessage = function (serverMessage) {
      console.log(`\n => Received Message: ${serverMessage.data}\n`);


      clientMessage = "Client";
      clientMessage = msgFormatter(clientMessage);
      this.send(clientMessage);
      console.log(`\nSending Message: => ${clientMessage}\n`);
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