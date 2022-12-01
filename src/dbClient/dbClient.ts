import {Pool as PromisePool} from "mysql2/promise";
const mysql = require('mysql2');

export const getClient = (): PromisePool => {
    // Create the connection pool. The pool-specific settings are the defaults
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        database: 'inventory',
        password: 'P@ssw0rd',
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });
    const promisePool = pool.promise();
    return promisePool;
}