var request = require('request');
var rp = require('request-promise-native');
var cheerio = require('cheerio');
var parseString = require('xml2js').parseString;

async function search_papers(query,n_papers, sorting_type, metadata){


      if (sorting_type == "citation") {
      sorting_command = "%20sort_cited:y"

    } else if (sorting_type = "date"){
      sorting_command = "%20sort_date:y"
    } else {
      sorting_command = ""
      console.log("Sorting by relevance")
    }


    if (metadata=="full"){
      metadata_command = "&resultType=core"
    } else {
      metadata_command = ""
    }

    var options = {
      uri: 'https://www.ebi.ac.uk/europepmc/webservices/rest/search?query=' + 
      query + 
      sorting_command +
      metadata_command +
      '&pageSize=' + n_papers +
      "&format=json",

      headers: {
          'User-Agent': 'Request-Promise'
      },
      json: true // Automatically parses the JSON string in the response
    };
    
    retobj = rp(options)
      .then(function (result) {

          fancy_result =  {}
          fancy_result.count =    result.hitCount
          fancy_result.papers = result.resultList.result
          return(fancy_result)





      })
      .catch(function (err) {
          // API call failed...
      });
    
    return(retobj)
  
  }
  

module.exports = search_papers;