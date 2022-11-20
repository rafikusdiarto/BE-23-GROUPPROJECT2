const { authJwt } = require("../middleware");
const controller = require("../controllers/userController");

var thisRouter = require('express').Router(); {
  thisRouter.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  thisRouter.get("/all", controller.allAccess);
  thisRouter.get("/user", controller.userBoard);
  thisRouter.get("/moderator", controller.moderatorBoard);
  thisRouter.get("/admin", controller.adminBoard);

};

module.exports = thisRouter;