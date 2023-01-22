import mongoose from "mongoose";


//o type no autor vai ser uma referencia para o modelo de autor. Vai ser o id de outro objeto, ref: 'autores'
const livroSchema = new mongoose.Schema( {
    id: {type: String},
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref:'autores', required: true},
    editora: {type: String, required: true}, 
    numeroPaginas: {type: Number}
}
)

const livros = mongoose.model('livros', livroSchema);

export default livros;