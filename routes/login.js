module.exports = function(db) {
    const express = require('express');
    const router = express.Router();
  
    const queryAsync = (sql, params) => new Promise((resolve, reject) => {
        db.query(sql, params, (err, results) => {
            if (err) reject(err);
            else resolve(results);
        });
    });
  
    router.post('/loginuser', async (req, res) => {
        const { username, password } = req.body;
        console.log(username, password);

        try {
            const users = await queryAsync("SELECT * FROM users WHERE username = ?", [username]);
            if (users.length > 0) {
                const user = users[0];
                console.log(user);
                console.log(user.Password);
                const org = user.Password;
                console.log(org);
                if (org === Password) {
                    res.status(200).json({ loginSuccess: true });
                } else {
                    res.status(401).json({ loginSuccess: false, message: 'Invalid password' });
                }
                
            } else {
                res.status(401).json({ loginSuccess: false, message: 'Invalid username' });
            }
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({ loginSuccess: false, message: 'Internal server error' });
        }
    });

  
    return router;
};
