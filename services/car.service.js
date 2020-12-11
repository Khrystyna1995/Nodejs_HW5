const database = require('../database').getInstance();

module.exports = {
    getCars: (where= {}, limit= 10, offset = 10) => {
        const Car = database.getModel('car');

        return Car.findAll(
            where,
            limit,
            offset
        )
    },

    createCar: (car) => {
        const Car = database.getModel('car');

        return Car.create(car);
    },

    getCarById: (carId) => {
        const Car = database.getModel('car');

        return Car.findByPk(carId);
    },

    deleteCar: (carId) => {
        const Car = database.getModel('car');

        return Car.destroy({
            where: { id: carId }
        });
    },

};
