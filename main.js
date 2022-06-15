let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595"

const request = require("request")
const cheerio = require("cheerio")
const fs = require("fs")
const path = require("path")

const iplPath = path.join(__dirname, "ipl");
dirCreater(iplPath)
const AllMatchObj = require("./Allmatch");
request(url, cb);

function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractLink(html);
        // console.log(html);
    }
}

function extractLink(html) {
    let $ = cheerio.load(html);
    let anchorElem = $("a[data-hover='View All Results']");
    let link = anchorElem.attr("href");
    let fullLink = "https://www.espncricinfo.com" + link;
    // console.log(fullLink);
    AllMatchObj.gAlmatches(fullLink);
}

function dirCreater(filePath) {
    if (fs.existsSync(filePath) == false) {
        fs.mkdirSync(filePath);
    }
}