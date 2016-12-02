const path = require('path');

module.exports = (app) => {

    app.use((req, res, next) => next());

    app.get('/', (req, res, next) => res.sendFile(path.resolve(__dirname, 'public/index.html')));
};