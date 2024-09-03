const timeElapsed = Date.now();
const today = new Date(timeElapsed);
estudante_controller = require("../controllers/estudante.js")
livro_controller = require("../controllers/livro.js")

let proxId = 1;

const model = (body, id = proxId++) => {
    if(
        livro_controller.show(body.livro_id) &&
        estudante_controller.show(body.estudante_id)
    ) {
        return {
            id,
            Livro: livro_controller.show(body.livro_id).titulo,
            Estudante: estudante_controller.show(body.estudante_id).nome,
            Devolucao: body.data_devolucao,
            Aluguel: today.toISOString()
        }
    }
}

module.exports = model