'use strict';
module.exports = (sequelize, DataTypes) => {
  var subject = sequelize.define('subject', {
    subject_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  subject.associate = models =>{
    subject.hasMany (models.teacher, {foreignKey: 'SubjectId'})

  }
  return subject;
};
