## SMS-Marketing

#### Description:

*   Send mass text messages to a big list of customers for the purpose of feedback.
*   Handle credit cards and receive payments from users with Stripe.
*   Use sentiment analysis to analyze customer responses.
*   Record positive/negative feedback on backend server.
*   Technologies Used: React, Node.JS, MongoDBAtlas, Heroku, Stripe, Twilio, Google OAuth 2.0.

## Project Status

This is a 3-month project which is currently in its final stages of development. The only feature left to implement is to integrate webhooks in order to record positive/negative feedack of each customer in the database.

## Flow of Application

### 1. Admin signs up via Google OAuth

### 2. Admin pays for SMS credits using Stripe

### 3. Admin creates a new survey by going to the link: /surveys/new. 
*   This page presents a form where the admin can enter the subject title, body, and recipient list (phone numbers)

### 4. Application sends text message to list of recipients.

### 5. Recipient responds to text message to give feedback. 

### 6.Feedback recorded in the MongoDB database as positive/negative (or yes/no). 

### 5. Admin can see all the the sent surveys and their responses (Positive/negative feedback).

## Project Screen Shot(s)

#### Example:   

[ INSERT SCREEN SHOT HERE ]

[ INSERT SCREEN SHOT HERE ]

## Installation and Setup Instructions

#### Install server dependencies:  

$ npm install # Or yarn install

#### Install client dependencies:

$ cd client

$ npm install # Or yarn install

#### Execute the project:

$ npm run dev

*   server is loaded at localhost:5000

*   client is loaded at localhost:3000

*   Both server and client are executed at the same time.

#### Before executing it, setting credentials and variables must be updated

1st) Inside the config directory, rename example.dev.js to dev.js and insert your credentials for google OAuth, Mongo Atlas, Stripe and Twilio

## Tech Stack
*   Node.js, Express.js, Passport.js
*   React.js, React-Redux, Redux-form
*   MongoDB, Mongoose
*   Materialize CSS
*   Google OAuth2
*   Stripe API
*   Twilio API

