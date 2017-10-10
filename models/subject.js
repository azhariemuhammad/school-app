'use strict';
module.exports = (sequelize, DataTypes) => {
  var subject = sequelize.define('subject', {
    subject_name: DataTypes.STRING
  });


  subject.associate = models =>{
    subject.hasMany (models.teacher, {foreignKey: 'SubjectId'})
    subject.belongsToMany(models.student, {through:"studentSubject", foreignKey:'SubjectId'})
    subject.hasMany(models.studentSubject, {foreignKey: 'SubjectId'})
  }
  return subject;
};
