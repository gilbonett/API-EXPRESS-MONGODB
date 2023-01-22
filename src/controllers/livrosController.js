import livros from "../models/Livro.js";

class livroController {
//populate vou popular o campo autor, preciso do caminho ('autor') e exec para executar
    static listarLivros =(req, res) => {
        livros.find()
        .populate('autor')
        .exec((err, livros) => {
            res.status(200).json(livros) 
    })
}

//Buscar Livro especifico pelo identificador
    static listarLivroPorId = (req, res) => {
        const id = req.params.id;
        livros.findById(id)
        .populate('autor', 'nome')
        .exec((err, livros) => {
            if(err){
                res.status(400).send({message: `${err.mensage} -  id do livro não encontrado` })
            } else {
                res.status(200).send(livros)
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);
        livro.save((err) => {
            if (err) {
                res.status(500).send({message: `${err.message} -  falha ao cadastrar livro`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    }

//Criei uma const id que vai receber o que vier de parametro na req, vai ser req.params, quando eu quero obter alguma coisa que esta sendo passada pela rota , pego com o params id = req.params.id, com isso pego o id que quero atualizar, eu vou pegar a minha coleção e usar o metodo findByAndUpdate que localiza pelo Id e o atualiza
//o primeiro parâmetro que vamos passar é o Id do que eu quero atualizar, livros.findByIdAndUpdate(id, ), e o segundo é o meu critério de atualização, que é o set
//set, o que eu vou mandar para substituir. 

    static atualizarLivro = (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static excluirLivro = (req, res) => {
        const id = req.params.id

        livros.findByIdAndDelete(id, (err) => {
            if(!err){
                res.status(200).send({message: 'Livro removido com sucesso'})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora
        
        livros.find({'editora':editora}, {}, (err, livros) => {
            res.status(200).send(livros)
        })
    }

}

export default livroController