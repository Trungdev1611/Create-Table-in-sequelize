const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../ConnectDB')

const User = sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false

    },
    email: {
        type: DataTypes.STRING,
        allowNull: false

    }
}, {
    // Other model options go here
});

module.exports = User