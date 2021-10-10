// create randomId function
// function randomRoomId(){
//     let roomId = '';
//     let length = 30;
//     let randomChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
 
//     for(counter = 0; counter < length; counter++){
//         roomId += randomChar.charAt(Math.floor(Math.random() * randomChar.length));
//     }
//     return roomId;
// }
// console.log(randomRoomId())

const app = require('./app');
const server = require('http').createServer(app);
require('./io')(server);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Game listening on port ${PORT}!`);
});