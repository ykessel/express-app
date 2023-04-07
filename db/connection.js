import { MongoClient } from "mongodb";
import dotenv from 'dotenv';
dotenv.config()
// const Db = process.env.MONGO_URI;
const Db = process.env.MONGO_URI_LOCAL;
console.log(`MongoURI --> ${Db}`); 

const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
});
 
var _db;
 
export function connectToServer(callback) {
    client.connect(function (err, db) {
        if (db) {
            _db = db.db("myFirstDatabase");
            console.log("Successfully connected to MongoDB.");
        }
        return callback(err);
    });
}
export function getDb() {
    return _db;
}