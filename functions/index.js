const functions = require('firebase-functions');


const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51I6p3hJpnfwkBjA0dzflBe8NLMCsDFkFpZqAIFlZHHngGpDhHMXUAIa9HIHAbXD28loBBzkL7cPJR4mrcCZfnkT400k9MEOwXG"
);
