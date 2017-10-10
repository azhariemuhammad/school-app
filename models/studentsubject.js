'use strict';
module.exports = (sequelize, DataTypes) => {
  var studentSubject = sequelize.define('studentSubject', {
    SubjectId: DataTypes.INTEGER,
    StudentId: DataTypes.INTEGER,
    score: DataTypes.INTEGER,
    studentId: DataTypes.INTEGER
  });

  studentSubject.associate = function (models) {
    studentSubject.belongsTo(models.subject, {foreignKey: 'SubjectId'})
    studentSubject.belongsTo(models.student, {foreignKey: 'StudentId'})
  }

  return studentSubject;
};
