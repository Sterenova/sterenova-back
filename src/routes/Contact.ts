import { Router } from "express";
import AppDataSource from "../database";
import Contact from "../entity/Contact";

const router = Router();

function checkEmail(email: string) {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function checkName(name: string) {
  return name.length > 0 && name.length < 100;
}

function checkSubject(subject: string) {
  return subject.length > 0 && subject.length < 150;
}

function checkMessage(message: string) {
  return message.length > 0 && message.length < 1000;
}

router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!checkEmail(email)) {
    return res.status(400).json({ message: "Email invalide" });
  } else if (!checkName(name)) {
    return res.status(400).json({ message: "Nom invalide : le nom doit être entre 1 et 100 caractères." });
  } else if (!checkSubject(subject)) {
    return res.status(400).json({ message: "Sujet invalide : le sujet doit être entre 1 et 150 caractères." });
  } else if (!checkMessage(message)) {
    return res.status(400).json({ message: "Message invalide : le message doit être entre 1 et 1000 caractères." });
  }

  try {
    const contactRepository = AppDataSource.getRepository(Contact);
    const contact = contactRepository.create({ name, email, subject, message });
    await contactRepository.save(contact);
    res.status(201).json({ message: "Message envoyé avec succès" });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de l'enregistrement du message" });
  }
});

router.get("/contact", async (req, res) => {
  const contactRepository = AppDataSource.getRepository(Contact);
  const contacts = await contactRepository.find();
  res.json(contacts);
});

export default router;
