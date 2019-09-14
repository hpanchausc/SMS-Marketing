const requireLogin = require('../middlewares/requireLogin');
const requireCredits=require('../middlewares/requireCredits');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const keys = require('../config/keys');
const client = require('twilio')(keys.twilioSID, keys.twilioAuthToken);

//const Mailer=require('../services/Mailer');
//const surveyTemplate=require('../services/textTemplates/surveyTemplate');

module.exports=app=>{
    app.get('/api/surveys', requireLogin, async (req, res) => {
      const surveys = await Survey.find({ _user: req.user.id }).select({
        recipients: false
      });

      res.send(surveys);
    });

    app.post('/api/surveys',requireLogin,requireCredits,(req,res)=>{
        const {title,subject,body,recipients}=req.body;

        //creates a survey model
        const survey=new Survey({
            title,
            subject,
            body,
            recipients, //recipents would be an array of strings
            _user: req.user.id,
            dateSent: Date.now() //returns a date object which records when we have created and sent a survey
        });
    
       Promise.all(
            survey.recipients.map(recipient => {
            return client.messages.create({
                to: recipient,
                from: keys.twiioServiceSID,
                body: survey.body
            });
            })
        )
        .then(messages => {
          console.log('Messages sent!');

          try{
            survey.save();
            req.user.credits-=1;
            const user=req.user.save();
            res.send(user);
          }
          catch(e){
            res.status(422).send(e);
          }
        })
        .catch(err => console.error(err));

        //right after we create our survey we send a text
        //const mailer=new Mailer(survey,surveyTemplate(survey));
        
    })
};