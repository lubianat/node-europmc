var request = require('request');
var rp = require('request-promise-native');
var cheerio = require('cheerio');
var parseString = require('xml2js').parseString;

sorting_possibilities = ["","%20sort_cited:y","%20sort_date:y"]
query = "dendritic cell"

var options = {
  uri: 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=' + query + sorting_possibilities[0] +"&format=json",
  headers: {
      'User-Agent': 'Request-Promise'
  },
  json: true // Automatically parses the JSON string in the response
};

rp(options)
  .then(function (result) {
      console.log(result.resultList.result[0]);
  })
  .catch(function (err) {
      // API call failed...
  });