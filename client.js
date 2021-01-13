const { IP, PORT } = require('./constants');

//add net library from node
const net = require('net');
//establish connection with the game server
const connect = function(){
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.setEncoding('utf8');
  //conn.on() is an event handler to handle incoming data. Once the connection is established the event handler, conn.on() will console that the connection is made
  conn.on('connect',()=>{
    console.log(`Successfully connected to game server`);
    //send a name via conn.write method. set the name using the format Name :_____ and send the name in string format
    conn.write(`Name: ABC`);
    //conn.write(`Move: up`);
  });
  conn.on('connect', ()=>{
    console.log(`Say: Hi`);
  });
  conn.on('data',data=>{
    console.log(`Server says ${data}`);
  });
  return conn;
}
//ES 6 shorthand of exporting modules
module.exports = {connect};

