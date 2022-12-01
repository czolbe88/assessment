import {ResultSetHeader} from "mysql2";
import {getClient} from "../dbClient/dbClient";
import {Pool as PromisePool} from "mysql2/promise";

const dbClient: PromisePool = getClient();

export const addItem = async (name: string, category: string, price: number) => {
    const query = `INSERT INTO items (name, category, price, last_updated_dt) VALUES (?,?,?,? )`;
    let result = await dbClient.execute(query, [name, category, price, new Date()])
    let id = {id: (result[0] as ResultSetHeader).insertId}
    return id;
}

// export const getItemsBetweenDtRange(start: string, end: string) => {
// }