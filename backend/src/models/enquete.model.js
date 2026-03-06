import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Enquete = sequelize.define(
  "Enquete",
  {
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    data_inicio: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    data_final: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    tableName: "tb_enquete",
    timestamps: true,
  },
);

export default Enquete;
