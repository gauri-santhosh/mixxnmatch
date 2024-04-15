// module.exports = function(db) {
//     const express = require('express');
//     const router = express.Router();
  
//     router.post('/', async (req, res) => {
//         const { username, email, password } = req.body;
//         console.log(username, email, password);
//         try {
//             // Insert the user data into the database
//             await db.query("INSERT INTO users (username, email, password) VALUES (?, ?, ?)", [username, email, password]);
            
//             res.status(200).send('User created successfully');
//         } catch (error) {
//             console.error("Error:", error);
//             res.status(500).send('Internal server error');
//         }
//     });
  
//     return router;
// };