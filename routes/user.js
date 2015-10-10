var express = require('express');
var router = express.Router();
module.exports = router;

//db setting
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pk');

var userSchema = mongoose.Schema({
    id: { type: String },
    pw: { type: String }
});

var User = mongoose.model('user', userSchema);

router.post('/login', function (req, res) {
    User.find({ id: req.body.id }, function (err, docs) {
        if (docs.length == 0) {
            res.send(304);
        } else {
            if (docs[0].pw == req.body.pw) {
                res.json({
                    log: '로그인 되었습니다.'
                });
                console.log(req.body);
            } else {
                res.send(403);
            }
        }
    });
});

router.post('/logout', function (req, res) {
    res.json({
        log: '로그아웃 되었습니다.'
    });
});

router.post('/signup', function (req, res) {
    console.log(req.body);
    User.findOne({ id: req.body.id }, function (err, doc) {
        if (!doc) {
            if (req.body.pw == req.body.confirm) {
                var user = new User ({
                    id: req.body.id,
                    pw: req.body.pw
                });
                
                user.save();
                console.log(req.body);
                res.json({
                    log: '회원가입에 성공하였습니다'
                });
            } else {
                res.send(403);
            }
        } else {
                res.send(304);
        }
    });
});
