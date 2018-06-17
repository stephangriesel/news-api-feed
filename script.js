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

      // Title
      var newsItem = response.data.articles[0].title;
      console.log(newsItem);
      var newsItemOutput = `
      <ul class="list-group">
      <li class="list-group-item">${newsItem}</li>
      </ul>
      `;

      // Description
      var newsDesc = response.data.articles[0].description;
      console.log(newsDesc);
      var newsDescOutput = `
      <ul class="list-group">
      <li class="list-group-item">${newsDesc}</li>
      </ul>
      `;

      // Publish Date
      var newsDate = response.data.articles[0].publishedAt;
      console.log(newsDate);
      var newsDateOutput = `
      <ul class="list-group">
      <li class="list-group-item">${newsDate}</li>
      </ul>
      `;

      // Source
      var newsSource = response.data.articles[0].url;
      console.log(newsSource);
      var newsSourceOutput = `
      <ul class="list-group">
      <li class="list-group-item">Source: <a href="${newsSource}">${newsSource}</a></li>
      </ul>
      `;

      // Output
      document.getElementById('news-item').innerHTML = newsItemOutput;
      document.getElementById('news-desc').innerHTML = newsDescOutput;
      document.getElementById('news-date').innerHTML = newsDateOutput;
      document.getElementById('news-source').innerHTML = newsSourceOutput;

    })
    .catch(function(error) {
      console.log(error);
    });
}