import express, { Router, Request, Response, NextFunction } from "express";
import db from "./../config/db";

const router: Router = express.Router();

router.get("/", (req: Request, res: Response) => {
  const queryString = "select * from students";

  db.query(queryString, (err: any, result: any) => {
    if (err) {
      return res.status(500).send({
        message: JSON.stringify(err),
      });
    }

    return res.status(200).send({
      message: "OK",
      data: result,
    });
  });
});

export default router;
