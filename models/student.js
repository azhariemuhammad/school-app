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
  });
  student.associate = models =>{
    student.belongsToMany(models.subject, {through:"studentSubject", foreignKey:'StudentId'})
    student.hasMany(models.studentSubject, {foreignKey: 'StudentId'})
  }


  student.prototype.getFullName = function () {
    return this.first_name+' '+this.last_name
  }

  return student;

};
