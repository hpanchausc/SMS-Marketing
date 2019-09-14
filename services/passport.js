const passport=require('passport');
const GoogleStrategy=require('passport-google-oauth20').Strategy;
const mongoose=require('mongoose');
const keys = require('../config/keys');

//User object is our model class. We can use this model class to create a new model instance
const User=mongoose.model('users');

passport.serializeUser(function(user,done){
  done(null,user.id);
});

passport.deserializeUser(function(id,done){
  User.findById(id).then(function(user){
    done(null,user);
  });
});

/* // Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
profile), and invoke a callback with a user object.
 */
passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL: '/auth/google/callback',
    proxy:true
  }, (accessToken, refreshToken, profile, done) =>{
      User.findOne({googleID:profile.id})
        .then(function(existingUser){
          if(existingUser){
            //we already have a record with the profile ID
            done(null,existingUser);
          }
          else{
            //we don't have a record with this profile ID, so make a new record
            //.save will take that model instance and save it in the DB for us
            new User({googleID:profile.id})
              .save()
              .then(
                function(user){
                  done(null,user);
                }
              )
          }
        });
       console.log(accessToken);
       console.log(refreshToken);
      }
  )
);
   