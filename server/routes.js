var Task = require('./models/tasks');
module.exports = function(app){

    app.get('/api/get', function(req, res){
        // get all the task
        Task.find({}, function(err, users) {
        if (err) throw err;
        res.send(users);
        });
    });

   app.post('/api/add', function(req, res) {
       newTask.save(function(err) {
        if (err) throw err;
        console.log('Task added!');
        });
   });

}