import express      from 'express';
import consolidate  from 'consolidate';
import path         from 'path';
import bodyParser   from 'body-parser';

const app = express();

// View engine
app.set('view engine','html');
app.set('views', path.join(__dirname, '/../views'));
app.engine('.html',consolidate.swig);

// static
app.use(express.static(path.join(__dirname, '/../../public')));

// body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

export default app;
