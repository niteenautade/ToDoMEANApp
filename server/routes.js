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
       var task = req.body;
       console.log(req);
       console.log("Taskkkkk>>>>>>>",task);
       Task.addTask(task,function(err,task) {
        if (err) throw err;
        res.json(task);
        console.log('Task added!');
        });
   });

}