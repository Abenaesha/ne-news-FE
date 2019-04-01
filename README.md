## Northcoders News

> ALERT! Please **create your own repo** for NC News to avoid later issues with deploying and git histories.

Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of [Reddit](https://www.reddit.com/).

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This review sprint should consolidate your understanding of making a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.

### Objectives
1. Pull together all the front-end skills, technologies and best practises you have learnt.
2. Make asynchronous API calls to your own server.
4. Use HTTP request types to interact with your backend, and HTTP response codes to update your UI accordingly.

### What to do

Use the generic react-project-checklist as a guide to setting up your app. Here are some project-specific things to bear in mind:

1. Have a look at your API endpoints and at Reddit. Think about what data you have available, and how you will structure your application. What routes will your application have? What articles will you choose to display on the main page?

2. Think how you will isolate the concerns of your project - the structure of your components, the sourcing of your data, the styling.

3. What sort of routing does Reddit use? What sort of specificity do you think you will need? Remember, your urls don't have to directly correspond to your api endpoints, but they will provide some guidance.

4. Think about what data each component will need. Where will it come from? When should components find their own data and when should they load it themselves? Focus on loading a list of articles for your front page first of all.

5. Consider more complex functionality: how do you want to allow changes to your database? Think about how you will attribute users to posted comments etc. How will you know what comments/articles a user should be allowed to delete? How about sorting data, or paginating responses? A good starting point would be to pick a single user and assuming that all new articles and comments are being posted by that user.

6. How are you going to make this a fluid and engaging experience for users, so they want to come back for more?

### 'Must Have' User Stories

1. As a user, I should be able to view a list of all articles.
2. As a user, I should be able to view a list of all articles on a specific topic.
3. As a user, I should be able to view an individual article.
4. As a user, I should be able to view an individual article's comments.
5. As a user, I should be able to sort articles by: 
    - date created
    - comment_count
    - votes
6. As a hiring partner with no access to my laptop, I should be able to use the site on my mobile without sacrificing style or functionality.
7. **As a user, I should be able to login to the site.**
8. **As a hiring partner with no knowledge of the users in the database, it should be very clear to me how I can login to the site.**
9. As a logged in user, I should be able to post a new article to an existing topic.
10. As a logged in user, I should be able to post a new article to a new topic.
11. As a logged in user, I should be able to post a new comment to an existing article.
12. **As a logged in user, I should be able to vote on an article.**
13. **As a logged in user, I should be able to vote on a comment.**
14. As a logged in user, I should be able to delete my own articles.
15. As a logged in user, I should be able to delete my own comments.
16. As a hiring parter, I should be able to follow the readme instructions to easily run the project locally.
17. As a hiring parter, I should be able to find a link to the hosted version of the project in the readme.
18. As a hiring parter, I should be able to find a link to the back-end repository of the project in the readme.
19. As a hiring parter, I should be able to find a link to the hosted version of the back-end project in the readme.

_**If time...**_

20. **As a user, I should be able to navigate over pages of articles (e.g. using pagination or infinite scroll).**
21. **As a user, I should be able to navigate over pages of comments (e.g. using pagination or infinite scroll).**
22. As a user, I should be able to view a list of all articles written by a specific user.

*Note regarding **BOLD** user stories:*
- User login / auth to be covered in Tuesday's lecture
- Voting / optimistic rendering to be covered in Wednesday's lecture
- Error handling / error pages to be covered in Thursday's lecture
- Infinite scroll / pagination to be covered in Thursday's lecture


### Deployment

We will send out some notes, but have a look at this section of the `create-react-app` docs on how to deploy your app using Netlify: https://facebook.github.io/create-react-app/docs/deployment#netlify-https-wwwnetlifycom

**Before moving onto the 'if time' and 'extra credit' sections, submit your code for review! Please send a link to both your GitHub project and your hosted version to the FE2 slack channel** 😀

### Extra credit

1. Create a route which shows which users have been most active adding articles and comments
2. Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
3. Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.

### Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :)
