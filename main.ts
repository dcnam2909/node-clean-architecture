import express from "express";
import { UserController } from "./controllers/user.controller";

const app = express();
const port = 3000;

app.use("/users", UserController());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
