import {ResultSetHeader} from "mysql2";
import {getClient} from "../dbClient/dbClient";
import {Pool as PromisePool} from "mysql2/promise";

const dbClient: PromisePool = getClient();
const TABLE_NAME = "items"
export const insertItem = async (name: string, category: string, price: number) => {
    const query = `INSERT INTO ${TABLE_NAME} (name, category, price, last_updated_dt) VALUES (?,?,?,? )`;
    let result = await dbClient.execute(query, [name, category, price, new Date()])
    let id = {id: (result[0] as ResultSetHeader).insertId}
    return id;
}

export const getItemCountByName = async (name: string) => {
    const query = `SELECT count(1) from ${TABLE_NAME} where name = ?`;
    let result = await dbClient.execute(query, [name])
    return result[0][0]['count(1)'];
}

export const updateItem = async (name: string, category: string, price: number) => {
    const query = `UPDATE ${TABLE_NAME} SET category = ?, price = ? WHERE name = ?`
    let result = await dbClient.execute(query, [category, price, name])
    return result[0]['affectedRows'];
}

export const getItemsUpdatedBetweenDateTime = async (afterDt: string, beforeDt: string) => {

    const query = `SELECT * from ${TABLE_NAME} where last_updated_dt between ? and ?`;
    let result = await dbClient.execute(query, [afterDt, beforeDt])
    return result[0]

}

export const getIdByItemName = async (name: string) => {
    const query = `Select id from ${TABLE_NAME} WHERE name = ?`
    let result = await dbClient.execute(query, [name])
    let id = result[0][0]['id']
    return {id};
}

export const listItemsByCategory = async (category: string) => {
    const query = `Select * from ${TABLE_NAME} WHERE category = ?`
    let result = await dbClient.execute(query, [category])
    return result[0];
}


export const listItems = async () => {
    const query = `Select * from ${TABLE_NAME}`
    let result = await dbClient.execute(query)
    return result[0];
}

// export const getItemsBetweenDtRange(start: string, end: string) => {
// }