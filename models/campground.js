const mongoose = require("mongoose");

// SCHEMA SETUP

const campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  price: String,
  author: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user"
    },
    username: String
  },
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }
  ]
});

// const Campground = mongoose.model("Campground", campgroundSchema);

module.exports = mongoose.model("Campground", campgroundSchema);
