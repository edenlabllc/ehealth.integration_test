var newman = require('newman'); // require newman in your project

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: "https://api.getpostman.com/collections/2002860-58ebdb22-237f-abfa-732d-c493e3bedd1c\?apikey\=57f8256f514a4a8f9d8134cd6fd5c238",
    reporters: 'cli'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
