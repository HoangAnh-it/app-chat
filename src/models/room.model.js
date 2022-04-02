module.exports = function (sequelize, DataTypes) {
    const Room = sequelize.define('room', {
        roomId: {
            type: DataTypes.INTEGER,
            required: true,
            unique: true,
            primaryKey: true,
            autoIncrement: true,
        },

        name: {
            type: DataTypes.STRING,
            required: true,
        },

        admin: {
            type: DataTypes.INTEGER,
            required: true,
            references: {
                model: 'users',
                key: 'userId',
            }
        },

        maximum_users: {
            type: DataTypes.INTEGER,
        }
    });

    return Room;
}