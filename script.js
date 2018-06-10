// Get newsfeed
var newsFeed = document.getElementById('newsfeed');

function getNewsfeed() {
    var newsFeedOutput = document.getElementById('newsfeed');
    newsFeedOutput.innerHTML = '';
}

axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=424f2fb4b190440fa24b7b96038e239c')
  .then(function (response) {
    console.log(response);
  })

  .catch(function (error) {
    console.log(error);
  });


