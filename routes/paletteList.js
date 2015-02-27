module.exports = function(app, COLOURlovers) {

    app.get('/palette/list', function(req, res) {

        //var accounts = app.data.accounts

        var accounts;

        COLOURlovers.get('/palettes/top', function(err, data) {
            if(err) throw err;
            accounts = data;

            res.render('paletteList.jade', {
                accounts: accounts
            })

        })

        
    })

}