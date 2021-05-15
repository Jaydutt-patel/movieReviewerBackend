import Express from 'express';
import moviesRouter from './routes/movies';

const app = new Express();

app.use(Express.json({limit: '50mb'}));
app.use(Express.urlencoded({limit: '50mb', extended: true }));
//app.use(Express.bodyParser({limit: '50mb'}));


app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Pass to next layer of middleware
  return next();
});

app.use('/movie', moviesRouter);


export default app;
