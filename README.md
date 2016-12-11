# Text A Coach: Frontend

This application is the frontend website for text-a-coach. It is available at:

[[FUTURE-URL]]

## Local Setup

Requirements:
- Gulp
- Bower
- Node (5.11)

Get your local environment setup:

```
cd /path/to/project
npm install
bower install
```

Run the application:
```
gulp serve --env=dev
```

Your app should be available at http://localhost:3000/

## Deployment

### Heroku

**One-Time Setup**

Make sure you have the [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli) installed and you are logged in.

Set up your repo for the Heroku app:
```
cd /path/to/textacoach-frontend
heroku login
```

Set up a remote for each flavor:
```
heroku git:remote -a HEROKU-FLAVOR-NAME -r FLAVOR-NAME
```

**Deploy Step**

To deploy to production, ensure you are checked out on the latest from the flavor's branch and simply run:
```
git push FLAVOR-NAME LOCAL-BRANCH-NAME:master
```

### Github Pages (LEGACY)

The original textacoach.com website was deployed via Github pages.
Documentation on the old process below:

Run the production build with the following:

```
gulp --env=prod
```

The resulting built files will be inside `/docs`. Commit these to master in order to auto-update the website via Github Pages.
