var axios = require('axios')
var contracts = require('../models/contrato')

//
module.exports.list = () => {
    return contracts
                .find()
                .sort({nome:1})
    .then(docs => {
        return docs
    })
    .catch(erro => {
        return erro
    })
}