import { Router } from 'express';
import { getRepository } from 'typeorm';
import Contact from '../entity/Contact';

const router = Router();

router.post('/contact', async (req, res) => {
    const { name, email, subject, message } = req.body;
    const contactRepository = getRepository(Contact);
    const contact = new Contact();
    contact.name = name;
    contact.email = email;
    contact.subject = subject;
    contact.message = message;

    try {
        await contactRepository.save(contact);
        res.status(201).json({ message: 'Contact saved' });
    } catch (error) {
        res.status(500).json({ message: 'Error saving contact' });
    }
});

export default router;