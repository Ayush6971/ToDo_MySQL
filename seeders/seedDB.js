const user = require('../models/users')
const { hashPassword } = require('../controller/commonController')
async function seedData() {
    const findFirstUser = await user.findOne({ email: 'ayushsahu@gmail.com' })
    if (!findFirstUser) {
        await user.create({
            firstName: 'Ayush',
            lastName: 'Sahu',
            email: 'ayushsahu@gmail.com',
            password: hashPassword('password')
        })
    }
}

module.exports = {
    seedData
}