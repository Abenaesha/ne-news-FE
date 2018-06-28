## Northcoders News

Northcoders News is a social news aggregation, web content rating, and discussion website. Think something along the lines of [Reddit](https://www.reddit.com/).

Northcoders News has articles which are divided into topics. Each article has user curated ratings and can be up or down voted using the API. Users can also add comments about an article. Comments can also be up or down voted. A user can add comments and remove any comments which they have added.

This review sprint should consolidate your understanding of making a [C.R.U.D](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) application from a front end perspective.

### Objectives
1. Pull together all the front-end skills, technologies and best practises you have learnt over the past three weeks.
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

### Extra credit

1. Create a route which shows which users have been most active adding articles and comments
2. Make this route sort the users by how popular they are based on an aggregation of their article and comment vote counts
3. Implement a filter which re-orders comments based on either the time they were added, or how many votes they have got.

### Important

This sprint is among the ones we'll ask you to complete in order to put you forward for jobs. Put a little bit of love into it! :)
