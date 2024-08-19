import { Router } from "express";
import AppDataSource from "../database";
import Equipment from "../entity/Equipment";
import Photo from "../entity/Photo";

const router = Router();

router.get("/equipment", async (req, res) => {
    try {
        const equipmentRepository = AppDataSource.getRepository(Equipment);
        const equipment = await equipmentRepository.find({relations: ["photos"]});
        res.json(equipment);
    } catch (error) {
        res.status(500).json({error: "An error occurred while fetching equipment."});
    }
});

router.post("/equipment", async (req, res) => {
    const { name, type, description, price, photos } = req.body;

    if (!name || !type || !description || !price || !photos) {
        res.status(400).json({error: "Missing required fields."});
        return;
    }

    try {
        const equipmentRepository = AppDataSource.getRepository(Equipment);
        const equipment = new Equipment(name, type, description, price);
        await equipmentRepository.save(equipment);

        const photoRepository = AppDataSource.getRepository(Photo);
        for (const photo of photos) {
            const photoEntity = new Photo(photo.url, equipment);
            await photoRepository.save(photoEntity);
        }

        res.json({message: "Equipment created successfully."});
    } catch (error) {
        res.status(500).json({error: "An error occurred while creating equipment."});
    }
});

export default router;