// const passport=require('passport');

// module.exports=(app)=>{
//     app.get('/auth/google',
//     passport.authenticate('google', { scope: ['profile','email'] }));
    
//     /* // GET /auth/google/callback
//     //   Use passport.authenticate() as route middleware to authenticate the
//     //   request.  If authentication fails, the user will be redirected back to the
//     //   login page.  Otherwise, the primary route function function will be called,
//     //   which, in this example, will redirect the user to the home page. */
//     app.get('/auth/google/callback',passport.authenticate('google'));
// }

const passport = require('passport');

module.exports = app => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email']
    })
  );

  app.get(
    '/auth/google/callback',
    passport.authenticate('google'),
    (req,res)=>{
      res.redirect('/surveys');
    }
  );

  app.get('/api/logout',(req,res)=>{
      req.logout();
      res.redirect('/');
  })

  app.get('/api/current_user',(req,res)=>{
      res.send(req.user);
  });

};