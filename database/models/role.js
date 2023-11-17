'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.User, {
        through: 'User_Roles', // Nombre de la tabla intermedia
        as: 'users',
        foreignKey: 'rol_id',
      });
    }
  }
  Role.init({
    rol_id: DataTypes.INTEGER,
    rol_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Role',
  });
  return Role;
};