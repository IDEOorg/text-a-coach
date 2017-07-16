# Text A Coach

Text A Coach is a tool provided by the Steps team at IDEO.org. It is part of a larger effort to design and build digital tools that can empower low-income communities in the U.S. to improve their financial futures. Read more about Steps at https://steps.ideo.org.

Text A Coach allows you to:

* Receive SMS and Facebook messages from users and reply from a web portal
* Provide a website that lets you show examples from the conversations you've had (screened for privacy information)

This repository contains the code for the front end of the website. The backend that supports it can be found at https://github.com/IDEOorg/text-a-coach-api

## Examples

We built three example brands to show how Text A Coach can be used:

* [www.inthe99.com](http://www.inthe99.com)
* [www.thedoublecheck.org](http://www.thedoublecheck.org)
* [www.pocketsquad.org](http://www.pocketsquad.org)

## Quick Start

### Local Setup

#### Requirements

To get started, make sure you have the following tools installed and available:

- [Gulp](http://gulpjs.com/)
- [Bower](https://bower.io/)
- [Node](https://nodejs.org/) (v6.11)

#### Install Dependencies

Clone the repository, change into that directory and use npm and bower to install the dependencies:

```
git clone https://github.com/IDEOorg/text-a-coach.git
cd text-a-coach
npm install
bower install
```

### Start the Server

Each time you want to work on the app, you can run the local web server from within the project directory:
```
gulp serve --env=dev
```

You can now see the site at http://localhost:3000/

### To Host the Website

The app is designed to run easily on a Node [Heroku](https://www.heroku.com/) instance.

You should be able to connect Heroku to your Github repository and do a [deploy]. Follow the   steps outline here: (https://devcenter.heroku.com/articles/getting-started-with-nodejs#deploy-the-app).

To populate the website with example content you must also follow the instructions on the backend project:
https://github.com/IDEOorg/text-a-coach-api

### A note about the included Terms of Service and Privacy pages

This website includes two pages, one for a Privacy Policy and one for the Terms of Service for using Text a Coach. These are based on the documents we used for our example websites, with our own service and organization names removed. However, it is your responsibility to ensure you have proper policies and terms in place if you host your own service. Please contact us if you would like to discuss this further. IDEO.org would be happy to help. 

### Production Files

To manually produce the static files meant for a production distribution you can run:
```
gulp --env=prod
```

The resulting built files will be inside `/dist`. You can upload and serve them from just about any simple webserver.

### Contribution and Submitting Bugs

We welcome all contributions to this code base, as well as bug reports. To suggest a contribution please open a pull request against this repository. It is likely a good idea to get in touch before doing any work so we can coordinate. 

Please submit any bug reports via Github issues. Click on the Issues tab at the top of this page. 

## About IDEO.ORG

IDEO.org uses human-centered design to create products, services, and experiences that improve the lives of people living in poverty.

We’re mission-driven designers who are looking to have as much impact as possible in the lives of the poor. It starts with getting to know the people we’re designing for. Without them, we wouldn’t know what to design, how it should work, or why it matters. From there we build, test, and iterate until we get it right. 

To learn more please visit www.ideo.org

## Questions / Contact

To get in touch with us please use the form at https://steps.ideo.org/about/ and we'll get back to you quickly. 

© IDEO.ORG 2017

