'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _Redflag = require('./routes/Redflag');

var _Redflag2 = _interopRequireDefault(_Redflag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)(); // server.js

var port = process.env.PORT || 8039;

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());

app.use('/api/v1', _Redflag2.default);
// Other routes
// app.all('/*', (req, res) => {
//     res.status(404).send({ status: 0, message: 'Invalid request' });
// });


app.get('/', function (req, res) {
  return res.status(200).send({ status: 'Success', message: 'Welcome To iReporter' });
});

// app.all('*', (req, res) => res.status(404).send({
//     status: 'fail',
//     message: 'Route not found, try the following endpoints /api/v1/redflags, ',
// }));
app.listen(port);
console.log('app running on port ' + port);

exports.default = app;