import sequelize from "../config/db.js";
import Enquete from "./enquete.model.js";
import OpcaoResposta from "./opcaoResposta.model.js";

Enquete.hasMany(OpcaoResposta, {
  as: "opcoes",
  foreignKey: "enquete_id",
  onDelete: "CASCADE",
});

OpcaoResposta.belongsTo(Enquete, {
  foreignKey: "enquete_id",
});

export { sequelize, Enquete, OpcaoResposta };
