// function
newsfeed();

function newsfeed() {
  var news = "Test";
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=424f2fb4b190440fa24b7b96038e239c",
      {
        params: {
          country: news
        }
      }
    )
    .then(function(response) {
        // Log response
      console.log(response.data);

      // Format
      var newsItem = response.data.articles[0].title;
      console.log(newsItem);
    })
    .catch(function(error) {
      console.log(error);
    });
}
