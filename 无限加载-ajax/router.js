app.get('/news', function(req, res) {
    let index = parseInt(req.query.index);
    let length = parseInt(req.query.length);
    let news = [];

    for (let i = index; i < index + length; i++) {
        news.push(`新闻${i}`);
    }

    // setInterval(() => {
    //     res.send(news);
    // }, 3000);

    res.send(news);

});