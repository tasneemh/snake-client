const CONSTANTS = require('./constants');
const MOVE_KEYS = CONSTANTS.MOVE_KEYS;
const MESSAGES = CONSTANTS.MESSAGES;
//connection variable stores active connection object
let connection;
//setup user interface specifically so that we can handle user input via stdin
const setupInput = function(conn){
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data',(key)=>{
    handleUserInput(key);
  });
  return stdin;
}
let func;
const handleUserInput = function(key){
  //exit after encountering ctrl+c command 
    if (key ==='\u0003'){
    process.exit();
    }else if (MOVE_KEYS[key]){  //handling movements
    connection.write(`Move: ${MOVE_KEYS[key]}`);
    }else if (MESSAGES[key]){//send messages
    connection.write(`Say: ${MESSAGES[key]}`); 
    }
};
module.exports = { setupInput };