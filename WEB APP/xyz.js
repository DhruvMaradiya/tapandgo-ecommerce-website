const bcrypt = require('bcryptjs');

const password = '12345678';

// Generate a salt
bcrypt.genSalt(10, function (err, salt) {
    if (err) {
        return console.error(err);
    }

    // Hash the password using the salt
    bcrypt.hash(password, salt, function (err, hash) {
        if (err) {
            return console.error(err);
        }

        // Print the hashed password
        console.log('Hashed Password:', hash);
    });
});
