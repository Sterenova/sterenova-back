import { Router } from "express";
import AppDataSource from "../database";
import Pack from "../entity/Pack";

const router = Router();

router.get("/packs", async (req, res) => {
    try {
        const packRepository = AppDataSource.getRepository(Pack);
        const packs = await packRepository.find();
        res.json(packs);
    } catch (error) {
        res.status(500).json({error: "An error occurred while fetching packs."});
    }
});

export default router;