const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

// mongodb+srv://root:mongodbpassword@pruebadb.cc8gu.mongodb.net/?retryWrites=true&w=majority