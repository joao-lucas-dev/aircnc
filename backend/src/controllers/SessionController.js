const User = require('../models/User');

//  index: retornar uma listagem de sessões;
//  show: retornar uma única sessão;
//  store: criar uma sessão;
//  update: atualizar uma sessão;
//  destroy: deletar uma sessão.

//  req: para a requisição.
//  res: resposta ao cliente.

// req.query: acessar os query params (para filtros)
// req.params: acessar os route params (para edição e delete)
// req.body: acessar corpo da requisição params

module.exports = {
    async store(req, res) {
        const { email } = req.body;

        let user = await User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }
        return res.json(user);
    }
};