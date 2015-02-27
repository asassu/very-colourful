module.exports = function(app, COLOURlovers) {

	app.get('/color/list', function(req, res) {

        //var accounts = app.data.accounts

        var accounts;

        COLOURlovers.get('/colors/top', function(err, data) {
		    if(err) throw err;
		    accounts = data;

			res.render('colorList.jade', {
	            accounts: accounts
	        })

		})

        
    })

}