const express = require('express');
const app = express();
const hb = require('express-handlebars');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/rotten-potatoes');

app.engine('handlebars', hb({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var Review = mongoose.model('Review', {
  title: String
});

app.get('/', function (req, res) {
  Review.find(function(err, reviews) {
    res.render('reviews-index', {reviews: reviews});
  });
});

app.get('/reviews/new', function (req, res) {
  res.render('reviews-new', {});
});

app.listen(3000, function() {
  console.log("Listening on port 3000!");
});


// var reviews = [
//   { title: "Great review" },
//   { title: "Average review" }
// ]
