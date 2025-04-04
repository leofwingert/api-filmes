import express from "express";
import movieRouter from "./routes/movie";
import reviewRouter from "./routes/review";

const app = express();
const PORT = 3333;

app.use(express.json());
app.use("/reviews", reviewRouter);
app.use("/movies", movieRouter);

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

export default app;
