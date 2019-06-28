'use strict';
module.exports = (sequelize, DataTypes) => {
  const Burger = sequelize.define('Burger', {
    id: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
        }
      },
      burger_name: {
        type: DataTypes.STRING,
        validate: {
          allowNull: false
        }
      },
      devoured: {
        type: DataTypes.BOOLEAN,
        validate: {
          allowNull: false
        }
      }   
      }, {});

      Burger.associate = function (models) {
        // associations can be defined here
      };
      return Burger;
      };

        
        