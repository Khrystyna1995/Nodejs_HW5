const  database  = require('../database').getInstance();

module.exports = {
    getUsers: (where= {}, limit= 10, offset = 10) => {
        const User = database.getModel('user');
        const Car = database.getModel('car');

        return User.findAll(
            where,
            {include: Car },
            limit,
            offset
        )
    },

    createUser: (user) => {
        const User = database.getModel('user');

        return User.create(user);
    },

    getUserById: (userId) => {
        const User = database.getModel('user');
        const Car = database.getModel('car');


        return User.findByPk(userId, {include: Car});
    },

    deleteUser: (userId) => {
        const User = database.getModel('user');

        return User.destroy({
            where: { id: userId }
        });
    }

};
