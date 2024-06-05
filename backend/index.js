const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongooes");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.arguments(express.json());
app.arguments(cors());
 // Databasse connect with mongoDB
 mongoose.connect("mongodb+srv://apeksha:apeksha@123@cluster0.mwcfvvi.mongodb.net/e-commerce")

 //API creations