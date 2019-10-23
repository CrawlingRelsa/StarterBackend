import { Router } from "express";
import Home from "../model/home";

const router = Router();

router.get("/", (req, res) => {
  res.json({
    resp: new Home().foo("ok")
  });
});

export default router;
