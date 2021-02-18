const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

require("dotenv").config();
const express = require("express");
const basicAuth = require("basic-auth-connect");
const app = express();

app.all(
    "/*",
    basicAuth(function(user, password) {
      return user === process.env.BASIC_USER &&
      password === process.env.BASIC_PASSWORD;
    })
);

app.use(express.static(__dirname + "/dist/"));

exports.app = functions.https.onRequest(app);
