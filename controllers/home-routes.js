//home page res render is being passed here, explanation is needed for all pages need to be covered and 
//the if..each etc. string literals used in handlebars need explanation, where are they getting divided?
//this route has not been checked and connected to login and sequelize, can only be checked through front end

const router = require('express').Router();
const sequelize = require('../connection');
const { Post, User, Comment} = require('../models');

// get all posts for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Post.findAll({
    attributes: [
      'id',
      'title',
      'post_text',
      'createdAt'
    ],
    //check if we need user name or user ID, or user name
    include: [
      {
        model: Comment,
        // createdAt was added here
        attributes: ['id', 'comment_text', 'user_id', 'post_id', 'createdAt'],
        include: {
          model: User,
          attributes: ['username']
        }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
//the following is link to handlebar for homepage
console.log(posts);
      res.render('homepage', { posts });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

//addition
router.get('/login', (req,res) => {

res.render('login')

})

module.exports = router;
