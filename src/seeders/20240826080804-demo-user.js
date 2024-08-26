'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses',
      [
        {
          code: 'nodejs',
          name: 'NodeJs',
          image: 'https://files.fullstack.edu.vn/f8-prod/courses/6.png',
          description: 'Node và Express Js',
          price: 499000,
          slug: 'nodejs',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          code: 'django',
          name: 'Django',
          image: 'https://zendvn.com/images/coursesOneToOne/aj1vUuakgD.png',
          description: 'Python & Django',
          price: 599000,
          slug: 'django',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        {
          code: 'cplusplus',
          name: 'C++',
          image: 'https://s3-sgn09.fptcloud.com/codelearnstorage/files/thumbnails/cpp-cho-nguoi-moi-bat-dau_09e94813a177425db74fb7c23e65c859.png',
          description: 'C++ cơ bản cho người mới bắt đầu',
          price: 299000,
          slug: 'C++',
          createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
          updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
