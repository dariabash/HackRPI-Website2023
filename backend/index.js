const express = require('express');
const app = express();
// serve up production assets
app.use(express.static(__dirname + '/..' + '/build'));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route
const path = require('path');
console.log(path);
app.get('', (req, res) => {
  console.log(req);
  res.sendFile(path.resolve(__dirname + '/..', 'build', req.route.path));
});
// if not in production use the port 5000
const PORT = process.env.PORT || 8080;
console.log('server started on port:', PORT);
app.listen(PORT);
