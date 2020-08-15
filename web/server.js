import WebSocket from 'ws';

// setup a 'const' wrapper for the whole shpiel so we can run it standalone
// as a function call: runServer(port
const runServer = async (port) => {
  const wsserver = new WebSocket.Server({ port: port });
  var serverMessage = 'Server';

  wsserver.on('connection', (client) => {
    console.log('Client has connected\n');
    //console.log(client);
    console.log(wsserver);

    serverMessage = srvMsg(serverMessage);

    client.send(serverMessage);
    console.log(`\n     Sending Message : ===> ${serverMessage}`); 

    client.on('message', (clientMessage) => {
      console.log(`\n===> Received message:      ${clientMessage}`);
      console.log(`\n     Sending Message : ===> ${serverMessage}`); 

      if(clientMessage == "timeout") {
        serverMessage = "disconnect";
        console.log('Setting Timeout of 5000 ms..');

        sleep(5000).then(() => { 
          client.send(serverMessage);
          console.log(`\n     Sending Message : ===> ${serverMessage}`); 
          wsserver.close();
        });
      
      } else {
        serverMessage = 'Server';
        serverMessage = srvMsg(serverMessage);
        client.send(serverMessage);
        console.log(`\n     Sending Message : ===> ${serverMessage}`); 
      };
    });

    wsserver.on('close', () => {
      console.log('Connection Closed');
    }); 

    wsserver.on('error', () => {
      client.send('error');
    }); 
  });
};

function srvMsg(serverMessage) {
  var datetime = new Date();
  var serverMessage =  `${datetime} :: ${serverMessage}` ;
  return serverMessage
};

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
};

runServer(8088);


// wsserver.on()

// function accept(req, res) {
//   // all incoming requests must be websockets
//   if (!req.headers.upgrade || req.headers.upgrade.toLowerCase() != 'websocket') {
//     res.end();
//     return;
//   }

//   // // can be Connection: keep-alive, Upgrade
//   // if (!req.headers.connection.match(/\bupgrade\b/i)) {
//   //   res.end();
//   //   return;
//   // }

//   //wsserver.handleUpgrade(req, req.socket, Buffer.alloc(0), onConnect);
// }

// function onConnect(ws) {
//   ws.on('message', function (message) {
//     let name = message.match(/([\p{Alpha}\p{M}\p{Nd}\p{Pc}\p{Join_C}]+)$/gu) || "Guest";
//     ws.send(`Hello from server, ${name}!`);

//     setTimeout(() => ws.close(1000, "Bye!"), 5000);
//   });
//}