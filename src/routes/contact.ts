import { Router } from "express";
import { getRepository } from "typeorm";
import Contact from "../entity/Contact";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;
  console.log(req.body);
  res.send(req.body);
});

export default router;
