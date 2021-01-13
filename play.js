
//add connect function from client.js using ES6 shorthand
const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting....');
const connection = connect();
setupInput(connection);