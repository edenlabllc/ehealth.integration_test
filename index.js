var newman = require('newman'); // require newman in your project

var secret = process.env.POSTMAN_SECRET;
var collection = process.env.POSTMAN_COLLECTION;

var url = `https://api.getpostman.com/collections/${collection}?apikey=${secret}`;

// call newman.run to pass `options` object and wait for callback
newman.run({
    collection: url,
    reporters: 'html'
}, function (err) {
	if (err) { throw err; }
    console.log('collection run complete!');
});
