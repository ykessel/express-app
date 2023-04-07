import { User } from "../models/User.js";

export const createUser = ((req, res) => {
    const { firstname, lastname, email } = req.body;
    const newUser = { firstname, lastname, email };

    User.create(newUser)
    .then(result => res.status(201).json({ result }))
    .catch((error) => res.status(500).json({msg: error }))

    // here we save the user in the database
    // This section will help you create a new record.
    // let db_connect = dbo.getDb();
    // let myobj = {
    //   name: req.body.name,
    //   position: req.body.position,
    //   level: req.body.level,
    // };
    // db_connect.collection("records").insertOne(myobj, function (err, res) {
    //   if (err) throw err;
    //   response.json(res);
    // });
    // res.status(201).json(newUser)
})