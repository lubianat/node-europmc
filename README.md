#node-europmc

A nodejs wrapper for the europe PMC RESTful API.
https://europepmc.org/RestfulWebService

Code based in node-ncib (https://github.com/CAYdenberg/node-ncbi) and getpapers(https://github.com/ContentMine/getpapers)

# Getting started
var pmc = require('node-europepmc');

# Basic use

## Performing a search

The basic function queries the Europe PMC API using 4 parameters:

query : The search string of choice
n_papers : the number of papers which info will be returned
sorting_type : How the papers will be sorted. Default is "relevance", 
but can be changed to "date" or "citation". 
metadata : Amount of metadata required. Defaults to "lite" (essential metadata).
The other option is "full", which includes abstract, full text links, and MeSH terms.


let query = "dendritic cell"


pmc.search_papers(query, n_papers = 2, sorting_type = "citation").then((results) => {

    console.log(results)


})


This will log


{ count: 230059,
  papers: 
   [ { id: '9521319',
       source: 'MED',
       pmid: '9521319',
       doi: '10.1038/32588',
       title: 'Dendritic cells and the control of immunity.',
       authorString: 'Banchereau J, Steinman RM.',
       journalTitle: 'Nature',
       issue: '6673',
       journalVolume: '392',
       pubYear: '1998',
       journalIssn: '0028-0836; 1476-4687; ',
       pageInfo: '245-252',
       pubType: 'research support, u.s. gov\'t, p.h.s.; review; journal article',
       isOpenAccess: 'N',
       inEPMC: 'N',
       inPMC: 'N',
       hasPDF: 'N',
       hasBook: 'N',
       citedByCount: 7201,
       hasReferences: 'Y',
       hasTextMinedTerms: 'Y',
       hasDbCrossReferences: 'N',
       hasLabsLinks: 'Y',
       hasTMAccessionNumbers: 'N',
       firstIndexDate: '2008-01-29',
       firstPublicationDate: '1998-03-01' },
     { id: '12490959',
       source: 'MED',
       pmid: '12490959',
       pmcid: 'PMC2803035',
       doi: '10.1038/nature01322',
       title: 'Inflammation and cancer.',
       authorString: 'Coussens LM, Werb Z.',
       journalTitle: 'Nature',
       issue: '6917',
       journalVolume: '420',
       pubYear: '2002',
       journalIssn: '0028-0836; 1476-4687; ',
       pageInfo: '860-867',
       pubType: 'research support, u.s. gov\'t, p.h.s.; research support, non-u.s. gov\'t; research-article; review; journal article',
       isOpenAccess: 'N',
       inEPMC: 'Y',
       inPMC: 'N',
       hasPDF: 'Y',
       hasBook: 'N',
       hasSuppl: 'N',
       citedByCount: 6011,
       hasReferences: 'Y',
       hasTextMinedTerms: 'Y',
       hasDbCrossReferences: 'N',
       hasLabsLinks: 'Y',
       hasTMAccessionNumbers: 'N',
       firstIndexDate: '2010-09-15',
       firstPublicationDate: '2002-12-01' } ] }


       where count is the total number of papers.


       To change the number of results retrieved at a time, just change the n_papers parameter


       To get the abstract from the first paper, for example, you could do:
        
pmc.search_papers(query, n_papers = 1, sorting_type = "citation", metadata = "full").then((results) => {

  console.log(results.papers[0].abstractText)


})