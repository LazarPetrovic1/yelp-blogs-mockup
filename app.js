const express = require("express"),
  app = express(),
  parser = require("body-parser"),
  mongoose = require("mongoose"),
  flash = require("connect-flash"),
  Campground = require("./models/campground"),
  seedDB = require("./seeds"),
  passport = require("passport"),
  LocalStrategy = require("passport-local"),
  User = require("./models/user"),
  Comment = require("./models/comment"),
  override = require("method-override"),
  port = 3000;

const campgroundRoutes = require("./routes/campgrounds"),
  commentRoutes = require("./routes/comments"),
  indexRoutes = require("./routes/index");

// seedDB();

// PASSPORT CONFIGURATION

app.use(
  require("express-session")({
    secret: "Once again Rusty wins cutest dog!",
    resave: false,
    saveUninitialized: false
  })
);

app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

mongoose.connect(
  "mongodb://localhost:27017/yelp_camp",
  { useNewUrlParser: true }
);
mongoose.set("useFindAndModify", false);
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");
app.use(override("_method"));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  res.locals.error = req.flash("error");
  res.locals.success = req.flash("success");
  res.locals.warning = req.flash("warning");
  next();
});

// app.use(indexRoutes);
// app.use(campgroundRoutes);
// app.use(commentRoutes);

app.use(indexRoutes);
app.use("/campgrounds", campgroundRoutes);
app.use("/campgrounds/:id/comments", commentRoutes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

/*
 *
 * ===============================================
 *
 * ROUTES DOWN HERE
 *
 * ===============================================
 *
 */

// INIT ROUTE

// app.get("/", (req, res) => {
//   res.render("landing");
// });

// INDEX ROUTE (always GET)
// app.get("/campgrounds", (req, res) => {
//   // get all campgrounds from the DB
//   Campground.find({}, (err, allCampgrounds) => {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       // render those campgrounds
//       res.render("campgrounds/index", {
//         campgrounds: allCampgrounds,
//         currentUser: req.user
//       });
//     }
//   });
// });
//
// // CREATE ROUTE (always POST)
// app.post("/campgrounds", (req, res) => {
//   // get data from form
//   const name = req.body.name;
//   const image = req.body.image;
//   const description = req.body.description;
//   const newCampGround = { name, image, description };
//   // add to campgrounds array
//   // campgrounds.push(newCampGround);
//   // create a new campground and save to database
//   Campground.create(newCampGround, (err, newlyCreated) => {
//     if (err) {
//       console.log("Error", err);
//     } else {
//       // redirect back to campgrounds page
//       res.redirect("/campgrounds");
//     }
//   });
// });
//
// // NEW ROUTE (always GET)
// app.get("/campgrounds/new", (req, res) => {
//   res.render("campgrounds/new");
// });
//
// // SHOW ROUTE (always GET)
// app.get("/campgrounds/:id", (req, res) => {
//   // find the campground with provided ID
//   Campground.findById(req.params.id)
//     .populate("comments")
//     .exec((err, campground) => {
//       if (err) {
//         console.log("Error", err);
//       } else {
//         console.log(campground);
//         // render information about that particular campground
//         res.render("campgrounds/show", { campground });
//       }
//     });
// });

// ==================================
// COMMENTS ROUTES
// ==================================

// app.get("/campgrounds/:id/comments/new", isloggedIn, (req, res) => {
//   Campground.findById(req.params.id, (err, campground) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.render("comments/new", { campground });
//     }
//   });
// });
//
// app.post("/campgrounds/:id/comments", isloggedIn, (req, res) => {
//   // look up campground using ID
//   Campground.findById(req.params.id, (err, campground) => {
//     if (err) {
//       console.log(err);
//       res.redirect("/campgrounds");
//     } else {
//       Comment.create(req.body.comment, (err, com) => {
//         if (err) {
//           console.log(err);
//         } else {
//           // create a new comment
//           campground.comments.push(com);
//           // connect new comment to campground
//           campground.save();
//           // redirect to campground show page
//           res.redirect(`/campgrounds/${campground._id}`);
//         }
//       });
//     }
//   });
// });

// ========================================
// AUTH ROUTES
// ========================================

// app.get("/register", (req, res) => {
//   res.render("register");
// });
//
// app.post("/register", (req, res) => {
//   const newUser = new User({ username: req.body.username });
//   User.register(newUser, req.body.password, (err, user) => {
//     if (err) {
//       console.log(err);
//       return res.render("register");
//     }
//     passport.authenticate("local")(req, res, () => {
//       res.redirect("/campgrounds");
//     });
//   });
// });
//
// // SHOW LOGIN FORM
//
// app.get("/login", (req, res) => {
//   res.render("login");
// });
//
// app.post(
//   "/login",
//   passport.authenticate("local", {
//     successRedirect: "/campgrounds",
//     failureRedirect: "/login"
//   }),
//   (req, res) => {}
// );
//
// // LOGOUT ROUTE
//
// app.get("/logout", (req, res) => {
//   req.logout();
//   res.redirect("/campgrounds");
// });

// function isloggedIn(req, res, next) {
//   if (req.isAuthenticated()) {
//     return next();
//   }
//   res.redirect("/login");
// }
