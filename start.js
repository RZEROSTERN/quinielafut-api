require('babel-polyfill');
require('babel-register')({
    sourceMap: 'inline',
    presets: ["env", "es2017"],
    plugins: ["transform-async-to-generator"],
    // include superfluous whitespace characters and line terminators
    compact: false
});

require("dotenv").config({path: ".env"});

const app = require("./app");

const port = process.env.PORT || process.env.port || 8000;

const server = app.listen(port, () => {
    console.log("Running Quiniela Fut WS in port: %s", port);
});

module.exports = server;