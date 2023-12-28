
import express from "express";
import { login } from "../controllers/auth.js"

const authRoutes = express.Router({ mergeParams: true });

authRoutes.route('/login')
    .post(login)

    

export default authRoutes;