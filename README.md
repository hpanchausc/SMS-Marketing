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

## Reflection
This was a 3-month long project that I undertook this summer while I was learning Node.js and React.js. I wanted to create a web-application to put my full-stack knowledge to test. Previously, I had worked on a project Twilio API's to send text messages and analyze feedback (https://github.com/hpanchausc/MarketingAI). But I wanted to improve on it and create an interactive dashboard for users to send custom messages and store feedback in a database. Later, when learning React from an Udemy course by Stephen Grider(https://www.udemy.com/node-with-react-fullstack-web-development/), I found inspiration from his project Emaily(https://github.com/StephenGrider/FullstackReactCode), where he creates a feedback collection app using emails. I saw the similarities between this and my Twilio project, and decided to modify this project by sending text messages instead of emails and analyzing message responses for positive/negative feedback rather than hardcoded feedback. While creating this project I learnt a lot of things such as:
*   Architecture of a full stack application and how to write production level code
*   Communicate data between React and MongoDB
*   Using Stripe API for payments, Google OAuth for authentication, and Twilio API for sending & recieving text messages
*   Using Redux-form for user inputs
