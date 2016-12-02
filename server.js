const app = require('./app.js');

app.server.listen(app.config.port, () => console.log('Server is running on port ' + app.config.port));