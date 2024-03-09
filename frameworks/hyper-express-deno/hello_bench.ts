import { Server } from "npm:hyper-express";
const app = new Server();

app.get("/", (_, response) => {
  response.send("Hello, Bench!");
});

app.listen(8000);
