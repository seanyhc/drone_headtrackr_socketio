var io = require('socket.io').listen(8000);
arDrone = require('ar-drone');
var drone = arDrone.createClient();

io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
    if(data == 'takeoff') {
    	drone.takeoff();
    } else if(data =='land') {
    	drone.land();
    } else if(data =='right') {
    	drone.counterClockwise(1);
    } else if (data =='left') {
    	drone.clockwise(1);
    } else if (data == 'hover') {
    	drone.stop();
    } else if (data == 'front') {
        drone.front(0.1);
    } else if (data == 'back') {
        drone.back(0.1);
    }

  });
});



