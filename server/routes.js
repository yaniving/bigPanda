module.exports = function(app){
    var messages = require('./controllers/messages');
    app.get('/messages', messages.get);
    app.get('/messages/:delta', messages.getDelta);
    app.get('/messages/filter/:filter', messages.filter);
  //  app.get('/messages/:id', messages.findById);
    app.post('/messages', messages.add);
  //  app.put('/messages/:id', messages.update);
 //   app.delete('/messages/:id', messages.delete);
}