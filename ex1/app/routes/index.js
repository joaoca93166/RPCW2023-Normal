var express = require('express');
var router = express.Router();
var contract = require('../controllers/contrato')

/* GET home page. */
router.get('/contracts/', function(req, res) {
  contract.list()
      .then(contratos => res.status(200).json(contratos))
      .catch(erro => res.status(520).json({erro: erro, mensagem: "Erro na listagem dos EMD."}))
});

module.exports = router;
