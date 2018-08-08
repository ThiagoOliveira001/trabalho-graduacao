const repository = require('./loginRepository'),
    service = require('./loginService');

module.exports = {
    login,
    refazerLogin,
    esqueceuSenha,
    alterarSenha
}

async function login(req, res) {
    let retorno = await repository.login(req.body);

    if(!retorno)
        throw { statusCode: 404, message: 'Usuario não encontrado.\nVerifique as credenciais.' };

    retorno.token = 'tokenFera'//service.(req.body);

    res.ok(retorno);
}

async function refazerLogin(req, res) {
    // let retorno = aw
    res.ok();
}

async function esqueceuSenha(req, res) {
    let retorno = await repository.esqueceuSenha(req.body.email);
    await service.esqueceuSenha(retorno);
    res.ok();
}

async function alterarSenha(req, res) {
    await repository.alterarSenha(req.body);
    res.ok();
}