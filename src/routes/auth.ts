import { Router } from "express";
import authController from "../controllers/auth";
import { errorHandler } from "../error-handler";

const authRouter: Router = Router();

/**
 * @swagger
 * /auth/admins:
 *   post:
 *     summary: "Register a new admin"
 *     description: "This endpoint allows an admin to be registered."
 *     tags:
 *       - "Auth"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: "Admin successfully registered"
 *       400:
 *         description: "Invalid input data"
 *       500:
 *         description: "Internal server error"
 */
authRouter.post("", errorHandler(authController.registerAdmin));

/**
 * @swagger
 * /auth/admins/tokens:
 *   post:
 *     summary: "Admin login"
 *     description: "This endpoint allows an admin to log in and obtain a token."
 *     tags:
 *       - "Auth"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: "Successfully logged in, token returned"
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *       401:
 *         description: "Invalid credentials"
 *       500:
 *         description: "Internal server error"
 */
authRouter.post("/tokens", errorHandler(authController.loginAdmin));

export default authRouter;
