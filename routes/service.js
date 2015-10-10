var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
module.exports = router;

var adviceSchema = mongoose.Schema({
	title: String,
    content: String
});

var Advice = mongoose.model('adv', adviceSchema);
var random;
var setTitle;

router.get('/advice', function (req, res) {
    random = Math.floor(Math.random() * 6) + 1;
    if (random == 1) {
        setTitle = '고냥몬';
        random = Math.floor(Math.random() * 10);
    }
    else if (random == 2) {
        setTitle = '가시몬';
        random = Math.floor(Math.random() * 6);
    }
    else if (random == 3) {
        setTitle = '강아지몬';
        random = Math.floor(Math.random() * 10);
    }
    else if (random == 4) {
        setTitle = '소세쥐몬';
        random = Math.floor(Math.random() * 5);
    }
    else if (random == 5) {
        setTitle = '따라쟁이몬';
        random = Math.floor(Math.random() * 5);
    }
    else if (random == 6) {
        setTitle = '우사기몬';
        random = Math.floor(Math.random() * 5);
    }
    Advice.find({ title: setTitle }, function (err, docs){
        res.json({
       	    content: docs[random].content
        });
	console.log(setTitle);
	console.log(random);
	console.log(docs[random].content);
    });
});

router.post('/advice', function (req, res) {
    random = Math.floor(Math.random() * 6) + 1;
    if (random == 1) {
        setTitle = '고냥몬';
        random = Math.floor(Math.random() * 10);
    }
    else if (random == 2) {
        setTitle = '가시몬';
        random = Math.floor(Math.random() * 6);
    }
    else if (random == 3) {
        setTitle = '강아지몬';
        random = Math.floor(Math.random() * 10);
    }
    else if (random == 4) {
        setTitle = '소세쥐몬';
        random = Math.floor(Math.random() * 5);
    }
    else if (random == 5) {
        setTitle = '따라쟁이몬';
        random = Math.floor(Math.random() * 5);
    }
    else if (random == 6) {
        setTitle = '우사기몬';
        random = Math.floor(Math.random() * 5);
    }
    
    Advice.find({ title: setTitle }, function (err, docs){
        res.json({
            content: docs[random].content
        });
        console.log(setTitle);
        console.log(random);
        conosle.log(docs[random].content);
    });
});
