import sequelize from "../config/db.js";
import Enquete from "./enquete.model.js";
import OpcaoResposta from "./opcaoResposta.model.js";

Enquete.hasMany(OpcaoResposta, {
  as: "tb_opcao_resposta",
  foreignKey: "enquete_id",
  onDelete: "CASCADE",
});

OpcaoResposta.belongsTo(Enquete, {
  foreignKey: "opcao_resposta_id",
});

export { sequelize, Enquete, OpcaoResposta };
