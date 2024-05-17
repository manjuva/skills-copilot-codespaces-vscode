// Create web server
var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var path = require('path');
var comments = require('./comments.json');
var _ = require('lodash');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

// Get comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

// Add comments
app.post('/comments', function(req, res) {
    var comment = req.body;
    if (comment) {
        comments.push({
            id: comments.length + 1,
