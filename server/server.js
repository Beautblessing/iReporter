// server.js
import express from 'express';

import morgan from 'morgan';
import redFlagRoute from './routes/Redflag';

const app = express();
const port = process.env.PORT || 8039;

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', redFlagRoute);
// Other routes
// app.all('/*', (req, res) => {
//     res.status(404).send({ status: 0, message: 'Invalid request' });
// });


app.get('/', (req, res) => res.status(200).send({ status: 'Success', message: 'Welcome To iReporter' }));

// app.all('*', (req, res) => res.status(404).send({
//     status: 'fail',
//     message: 'Route not found, try the following endpoints /api/v1/redflags, ',
// }));
app.listen(port);
console.log(`app running on port ${port}`);


export default app;
