import {Router} from "express";

import { register, login } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post("/login", login);
authRouter.post("/sign-in", register);

export default authRouter;