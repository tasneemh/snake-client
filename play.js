//add net library from node
const net = require('net');
//establish connection with the game server
const connect = function(){
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
  conn.setEncoding('utf8');
  conn.on('connect',()=>{
    //console.log();
    conn.write(`Connected to server!`);
  });
  conn.on('data',data=>{
    console.log(`Server says ${data}`);
  });
  return conn;
}
console.log('Connecting....');
connect();