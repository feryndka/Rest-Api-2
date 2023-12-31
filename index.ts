import express, { Application, Request, Response, NextFunction } from "express";
import cookieParser from "cookie-parser";
import userRouter from "./router/userRouter";
import studentRouter from "./router/studentRouter"

const app: Application = express();
const PORT: number = 8800;

app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);

//Middleware dalam express
app.use((req: Request, res: Response, next: NextFunction) => {
  const err = false;

  if (err) {
    res.status(500).send({
      message: "Server Error",
    });
  } else {
    console.log(" Running on general routers");
    next();
  }
});

app.get("/", (req: Request, res: Response) => {
  console.log("Cookies :", req.cookies);

  console.log("Signed Cookies :", req.signedCookies);

  res.send("Hello World");
});

app.post("/", (req: Request, res: Response) => {
  res.send({
    Hello: "World",
    Method: "Post",
  });
});

app.put("/random.text", (req: Request, res: Response) => {
  res.send({
    Random: "Text",
  });
});

app.get("/ab+cd", (req: Request, res: Response) => {
  res.send({
    ab: "cd",
    operation: "+",
  });
});

app.get("/ab?cd", (req: Request, res: Response) => {
  res.send({
    ab: "cd",
    operation: "?",
  });
});

app.listen(PORT, () => {
  console.log("Application run on port :", PORT);
});
