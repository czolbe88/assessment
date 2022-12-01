import {addItem} from "../dao/itemDao";

const router = require('express').Router();

router.post('/item', async ({body: {name, category, price}}, res) => {
        let id = await addItem(name, category, price);
        if (id) {
            res.status(200).send(id)
        } else {
            res.status(400)
        }
});



module.exports = router;