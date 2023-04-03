const user = require('../models/users')
const roles = require('../models/roles')
const { hashPassword } = require('../controller/commonController')
async function seedData() {

    const findFirstRole = await roles.findOne({ authority: 'ROLE_SUPERADMIN' })
    if (!findFirstRole) {
        await roles.bulkCreate([
            {
                authority: 'ROLE_SUPERADMIN',
            }, {
                authority: 'ROLE_ADMIN',
            }, {
                authority: 'ROLE_USER',
            }
        ])
    }

    const findAdminRole = await roles.findOne({ authority: "ROLE_SUPERADMIN" });

    const findFirstUser = await user.findOne({ email: 'ayushsahu@gmail.com' })
    if (!findFirstUser) {
        await user.create({
            firstName: 'Ayush',
            lastName: 'Sahu',
            email: 'ayushsahu@gmail.com',
            password: hashPassword('password'),
            roleId: findAdminRole.id
        })
    }


}

module.exports = {
    seedData
}