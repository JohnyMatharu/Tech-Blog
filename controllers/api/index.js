//Al the following requires are meant to go to appropriate files including connection and server.js etc.
//require handlebars
//require mysql (2)
//require sequelize
//require express
//require .env package 
//require bcrpyt
//express-session
//connect-session-sequelize

//current
const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;






















//Erik
//Session is only for login and log out authentication, controlled through server.js, 
//has nothing to do with username, that is through post route including user model to get user name. 
//Bcrypt will save the data in the seeds folder database under user, it will be hashed form, bycrypt is 
//used in user.js model used to help logging in and using user route its passed in the database. 
//Hooks are being used for Bcrypt run before creating a model and once before starting. 
//Firebase is better than bcrypt.   





//check lesson code chapter by chapter next step (previous if needed), current 14.1 

//Home page to see summary of blogs and leave comment, dashboard to create new post and update a post, anywhere pressed 
//go to login, can opt sign up, once logged can in see data with only logout button, first user will see homepage

//CMS-style blog site, developers can publish their blog posts and comment on other developers’, 
//deploy it to Heroku. Your app will follow the MVC paradigm in its architectural structure, 
//using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package 

/*
Acceptance criteria:
HERE
GIVEN a CMS-style blog site
WHEN I visit the site for the first time
THEN I am presented with the homepage, which includes existing blog posts if any have been posted; navigation links for the homepage and the dashboard; and the option to log in
WHEN I click on the homepage option
THEN I am taken to the homepage
WHEN I click on any other links in the navigation
THEN I am prompted to either sign up or sign in
WHEN I choose to sign up
THEN I am prompted to create a username and password
WHEN I click on the sign-up button
THEN my user credentials are saved and I am logged into the site
WHEN I revisit the site at a later time and choose to sign in
THEN I am prompted to enter my username and password
WHEN I am signed in to the site
THEN I see navigation links for the homepage, the dashboard, and the option to log out
WHEN I click on the homepage option in the navigation
THEN I am taken to the homepage and presented with existing blog posts that include the post title and the date created
WHEN I click on an existing blog post
THEN I am presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment
WHEN I enter a comment and click on the submit button while signed in
THEN the comment is saved and the post is updated to display the comment, the comment creator’s username, and the date created
WHEN I click on the dashboard option in the navigation
THEN I am taken to the dashboard and presented with any blog posts I have already created and the option to add a new blog post
WHEN I click on the button to add a new blog post
THEN I am prompted to enter both a title and contents for my blog post
WHEN I click on the button to create a new blog post
THEN the title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post
WHEN I click on one of my existing posts in the dashboard
THEN I am able to delete or update my post and taken back to an updated dashboard
WHEN I click on the logout option in the navigation
THEN I am signed out of the site
WHEN I am idle on the page for more than a set time
THEN I am automatically signed out of the site
*/

//installed handlebars, mysql2, sequelize, npm installed, npm init, express.js, dotenv, bcrypt, express-session, connect-session-sequelize
//Application must be deployed to Heroku
//Repository contains quality README file with description, screenshot, and link to deployed application.

/*
How to Submit the Challenge
You are required to submit BOTH of the following for review:

The URL of the functional, deployed application.

The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.
*/
