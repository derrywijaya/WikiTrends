var fs = require('fs');

module.exports = function(app) {

	// application -------------------------------------------------------------

	app.get('/', function(req, res) {
			var data = fs.readFileSync('data/now.txt').toString('utf8').split('\n');
			var pageNames = [];
			var descriptions = [];
			var categories = [];
			for (var i = 0; i < data.length; i++) {
				var pageName = data[i].split('\t')[0];
				pageName = pageName.split('_').join(' ');
				pageNames.push(pageName);
				var desc = data[i].split('\t')[2];
				descriptions.push(desc);
				var cat = data[i].split('\t')[3];
				categories.push(cat);
			}
			var numPages = pageNames.length;

			res.render('index', {
					type: "now",
					wikiPageNames: pageNames,
					numberOfPages: numPages,
					descriptions: descriptions,
					categories: categories
			});
	});

	app.get('/now', function(req, res) {
			var data = fs.readFileSync('data/now.txt').toString('utf8').split('\n');
			var pageNames = [];
			var descriptions = [];
			var categories = [];
			for (var i = 0; i < data.length; i++) {
				var pageName = data[i].split('\t')[0];
				pageName = pageName.split('_').join(' ');
				pageNames.push(pageName);
				var desc = data[i].split('\t')[2];
				descriptions.push(desc);
				var cat = data[i].split('\t')[3];
				categories.push(cat);
			}
			var numPages = pageNames.length;

			res.render('index', {
					type: "now",
					wikiPageNames: pageNames,
					numberOfPages: numPages,
					descriptions: descriptions,
					categories: categories
			});
	});

	app.get('/week', function(req, res) {
		var data = fs.readFileSync('data/week.txt').toString('utf8').split('\n');
		var pageNames = [];
		var descriptions = [];
		var categories = [];
		for (var i = 0; i < data.length; i++) {
			var pageName = data[i].split('\t')[0];
			pageName = pageName.split('_').join(' ');
			pageNames.push(pageName);
			var desc = data[i].split('\t')[2];
			descriptions.push(desc);
			var cat = data[i].split('\t')[3];
			categories.push(cat);
		}
		var numPages = pageNames.length;

		res.render('index', {
				type: "week",
				wikiPageNames: pageNames,
				numberOfPages: numPages,
				descriptions: descriptions,
				categories: categories
		});
	});

	app.get('/month', function(req, res) {
		var data = fs.readFileSync('data/month.txt').toString('utf8').split('\n');
		var pageNames = [];
		var descriptions = [];
		var categories = [];
		for (var i = 0; i < data.length; i++) {
			var pageName = data[i].split('\t')[0];
			pageName = pageName.split('_').join(' ');
			pageNames.push(pageName);
			var desc = data[i].split('\t')[2];
			descriptions.push(desc);
			var cat = data[i].split('\t')[3];
			categories.push(cat);
		}
		var numPages = pageNames.length;

		res.render('index', {
				type: "month",
				wikiPageNames: pageNames,
				numberOfPages: numPages,
				descriptions: descriptions,
				categories: categories
		});
	});

	app.get('/howitworks', function(req, res) {
		res.render('howitworks.ejs');
	});

	app.get('/about', function(req, res) {
		res.render('about.ejs');
	});

	app.get('/wikipage', function(req, res) {
		res.render('wikipage.ejs');
	});

	app.get('/getNowData', function(req, res){
		var nowData = fs.readFileSync('data/now.txt').toString('utf8').split('\n');
		var weekData = fs.readFileSync('data/week.txt').toString('utf8').split('\n');
		var monthData = fs.readFileSync('data/month.txt').toString('utf8').split('\n');
		res.json({ data: nowData });
	});

	app.get('/getWeekData', function(req, res){
		var nowData = fs.readFileSync('data/now.txt').toString('utf8').split('\n');
		var weekData = fs.readFileSync('data/week.txt').toString('utf8').split('\n');
		var monthData = fs.readFileSync('data/month.txt').toString('utf8').split('\n');
		res.json({ data: weekData });
	});

	app.get('/getMonthData', function(req, res){
		var monthData = fs.readFileSync('data/month.txt').toString('utf8').split('\n');
		res.json({ data: monthData });
	});

};
