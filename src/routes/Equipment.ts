import { Router } from "express";
import path from "path";
import fs from "fs/promises";
import AppDataSource from "../database";
import Equipment from "../entity/Equipment";

const router = Router();

router.get("/equipment", async (req, res) => {
    const equipmentRepository = AppDataSource.getRepository(Equipment);
    const equipment = await equipmentRepository.find();
    res.json(equipment);
});

export default router;