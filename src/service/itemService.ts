import {isNameUnique} from "../utilities/validationUtil";
import {
    getIdByItemName,
    getItemsUpdatedBetweenDateTime,
    insertItem,
    listItems,
    listItemsByCategory,
    updateItem
} from "../dao/itemDao";
import {Item} from "../interface/items";

export const addOrUpdateExistingItem = async (name, category, price) => {

    let id: { id: number } = null;
    if (await isNameUnique(name)) {
        id = await insertItem(name, category, price);
    } else {
        let result = await updateItem(name, category, price);
        if (result === 1) {
            id = await getIdByItemName(name)
        } else {
            throw new Error("Could not update item")
        }
    }
    return id;
}

export const getItemsUpdatedBetweenDateTimeWithTotalPrice = async (afterDt: string, beforeDt: string) => {

    let itemArray: Item[] = await getItemsUpdatedBetweenDateTime(afterDt, beforeDt) as Item[];
    let totalPrice: number = 0;
    itemArray.forEach(item => {
        totalPrice += parseFloat(item.price);
    })
    return {items: itemArray, total_price: totalPrice };

}

export const getItemsByCategory = async (category: string) => {
    if(category === "all"){
        return {items: await listItems()}
    } else{
        return {items : await listItemsByCategory(category)}
    }

}