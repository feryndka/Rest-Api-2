import express, { Router, Request, Response, NextFunction } from "express"

const router : Router = express.Router()

//Root Params and Multi Function
router.get("/:username", (req: Request, res: Response, next: NextFunction) => {
  console.log("Handler")
  next()
}, (req: Request, res: Response, next: NextFunction) => {
  console.log("Handler 2")
  next()
},  (req: Request, res: Response) => {
  const { username } = req.params

  res.send({
    profile: [{
      name : username,
      age : 20
    }]
  })
})

router.put("/", (req: Request, res: Response) => {
  res.send({
    users: []
  })
})

router.get("/([/$])clown", (req: Request, res: Response) => {
  res.send({
    users: [{
      "clown" : "service"
    }]
  })
})

export default router