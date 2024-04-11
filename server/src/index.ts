import dotenv from "dotenv";
dotenv.config();

const app = require("./server");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started at port:${PORT}`));
