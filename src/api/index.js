import { Router } from "express";

export default () => {
  const router = Router();

  router.get("/admin/hello", (req, res) => {
    const testOauth = req.scope.resolve("testOauthService");

    res.json({
      message: "ok",
    });
  });

  return router;
};
