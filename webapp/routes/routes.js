var fs = require('fs');

module.exports = function(app) {

	// application -------------------------------------------------------------

	app.get('/', function(req, res) {
			var data = fs.readFileSync('data/test.txt').toString('utf8').split('\n');
			var pageNames = []; 
			for (var i = 0; i < data.length; i++) {
				var pageName = data[i].split('\t')[0];
				pageName = pageName.split('_').join(' ');
				pageNames.push(pageName);
			}
			var numPages = pageNames.length;

			res.render('index', {
					wikiPageNames: pageNames,
					numberOfPages: numPages,
			});
	});

	app.get('/electionday', function(req, res) {
			var data = fs.readFileSync('data/oldtest.txt').toString('utf8').split('\n');
			var pageNames = []; 
			for (var i = 0; i < data.length; i++) {
				var pageName = data[i].split('\t')[0];
				pageName = pageName.split('_').join(' ');
				pageNames.push(pageName);
			}
			var numPages = pageNames.length;

			res.render('electionIndex', {
					wikiPageNames: pageNames,
					numberOfPages: numPages,
			});
	});

	app.get('/about', function(req, res) {
		res.render('about.ejs');
	});

	app.get('/wikipage', function(req, res) {
		res.render('wikipage.ejs');
	});

	app.get('/electionWikipage', function(req, res) {
		res.render('electionWikipage.ejs');
	});

	app.get('/getData', function(req, res){
		var pageNames = fs.readFileSync('data/test.txt').toString('utf8').split('\n');
		res.json({ pageData: pageNames });
	});

	app.get('/getElectionData', function(req, res){
		var pageNames = fs.readFileSync('data/oldtest.txt').toString('utf8').split('\n');
		res.json({ pageData: pageNames });
	});

};
