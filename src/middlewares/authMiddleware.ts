import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

function verifyToken(req: any, res: Response, next: NextFunction) {
  // change any-Request type later
  const token = req.header("Authorization");
  if (!token) {
    res.status(401).json({ error: "Access denied" });
  } else {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET || "");
      // req.userId = decoded?.userId;
      // COME BACK TO THIS FILE!!!
      next();
    } catch (error) {
      res.status(401).json({ error: "Invalid token" });
    }
  }
}

export default verifyToken;
