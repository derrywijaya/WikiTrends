# WikiTrends

Upenn ESE Senior Design Project

WikiTrends was originally created as a Senior Design Project at the University of Pennsylvania by Abhiti Prabahar, Cristina Buenahora, Alice Serfati, and Sierra Yit during the 2016-2017 school year.  Their advisor was Professor Chris Callison-Burch.

The goal of the project is to find and analyze spikes in Wikipedia page count data to create a completely unbiased news source across different languages.

Members: Abhiti Prabahar, Cristina Buenahora, Alice Serfati, Sierra Yit

Advisor: Professor Chris Callison-Burch

Goal: Find and analyse spikes in Wikipedia page count data to create a completely unbiased news source across different languages.

Usages:
downloadDay.sh 10 15 (downloads oct 15)

downloadMonth.sh 10 (downloads oct)

Both files download unzipped pages into pageviews/ and then the english parts to enpageviews/. 



##  How to run the web app locally on a Mac.

1. Clone the [WikiTrends github repo](https://github.com/cristinabuenahora/WikiTrends)
2. The WikiTrends web app requires Node.js.  You can install Node.js using a package management system for your Mac like Homebrew
* To install Homebrew follow the steps on the [How to Install Homebrew](https://treehouse.github.io/installation-guides/mac/homebrew) on a Mac instruction guide to install Homebrew.
* Open the Terminal app and type `brew update`. This updates Homebrew with a list of the latest version of Node.
* Type `brew install node.`
3. You'll then need to install several packages
* First change directories in Terminal so that you are in the WikiTrends/node_modules/ directory.  Then use the node package manager to install these packages:
* `npm install express`
* `npm install express-session`
* `npm install body-parser`
* `npm install cookie-parser`
* `npm install method-override`
* `npm install ejs`
4. After that you can change directories to WikiTrends/webapp and run the terminal command `node app.js`.  You should see a message saying "App listening on port 8000".  If you get an error about a missing package, then it may be resolved by running npm install again with the package name.
5. Point your web browser to http://localhost:8000/now  There you should see the WikiTrends web app using example data from some time ago.

##  How to get and process the current page views

1. Change directories to WikiTrends/backend Make the download scripts in
* chmod u+x *.sh

WebApp:
Download Node.js from https://nodejs.org/en/ (choose the version that is recommended for most user -- usually
To run webapp on localhost8080: node app.js
- Make sure node and express are installed

Process:
1. Use dictMaker.py to create a file with pagename '\t' count1 count2 ..... 
2. Use spikeFinder.py to find spikes in the dictMaker output

Done:
Backend
- Script to find the views everyday for a whole month
- Working on script to find the spikes for the month

TODO:
* Write spikeFinder.py, vary num days averaged
* Download a small chunk of files to test spikeFinder.py
