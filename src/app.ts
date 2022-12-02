import express from 'express';

const app = express();
app.use(express.json())
const itemRoutes = require("./routes/itemRoutes")

app.use('/api', itemRoutes)

export default app;
