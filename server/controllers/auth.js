import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";


/* REGISTER USER */

export const register = async(req,res) => {
    try {
        // Obtain User Info
        const {
            firstName, lastName, email, password, picturePath, friends, location, occupation
        } = req.body;
        
        //Encrypt User Pass
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        // Create new user with encrypted pass
        const newUser = new User({
            firstName, lastName, email, passwordHash,picturePath, friends, location, occupation, viewedProfile: Math.floor(Math.random() * 10000),
            impresseions: Math.floor(Math.random() * 10000)
        });
        
        // Create and save new User
        const savedUser = await newUser.save();

        // Generate or send the response back to the frontend
        res.status(201).json(savedUser);


    } catch (err) {
        res.status(500).json({ error: err.message})
    }
}