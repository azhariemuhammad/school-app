'use strict';

module.exports = (sequelize, DataTypes) => {
  var teacher = sequelize.define('teacher', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,


    email:{
      type: DataTypes.STRING,
      validate:{
        isEmail: {
          args: true,
          msg: "Email is not valid"
        }
      }
    },
    SubjectId: DataTypes.INTEGER
  });
  teacher.associate = models =>{
    teacher.belongsTo(models.subject, {foreignKey: 'SubjectId'})
  }


  return teacher;
};
