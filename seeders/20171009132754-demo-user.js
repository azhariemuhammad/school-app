'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      username: 'JhonDoe',
      password: 'foo',
      role: 'teacher'
    },{
      username: 'pakdengklek',
      password: 'gogetgold',
      role: 'academic'
    },{
      username: 'charlesxavier',
      password: 'magnetowhy',
      role: 'headmaster'
    }
   ])

  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
