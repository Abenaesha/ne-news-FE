# Deploying Your NC News Front End with Netlify

## Making your own repository

If you haven't already, you will need to make a public repo on GitHub so that a link to it can be shared on your C.V.

1. From the GitHub homepage, click the "New repository" button.
2. Give your new repo a name.
3. Make sure you **don't** create a new `README.md` or `.gitignore` as this will conflict with your own.
4. Change the `remote` of your current project `git remote set-url origin https://github.com/your-username/your-repo-name.git`.
5. `git push origin master`.

## Redirects

Add a file, `_redirects` (no file extension) to your `public` directory.
This file should contain the redirect rule: `/* /index.html 200`.
This is telling Netlify "if a request comes in to _any_ endpoint on our base url - serve our index.html page and give a 200 status".
We put this in the `public` directory to ensure that Webpack includes this file in the production build of the app.

## Create a Build Version

`npm run build`

This script uses Webpack and Babel to "bundle" your code into a few uglified files that can be read by most modern browsers.
Take a look inside - but don't change anything.

## Create a Netlify Account

## Install Netfify's CLI

`npm install netlify-cli -g`

## Deploy to a Draft URL

`netlify deploy`

- Authorise Netlify with GitHub, following the prompts in the browser.
- Select `Create & configure a new site`.
- Provide your choice of site name.
- Select your personal account.
- Provide a deploy path. This needs to point to your build directory and should be `./build`.

Your draft version should now be deployed on a url, e.g. `https://5c13ab16055b9be1725868e6--your-site-name.netlify.com`.
Test it out, make sure that everything is working as expected.

## Deploy a Production Version

`netlify deploy --prod`
Specify your build path again.
This will deploy the site to your actual url: `https://your-site-name.netlify.com`.

## Redeployment

1. Create an updated build version of your code:

```bash
npm run build
```

2. Deploy to a draft url:

```bash
netlify deploy
```

3. Deploy to your production url:

```bash
netlify deploy --prod
```
