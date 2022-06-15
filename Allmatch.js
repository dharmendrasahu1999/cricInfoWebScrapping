const request = require("request")
const cheerio = require("cheerio")
const scoreCardObj = require("./scorecard")

function getAllMatchesLink(url) {
    request(url, function(err, response, html) {
        if (err) {
            console.log(err);
        } else {
            getAllLinks(html);
        }
    })
}

function getAllLinks(html) {
    let $ = cheerio.load(html);
    let scoreCardElems = $("a[data-hover='Scorecard']");
    for (let i = 0; i < scoreCardElems.length; i++) {
        let link = $(scoreCardElems[i]).attr('href');
        // console.log(link);
        let fullLink = "https://www.espncricinfo.com" + link
        scoreCardObj.ps(fullLink)
    }
}

module.exports = {
    gAlmatches: getAllMatchesLink
}