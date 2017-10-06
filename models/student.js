'use strict';
module.exports = (sequelize, DataTypes) => {
  var student = sequelize.define('student', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email:
    {
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: "Email is not valid"
        }
      }
    }
  }
  , {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });

  student.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  return student;

};
