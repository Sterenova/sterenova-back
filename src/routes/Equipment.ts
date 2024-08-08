import { Router } from "express";
import path from "path";
import fs from "fs/promises";
import AppDataSource from "../database";
import Equipment from "../entity/Equipment";

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

export default router;