const express = require('express');
const morgan = require('morgan');
const debugServer = require('debug')('app:server');
const debugRoute = require('debug')('app:route');
const debugDB = require('debug')('app:db');
const chalk = require('chalk');
const path = require('path');
const helmet = require('helmet');
const joi = require('joi');
const config = require('config');


const app = express();

process.env.NODE_ENV = 'production';

console.log(chalk.white((config.get('name'))));

/* Template Engine */
app.set('view engine','ejs');


/* Middleware */
app.use(express.static(path.join(__dirname,'public')));
app.use(helmet());
if (config.get('debug_mode')) {
  app.use(morgan('tiny'));
  chalk.green(debugServer('Morgan Enabled ...'));
}

const loginRoutes = require('./routes/login');


/* Routes */
app.use('/',loginRoutes);

/* Server */
app.listen(config.get('port'), () => console.log(`listening on ${config.get('host')}:${chalk.green(config.get('port'))}`));
