"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("tb_opcao_resposta", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      votos: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      enquete_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tb_enquete", // Nome da tabela pai (deve ser o nome real no banco)
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("tb_opcao_resposta");
  },
};
