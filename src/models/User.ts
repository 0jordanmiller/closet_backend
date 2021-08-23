
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("user", {
    firstName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    lastName: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    email: {
      type: DataTypes.STRING,
      notEmpty: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
  })

  User.associate = function (models) {
    User.hasMany(models.category, {
      foreignKey: 'userId',
      as: 'categories',
      onDelet: 'CASCADE'
    });

  };
  return User
}
