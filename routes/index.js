const express = require("express");
const router = express();
const controller = require("../controllers");
const restrict = require("../middlewares/restrict");

router.get("/auth/register", controller.auth.signUp);
router.post("/auth/register", controller.auth.register);

router.get("/auth/login", controller.auth.signIn);
router.post("/auth/login", controller.auth.login);

router.get("/auth/forgot-password", controller.auth.forgotPasswordView);
router.post("/auth/forgot-password", controller.auth.forgotPassword);

router.get("/auth/reset-password", controller.auth.resetPasswordView);
router.post("/auth/reset-password", controller.auth.resetPassword);

// router.get("/user-payment", restrict, controller.payment.payment);
// router.post("/user-payment", restrict, controller.payment.payment);

// router.get("/admin-payment", controller.payment.index);
// router.get("/admin-payment/:id", controller.payment.show);
// router.put("/admin-payment/:id", controller.payment.update);

module.exports = router;
