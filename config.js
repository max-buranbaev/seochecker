module.exports = {
    port: process.env.port || 4000,
    mongodb: {
        uri: process.env.MONGOLAB_URI || 'mongodb://localhost/seochecker'
    }
};
