import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import morgan from 'morgan';
import config from './config/config';

/**
* ROUTES
*/
import TopListRoutes from './modules/toplist/toplistRoutes';

const { PORT, MONGO_URL } = config;

/**
* DATABASE SETUP
*/
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URL);
mongoose.connection
  .once('open', () => console.log(`Connected to MongoDb: running on ${MONGO_URL}`)) // eslint-disable-line
  .on('error', err => console.warn('Warning', err)); // eslint-disable-line

const app = express();

/**
* MIDDLEWARE SETUP
*/
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', config.PORT);
  res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept,Authorization');
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/api/v1', [TopListRoutes]);

app.listen(PORT, err => {
  if (err) return console.log(err); // eslint-disable-line no-console
  console.log(`App listen to port ${PORT}`); // eslint-disable-line no-console
});
