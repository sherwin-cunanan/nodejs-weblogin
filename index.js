const express = require('express');
const morgan = require('morgan');
const debugServer = require('debug')('app:server');
const chalk = require('chalk');
const path = require('path');

const app = express();

const port = process.env.PORT || 3000;
const www = process.env.WWW || './';
const env = process.env.NODE_ENV;
const host = process.env.HOST;

app.use(express.static(path.join(__dirname,'public')));

if (env === 'development')
{
    app.use(morgan('tiny'));
    chalk.green(debugServer('Morgan Enabled ...'));
}


debugServer(`serving ${www}`);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname,'views','index.html'));
});

app.listen(port, () => debugServer(`listening on ${host}:${chalk.green(port)}`));
