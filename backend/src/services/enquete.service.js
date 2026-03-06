import { Enquete, OpcaoResposta } from "../models/index.js";

const enqueteService = {
  async create(titulo, dataInicio, dataFinal, opcoes) {
    if (!opcoes || opcoes < 3) {
      throw new Error("A enquete deve ter no mínimo 3 opções cadastradas.");
    }

    if (new Date(dataInicio) >= new Date(dataFinal)) {
      throw new Error("A data de término deve ser posterior à data de início.");
    }

    const enquete = await Enquete.create(
      {
        titulo: titulo,
        data_inicio: dataInicio,
        data_final: dataFinal,
        opcoes: opcoes.map((op) => ({ nome: op })),
      },
      {
        include: [{ model: OpcaoResposta, as: "opcoes" }],
      },
    );

    return enquete;
  },

  async listAll() {
    const enquetes = await Enquete.findAll({
      include: [{ model: OpcaoResposta, as: "opcoes" }],
      order: [["createdAt", "DESC"]],
    });

    const dataAtual = new Date();

    return enquetes.map((enquete) => {
      let status = "Em andamento";
      const inicio = new Date(enquete.data_inicio);
      const final = new Date(enquete.data_final);

      if (dataAtual < inicio) {
        status = "Não iniciada";
      } else if (dataAtual > final) {
        status = "Finalizada";
      }

      return {
        ...enquete.toJSON(),
        status,
      };
    });
  },

  async vote(enqueteId, opcaoId) {
    const enquete = await Enquete.findByPk(enqueteId);

    if (!enquete) {
      throw new Error("Enquete não encontrada.");
    }

    const dataAtual = new Date();
    const inicio = new Date(enquete.data_inicio);
    const final = new Date(enquete.data_final);

    if (dataAtual < inicio || dataAtual > final) {
      throw new Error("Esta enquete não está ativa para votação no momento.");
    }

    const opcao = await OpcaoResposta.findOne({
      where: { id: opcaoId, enquete_id: enqueteId },
    });

    if (!opcao) {
      throw new Error("Opção inválida para esta enquete.");
    }

    opcao.votos += 1;
    await opcao.save();

    return { enquete, opcao };
  },
};

export default enqueteService;
