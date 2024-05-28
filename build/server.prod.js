const express = require('express');
const path = require('path');
// const config = require('../config');
// var compression = require('compression')
const distPath = path.resolve(__dirname, '..', 'dist');
const app = express();
// app.use(compression())
// serve our static stuff like index.css
app.use(express.static( path.resolve(distPath)));
// app.get('*/login.html', function (req, res) {
//   // and drop 'public' in the middle of here
//   res.sendFile(path.join(__dirname, 'dist', 'login.html'))
// })
// send all requests to index.html so browserHistory in React Router works
// app.get('*', (req, res) => {
//   // and drop 'public' in the middle of here
//   res.sendFile(path.join(path.resolve(distPath), 'index.html'));
// });

const PORT = process.env.PORT || 7082;
app.listen(PORT, () => {
  console.log(`Production Express server running at localhost:${PORT}`);
});
