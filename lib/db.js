
import mysql from "mysql2/promise";

const pool = mysql.createPool({
    host: "localhost",  
        user: "root",       
        password: "jm_SYS",
        database: "hrms_db",       
});

export default pool;

