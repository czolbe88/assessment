import {ErrorResponse} from "../error/error";
import {
    addOrUpdateExistingItem,
    getItemsByCategory,
    getItemsUpdatedBetweenDateTimeWithTotalPrice
} from "../service/itemService";

const router = require('express').Router();

router.post('/item', async ({body: {name, category, price}}, res) => {
    try {
        if (name && category && price) {
            let id = await addOrUpdateExistingItem(name, category, price)
            res.status(200).send(id)
        } else {
            res.status(400).send(new ErrorResponse("Missing parameters in request"))
        }
    } catch (e) {
        res.status(400).send(new ErrorResponse(e.message))
    }
});

export const itemRouteGETHandler = async ({query: {after, before, category}}, res) => {
    try {
        let data = null;
        if (after && before) {
            data = await getItemsUpdatedBetweenDateTimeWithTotalPrice(after, before)
            res.status(200).send(data)
        } else if (category) {
            data = await getItemsByCategory(category)
            res.status(200).send(data)
        } else {
            res.status(400).send(new ErrorResponse("Missing parameters in request"))
        }
    } catch (e) {
        res.status(400).send(new ErrorResponse(e.message))
    }

}
router.get("/item", itemRouteGETHandler)


module.exports = router;