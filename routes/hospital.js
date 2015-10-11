var express = require('express');
var router = express.Router();
module.exports = router;

var mongoose = require('mongoose');

var hospitalSchema = mongoose.Schema({
    _id: String,
    name: String,
    lat: String,
    long: String,
    location: Number,
    address: String,
    tel: String,
    rev1: String,
    rev2: String,
    rev3: String
});

var Hospital = mongoose.model('ho', hospitalSchema);

router.get('/info/:name', function (req, res) {
    Hospital.find({ name: req.params.name }, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            res.json({
		_id: docs[0]._id.toString(),
                name: docs[0].name,
                lat: docs[0].lat,
                longi: docs[0].long,
                location: docs[0].location,
                address: docs[0].address,
                tel: docs[0].tel,
                rev1: docs[0].rev1,
                rev2: docs[0].rev2,
                rev3: docs[0].rev3
            });
        }
        console.log(docs);
    });
});

var j = 0;
var search = null;
var json1 = null;
var result = [];

router.get('/search/:search', function (req, res) {
    console.log(req.params.search);
    search = req.params.search;
    Hospital.find({}, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].name.indexOf(search) != -1) {
                    if (json1 == null) {
                        json1 = ({
			    _id: docs[i]._id.toString(),
                            name: docs[i].name,
                            lat: docs[i].lat,
                            longi: docs[i].long,
                            location: docs[i].location,
                            address: docs[i].address,
                            tel: docs[i].tel,
                            rev1: docs[i].rev1,
                            rev2: docs[i].rev2,
                            rev3: docs[i].rev3
                        });
                    }  if (json1 != null) {
			    result[j] = json1;
			    json1 = null;
			    j++;
                    }
                }
            }
            res.json(
                result
            );
        }
        console.log(result);
        result = [];
	j = 0;
    });
});

router.post('/search', function (req, res) {
    console.log(req.body.search);
    search = req.body.search;
    Hospital.find({}, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            for (var i = 0; i < docs.length; i++) {
                if (docs[i].name.indexOf(search) != -1) {
                    if (json1 == null) {
                        json1 = ({
			    _id: docs[i]._id.toString(),
                            name: docs[i].name,
                            lat: docs[i].lat,
                            longi: docs[i].long,
                            location: docs[i].location,
                            address: docs[i].address,
                            tel: docs[i].tel,
                            rev1: docs[i].rev1,
                            rev2: docs[i].rev2,
                            rev3: docs[i].rev3
                        });
		    }  if (json1 != null) {
                            result[j] = json1;
                            json1 = null;
                            j++;
                    }
                }
            }
            res.json(
                result
            );
        }
        console.log(result);
        result = [];
	j = 0;
    });
});

router.post('/location', function (req, res) {
    Hospital.find({ location: req.body.location }, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            for (var i = 0; i < docs.length; i++) {
                if (json1 == null) {
                    json1 = ({
			_id: docs[i]._id.toString(),
                        name: docs[i].name,
                        lat: docs[i].lat,
                        longi: docs[i].long,
                        location: docs[i].location,
                        address: docs[i].address,
                        tel: docs[i].tel,
                        rev1: docs[i].rev1,
                        rev2: docs[i].rev2,
                        rev3: docs[i].rev3
                        });
		}  if (json1 != null) {
                            result[j] = json1;
                            json1 = null;
                            j++;
                    }
                }
            }
            res.json(
                result
            );
        console.log(result);
        result = [];
	j = 0;
    });
});

router.post('/info', function (req, res) {
    Hospital.find({ _id: req.body._id }, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            res.json({
		_id: docs[0]._id.toString(),
                name: docs[0].name,
                lat: docs[0].lat,
                longi: docs[0].long,
                location: docs[0].location,
                address: docs[0].address,
                tel: docs[0].tel,
                rev1: docs[0].rev1,
                rev2: docs[0].rev2,
                rev3: docs[0].rev3
            });
        }
	console.log(docs);
    });
});

router.get('/all', function (req, res) {
    Hospital.find({}, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            for (var i = 0; i < docs.length; i++) {
                if (json1 == null) {
                    json1 = ({
			_id: docs[i]._id.toString(),
                        name: docs[i].name,
                        lat: docs[i].lat,
                        longi: docs[i].long,
                        location: docs[i].location,
                        address: docs[i].address,
                        tel: docs[i].tel,
                        rev1: docs[i].rev1,
                        rev2: docs[i].rev2,
                        rev3: docs[i].rev3
                        });
		}  if (json1 != null) {
                            result[j] = json1;
                            json1 = null;
                            j++;
                    }
                }
            }
            res.json( 
                result
            );
        console.log('success');
        result = [];
        j = 0;
    });
});

router.post('/all', function (req, res) {
    Hospital.find({}, function (err, docs) {
        if (docs.length == 0) {
            res.send(403);
        } else {
            for (var i = 0; i < docs.length; i++) {
                if (json1 == null) {
                    json1 = ({
			_id: docs[i]._id.toString(),
                        name: docs[i].name,
                        lat: docs[i].lat,
                        longi: docs[i].long,
                        location: docs[i].location,
                        address: docs[i].address,
                        tel: docs[i].tel,
                        rev1: docs[i].rev1,
                        rev2: docs[i].rev2,
                        rev3: docs[i].rev3
                        });
		}  if (json1 != null) {
                            result[j] = json1;
                            json1 = null;
                            j++;
                    }
                }
            }
            res.json( 
                result
            );
        console.log('success');
        result = [];
        j = 0;
    });
});
