import { Router } from "express";
import enqueteController from "../controllers/enquete.controller.js";

const router = Router();

router.post("/enquetes", enqueteController.create);

router.get("/enquetes", enqueteController.list);

router.post("/enquetes/:enquete_id/votar/:opcao_id", enqueteController.vote);

router.put("/enquetes/:id", enqueteController.update);

router.delete("/enquetes/:id", enqueteController.delete);

export default router;
