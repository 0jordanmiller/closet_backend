
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define("category", {
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


  return category
}
