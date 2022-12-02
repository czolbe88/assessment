import {Pool} from "mysql2/promise";

const mysql = require('mysql2/promise');

export const getClient = (): Pool => {
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'inventory',
        password: 'P@ssw0rd',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    return pool;
}