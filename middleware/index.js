// all the middleware goes here

const Campground = require("../models/campground"); // the correct dependencies must
const Comment = require("../models/comment"); // be required in order for this to work

const middlewareObj = {
  checkCampgroundOwnerShip(req, res, next) {
    if (req.isAuthenticated()) {
      Campground.findById(req.params.id, (err, campground) => {
        if (err) {
          req.flash("error", "Campground not found");
          res.redirect("/campgrounds");
        } else {
          // does user own the campground
          if (campground.author.id.equals(req.user._id)) {
            // the next function or stuff to be done
            next();
          } else {
            req.flash("error", "You don't have clearance to do that");
            // otherwise redirect
            res.redirect("back");
          }
        }
      });
    } else {
      req.flash("error", "You need to be logged in to do that.");
      res.redirect("/login");
    }
  },
  isloggedIn(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    }
    req.flash("error", "You need to be logged in to do that.");
    res.redirect("/login");
  },
  checkCommentOwnership(req, res, next) {
    if (req.isAuthenticated()) {
      Comment.findById(req.params.comment_id, (err, comment) => {
        if (err) {
          res.redirect("back");
        } else {
          // does user own the comment
          if (comment.author.id.equals(req.user._id)) {
            // the next function or stuff to be done
            next();
          } else {
            req.flash("warning", "You are not the author of the comment.");
            // otherwise redirect
            res.redirect("back");
          }
        }
      });
    } else {
      req.flash("warning", "Please log in to do that.");
      res.redirect("back");
    }
  }
};

module.exports = middlewareObj;
