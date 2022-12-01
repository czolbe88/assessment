import express from 'express';

const app = express();
app.use(express.json())
const port = 3000;
const itemRoutes = require("./routes/itemRoutes")

interface Item {
    name: string
    category: string
    price: number
}

app.use('/api', itemRoutes)

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});