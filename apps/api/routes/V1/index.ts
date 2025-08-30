import express from 'express';
import Router from 'express';

const router = Router();

router.use("/users", usersRouter);
router.use("/website", websiteRouter);

export default router;