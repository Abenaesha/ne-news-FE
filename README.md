# Northcoders News

> ALERT! Please **create your own empty repo** for NC News to avoid later issues with deploying and git histories. You should then use `create-react-app` and set the git remote using `git remote set-url origin your.new.git.url/here`.

Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of [Reddit](https://www.reddit.com/).

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This review sprint should consolidate your understanding of making a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.

 _Note: You will come across a Cross-Origin-Resource-Sharing error once you start fetching data from your back-end API, which will need a slight update: [Express CORS Middleware](https://expressjs.com/en/resources/middleware/cors.html)_

## Objectives

1. Pull together all the front-end skills, technologies and best practises you have learnt.
2. Make asynchronous API calls to your own server.
3. Use HTTP request types to interact with your backend, and HTTP response codes to update your UI accordingly.

## What to do

Use the generic react-project-checklist as a guide to setting up your app. Here are some project-specific things to bear in mind:

1. Have a look at your API endpoints and at Reddit. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?
2. Think how you will isolate the concerns of your project - the structure of your components, the sourcing of your data, the styling.
3. What sort of routing does Reddit use? What sort of specificity do you think you will need? Remember, your urls don't have to directly correspond to your api endpoints, but they will provide some guidance.
4. Think about what data each component will need. Where will it come from? When should components find their own data and when should they load it themselves? Focus on loading a list of articles for your front page first of all.
5. Consider more complex functionality: how do you want to allow changes to your database? Think about how you will attribute users to posted comments etc. How will you know what comments/articles a user should be allowed to delete? How about sorting data, or paginating responses? A good starting point would be to pick a single user and assuming that all new articles and comments are being posted by that user.
6. How are you going to make this a fluid and engaging experience for users, so they want to come back for more?

## 'Must Have' User Stories

You should implement the following functionality in your website. Check the lecture calendar to see when any new topics will be covered, but feel free to have a go at them beforehand as well!

**As a user, I should be able to...**

1. view a list of all articles
2. view a page for each topic with a list of related articles.
3. view an individual article.
4. view an individual article's comments.
5. sort articles by:
   - date created
   - comment_count
   - votes
6. post a new comment to an existing article (as a default logged in user. e.g. 'jessjelly').
7. delete my own comments (as a default logged in user. e.g. 'jessjelly').
8. vote on an article and immediately see the change.
9. vote on a comment and immediately see the change.

**As a hiring partner, I should be able to...**

10. use the site on my mobile without sacrificing style or functionality (as I may not have my laptop nearby).
11. follow the readme instructions to easily run the project locally.
12. find a link to the hosted version of the project in the readme.
13. find a link to the back-end repository of the project in the readme.
14. find a link to the hosted version of the back-end project in the readme.

**Error-handling: As a user, I should...**

15. show a 404 error if I go on a non-existent path/a path for a non-existent article/topic.
16. show a 400 error if I go on a invalid article ID.
17. not be allowed to post a comment if I have not filled in all of the form boxes.

## _If time, and if you have implemented it in your back-end API..._

**As a user, I should be able to...**

18. navigate over pages of articles (e.g. using pagination or infinite scroll).
19. navigate over pages of comments (e.g. using pagination or infinite scroll).
20. view a list of all articles written by a specific user.
21. post a new article to an existing topic.
22. delete my own articles.

## Deployment

There are many ways to deploy a React application. The `create-react-app` docs go into detail on some of the options: https://facebook.github.io/create-react-app/docs/deployment

We recommend Netlify. Check out the `netlify-deployment.md` file in this repo for a step-by-step guide!

**Before moving onto the 'if time' and 'extra credit' sections, submit your code for review! Please send a link to both your GitHub project and your hosted version to the Front-End slack channel** 😀

## Extra credit

1. As a user, I should be able to see which users have been most active adding articles and comments
2. As a user, I should be able to sort the users by how popular they are based on an aggregation of their article and comment vote counts

## Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :) <3
