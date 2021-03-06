const express = require('express');
const authorRouter = express.Router();
const Authordata = require('../model/AuthorData');
//write called function
function router(nav,title){

// var authors = [
//     {
//         author: "J.R.R. Tolkien",
//         genre: "Fantasy",
//         books: ["The Lord of the Rings","The Hobbits"],
//         img: "tolkien.jpeg"
//     },
//     {
//         author: "J.K Rowling",
//         genre: "Fantasy",
//         books: ["Harry Potter","Fantastic Beasts and Where to Find them"],
//         img: "jk.jpeg"
//     },
//     {
//         author: "James Clear",
//         genre: "Self-Help",
//         books: ["Atomic Habits"],
//         img: "clear.jpeg"
//     }
//     ]

   //Router for Authors
   authorRouter.get('/',function(req,res){
    Authordata.find() //catch the values
    .then(function(authors){
    res.render("authors",
        {
        nav,
        title: 'Authors',
        authors,
        admin:false
        } );
    })
    .catch();
  });
  
  // for single author page
  authorRouter.get('/:i',function(req,res){
    const id = req.params.i;
    Authordata.findOne({_id:id})
    .then(function(author){
  
     res.render('author',{
         nav,
         title: 'Authors',
         author,
         admin:false
     });
  
    })
    .catch();
  });
     return authorRouter;
}
//acts as calling function as well
module.exports = router;