import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const OpcaoResposta = sequelize.define(
  "OpcaoResposta",
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    votos: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: "tb_opcao_resposta",
    timestamps: false,
  },
);

export default OpcaoResposta;
