import WebSocket from 'ws';


const runClient = async (url) => {
  const wsclient = new WebSocket(url);
  var clientMessage = "Client";

  wsclient.onopen = function (server) {
    console.log("Connected to server\n");
    console.log(server);
    //console.log(wsclient);

    clientMessage = "Client";
    clientMessage = newMsg(clientMessage);

    this.send(clientMessage);
    console.log(`\nSending Message: => ${clientMessage}\n`);

    wsclient.onmessage = function (serverMessage) {
      console.log(`\n => Received Message: ${serverMessage.data}\n`);

      if (falseBit == true) {
        clientMessage = "timeout";
        this.send(clientMessage);
        console.log(`\nSending Message: => ${clientMessage}\n`);
      } else if (falseBit == false) {
        clientMessage = "Client";
        clientMessage = newMsg(clientMessage);
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
};

function newMsg(clientMessage) {
  var datetime = new Date();
  var clientMessage = `${datetime} :: ${clientMessage}` ;
  return clientMessage;
};

runClient("ws://localhost:8088");