'use strict';

// 3rd Party Resources
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// Esoteric Resources
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const logger = require('./middleware/logger');

const authRoutes = require('./routes/routes');

const v1Routes = require('./routes/v1')
const v2Routes = require('./routes/v2.js');


// Prepare the express app
const app = express();
// App Level MW
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(logger);

app.get('/',(req,res)=>{
  res.status(200).send("Hello 💇")
})


// Routes
app.use(authRoutes);
app.use('/api/v1', v1Routes);
app.use('/api/v2', v2Routes);

// Catchalls
app.use('*', notFound);
app.use(errorHandler);




module.exports = {
  server: app,
  start: port => {
    if (!port) { throw new Error('Missing Port'); }
    app.listen(port, () => console.log(`Listening on ${port}`));
  },
};
