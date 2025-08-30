import Router from 'express';
import websiteRouter from "./website";
import statusRouter from "./statusWeb";
const router = Router();

router.use("/website" , websiteRouter);
router.use("/status/:websites", statusRouter);

export default router;
