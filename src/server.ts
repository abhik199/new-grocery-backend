import express from "express";
import { router } from "./routes/root.routes";
import { prisma } from "./config/config";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

const port = process.env.PORT || 6300;
async function startServer() {
  try {
    await prisma.$connect();
    console.log("Connected to Prisma");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
void startServer();
