const express = require("express");
const router = express.Router({ mergeParams: true });
const Campground = require("../models/campground");
const Comment = require("../models/comment");
const middleware = require("../middleware/index"); // "../middleware" is also acceptable

router.get(
  /* "/campgrounds/:id/comments */ "/new",
  middleware.isloggedIn,
  (req, res) => {
    Campground.findById(req.params.id, (err, campground) => {
      if (err) {
        console.log(err);
      } else {
        res.render("comments/new", { campground });
      }
    });
  }
);

router.post(
  /* "/campgrounds/:id/comments",*/ "/",
  middleware.isloggedIn,
  (req, res) => {
    // look up campground using ID
    Campground.findById(req.params.id, (err, campground) => {
      if (err) {
        console.log(err);
        res.redirect("/campgrounds");
      } else {
        Comment.create(req.body.comment, (err, com) => {
          if (err) {
            req.flash(
              "warning",
              "Something went wrong while creating the comment."
            );
            console.log(err);
          } else {
            // add username and id to comments
            com.author.id = req.user._id;
            com.author.username = req.user.username;
            // save the comment
            com.save();
            // create a new comment
            campground.comments.push(com);
            // connect new comment to campground
            campground.save();
            req.flash("success", "Comment added!");
            // redirect to campground show page
            res.redirect(`/campgrounds/${campground._id}`);
          }
        });
      }
    });
  }
);

// EDIT ROUTE

router.get(
  "/:comment_id/edit",
  middleware.checkCommentOwnership,
  (req, res) => {
    Comment.findById(req.params.comment_id, (err, foundComment) => {
      if (err) {
        res.redirect("back");
      } else {
        res.render("comments/edit", {
          campground_id: req.params.id,
          comment: foundComment
        });
      }
    });
  }
);

// UPDATE ROUTE

router.put("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndUpdate(
    req.params.comment_id,
    req.body.comment,
    (err, updatedComment) => {
      if (err) {
        res.redirect("back");
      } else {
        res.redirect(`/campgrounds/${req.params.id}`);
      }
    }
  );
});

// DELETE ROUTE

router.delete("/:comment_id", middleware.checkCommentOwnership, (req, res) => {
  Comment.findByIdAndRemove(req.params.comment_id, err => {
    if (err) {
      res.redirect("back");
    } else {
      req.flash("success", "Comment deleted");
      res.redirect(`/campgrounds/${req.params.id}`);
    }
  });
});

module.exports = router;
