import express from 'express';
import { renderer } from './renderer';

const PORT = process.env.PORT || 3000;

// initialize the application and create the routes
const app = express();
app.get('/', renderer);
app.get('/services', renderer);
app.get('/frequently-asked-questions', renderer);
app.get('/contact-us', renderer);
app.use(express.static('build'));
app.use(express.static('build-server'));

// start the app
app.listen(PORT, () => console.log("Christians Lawyer listening on port " + PORT + "..."));