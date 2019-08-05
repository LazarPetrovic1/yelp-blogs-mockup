const express = require("express");
const router = express.Router();
const Campground = require("../models/campground");
const middleware = require("../middleware/index"); // "../middleware" is also acceptable

// Put the "/campgrounds" in app.use (app.js) and remove it from here

// INDEX ROUTE (always GET)
router.get(
  "/",
  /* "/campgrounds", */ (req, res) => {
    // get all campgrounds from the DB
    Campground.find({}, (err, allCampgrounds) => {
      if (err) {
        console.log("Error", err);
      } else {
        // render those campgrounds
        res.render("campgrounds/index", {
          campgrounds: allCampgrounds,
          currentUser: req.user
        });
      }
    });
  }
);

// CREATE ROUTE (always POST)
router.post(
  "/",
  middleware.isloggedIn,
  /* "/campgrounds", */ (req, res) => {
    // get data from form
    const name = req.body.name;
    const image = req.body.image;
    const description = req.body.description;
    const price = req.body.price;
    const author = {
      id: req.user._id,
      username: req.user.username
    };
    const newCampGround = { name, image, description, author, price };

    // add to campgrounds array
    // campgrounds.push(newCampGround);
    // create a new campground and save to database
    Campground.create(newCampGround, (err, newlyCreated) => {
      if (err) {
        req.flash("error", "Something went wrong. Stand by.");
        console.log("Error", err);
      } else {
        // redirect back to campgrounds page
        req.flash("success", "Campground added!");
        res.redirect("/login");
      }
    });
  }
);

// NEW ROUTE (always GET)
router.get(/* "/campgrounds */ "/new", middleware.isloggedIn, (req, res) => {
  res.render("campgrounds/new");
});

// SHOW ROUTE (always GET)
router.get(/* "/campgrounds */ "/:id", (req, res) => {
  // find the campground with provided ID
  Campground.findById(req.params.id)
    .populate("comments")
    .exec((err, campground) => {
      if (err) {
        req.flash("error", "Campground not found");
        console.log("Error", err);
      } else {
        // console.log(campground);
        // render information about that particular campground
        res.render("campgrounds/show", { campground });
      }
    });
});

// EDIT CAMPGROUND ROUTE

router.get("/:id/edit", middleware.checkCampgroundOwnerShip, (req, res) => {
  // if user logged in
  Campground.findById(req.params.id, (err, campground) => {
    res.render("campgrounds/edit", { campground });
  });
});

// UPDATE CAMPGROUND ROUTE

router.put("/:id", middleware.checkCampgroundOwnerShip, (req, res) => {
  Campground.findByIdAndUpdate(
    req.params.id,
    req.body.campground,
    (err, updatedCampground) => {
      if (err) {
        res.redirect("/campgrounds");
      } else {
        res.redirect(`/campgrounds/${req.params.id}`);
      }
    }
  );
});

// DELETE ROUTE

router.delete("/:id", middleware.checkCampgroundOwnerShip, (req, res) => {
  Campground.findByIdAndRemove(req.params.id, err => {
    if (err) {
      res.redirect("/campgrounds");
    } else {
      res.redirect("/campgrounds");
    }
  });
});

module.exports = router;
