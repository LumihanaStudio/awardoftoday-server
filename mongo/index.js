var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/SamsungService');

var userSchema = mongoose.Schema({
  id : { type : String },
  password : { type : String },
  name : { type : String },
  apikey : { type : String },
  isParent : { type : Boolean },
  isLogin : { type : Boolean },
  targetApikey : { type : String },
  targetName : { type : String },
  sticker : { type : Number },
  token : { type : String }
});

var articleSchema = mongoose.Schema({
  title : { type : String },
  date : { type : Date },
  dateType : {
    year : { type : String},
    month : { type : String },
    day : { type : String },
    hour : { type : String },
    minute : { type : String }
  },
  apikey : { type : String },
  content : { type : String },
  sticker : { type : String },
  articleKey : { type : String },
  status : { type : String },
  waiting : { type : Boolean }
});

var User = mongoose.model("User", userSchema);
var Article = mongoose.model("Article", articleSchema);
exports.mongoose = mongoose;
exports.db = db;
exports.userSchema = userSchema;
exports.articleSchema = articleSchema;
exports.User = User;
exports.Article = Article;
