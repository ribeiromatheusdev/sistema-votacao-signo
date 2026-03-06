import enqueteService from "../services/enquete.service.js";

const enqueteController = {
  async create(req, res) {
    try {
      const { titulo, data_inicio, data_final, opcoes } = req.body;

      const novaEnquete = await enqueteService.create(
        titulo,
        data_inicio,
        data_final,
        opcoes,
      );

      return res.status(201).json(novaEnquete);
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },

  async list(req, res) {
    try {
      const enquetes = await enqueteService.listAll();

      return res.status(200).json(enquetes);
    } catch (error) {
      return res.status(500).json({ erro: "Erro interno ao buscar enquetes." });
    }
  },

  async vote(req, res) {
    try {
      const { enquete_id, opcao_id } = req.params;

      const resultado = await enqueteService.vote(enquete_id, opcao_id);

      return res
        .status(200)
        .json({ mensagem: "Voto computado com sucesso!", dados: resultado });
    } catch (error) {
      return res.status(400).json({ erro: error.message });
    }
  },
};

export default enqueteController;
