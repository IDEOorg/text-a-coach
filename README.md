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
gulp build --env=prod
```

Grab the resulting files inside `/dist`
