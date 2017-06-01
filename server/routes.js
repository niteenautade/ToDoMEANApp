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

   app.delete('/api/delete/:id', function(req, res){
       console.log("Dellllll",req.params.id);
        Task.findByIdAndRemove(req.params.id, function (err, id) {  
            // We'll create a simple object to send back with a message and the id of the document that was removed
            // You can really do this however you want, though.
            var response = {
                message: "Todo successfully deleted",
            };
            res.send(response);
        });
    });

}