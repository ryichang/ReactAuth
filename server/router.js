const Authentication = require('./controllers/authentication.js');

module.exports = function(app) {
  app.post('/signup', Authentication.signup);
  // app.get('/', function(req, res, next){
  //   res.send(['Index Route']);
  // });
}
