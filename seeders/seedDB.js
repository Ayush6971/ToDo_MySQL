const user = require('../models/users')
const bcrypt = require('bcryptjs')

async function seedData() {
    const findFirstUser = await user.findOne({ email: 'ayushsahu@gmail.com' })
    console.log("🚀 ~ file: seedDB.js:5 ~ seedData ~ findFirstUser:", findFirstUser)
    if (!findFirstUser) {
        await user.create({
            firstName: 'Ayush',
            lastName: 'Sahu',
            email: 'ayushsahu@gmail.com',
            password: await bcrypt.hash('password', 8)
        })
    }
}

module.exports = {
    seedData
}