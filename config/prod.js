//prod.js - production keys here

module.exports={
    googleClientID: process.env.GOOGLE_CLIENT_ID,
    googleClientSecret: process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey: process.env.COOKIE_KEY,
    stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    stripeSecretKey: process.env.STRIPE_SECRET_KEY,
    twilioSID: process.env.TWILIO_SID,
    twilioAuthToken: process.env.TWILIO_TOKEN,
    twiioServiceSID: process.env.TWILIO_SERVICE_SID
};