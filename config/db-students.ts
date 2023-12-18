import mysql2 from "mysql2";

const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "Fery@1503",
  database: "school_db",
  port: 3306,
});

db.connect((err : any) => {
  if (!err) {
    console.log("mysql connected")
  } else {
    console.log("mysql not connected")
  }
})

export default db