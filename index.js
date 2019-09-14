//order of your required statements can cause errors in your application
const express=require('express');
const mongoose=require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const bodyParser=require('body-parser');
const keys=require('./config/keys');
require('./models/User');
require('./models/Survey');
require('./services/passport');
// const authRoutes=require('./routes/authRoutes'); 

mongoose.connect(keys.mongoURI, { useNewUrlParser: true });

const app=express();

app.use(bodyParser.json());

app.use(
    cookieSession({
        maxAge: 30*24*60*60*1000, //I want this cookie to last for 30 days
        keys: [keys.cookieKey]                    //keys used to encrypt our cookie
    })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app)
require('./routes/billingRoutes')(app)
require('./routes/surveyRoutes')(app)

//code to ensure express behaves correctly in prod environment
if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT=process.env.PORT||5000;
app.listen(PORT);