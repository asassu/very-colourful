module.exports = function(app, COLOURlovers) {

    app.get('/color/view/:id', function(req, res) {

    	var id = req.params.id;

    	COLOURlovers.get('/color/' + id, function(err, data) {
		    if(err) throw err;
		    account = data;
		    console.log(account);

		    //account = app.data.accounts[1];

		    //console.log(account);

			res.render('colorView.jade', {
            	account: account
        	})

		})

        
    })

}
