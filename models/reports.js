module.exports = function(sequelize, DataTypes) {
  var Reports = sequelize.define("Reports", {
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 30]
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 255]
      }
    }
  });

  // Reports.associate = function(models) {
  //   // We're saying that a Post should belong to an User
  //   // A Post can't be created without an User due to the foreign key constraint
  //   Reports.belongsTo(models.Users, {
  //     foreignKey: {
  //       allowNull: true
  //     }
  //   });
  // };

  return Reports;
};
