const get = keyword => {
    const url = `http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=${keyword}&rating=y`;
    
    return fetch(url)
        .then(response => response.json())
        .then(giphyResponse => {
                const { data: { image_url } } = giphyResponse;
                return image_url;
            });
};

module.exports = router => {
    router.get('/gif/:keyword', function*() {
        const { keyword } = this.params;
        const url = yield get(keyword);
        
        this.body = {url};
    });
};