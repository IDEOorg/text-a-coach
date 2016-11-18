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

Run the production build with the following:

```
gulp --env=prod
```

The resulting built files will be inside `/docs`. Commit these to master in order to auto-update the website via Github Pages.
