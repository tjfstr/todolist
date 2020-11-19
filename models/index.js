const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost:27017/todo-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to Database'))
.catch((err) => console.log(message.err))

mongoose.Promise = Promise;

module.exports.Todo = require('./todo')