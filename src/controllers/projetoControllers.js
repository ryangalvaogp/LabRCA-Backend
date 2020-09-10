const connection = require('../database/conection')
const crypto = require ('crypto')

module.exports = {

async create (request, response){

    const {Titulo, Descricao, Data_de_criacao} = request.body;
    
    const id = crypto.randomBytes(4).toString('HEX');
    const Responsavel_id=request.headers.authorization;
   
    await connection('projetos').insert({   
        id,
        Titulo,
        Descricao,
        Data_de_criacao,
        Responsavel_id
    });
return response.json({id})
},

async index (request, response ){
    const { page = 1} = request.query 
    const [count] = await connection ('projetos').count();
    
    const projetos = await connection('projetos')
    .join('usuario', 'usuario.id', '=', 'projetos.Responsavel_id')
    //.limit(5)
   // .offset((page - 1)*5)
    .select('projetos.*', 'usuario.name', 'usuario.email');
    //.select('*')
    response.header('X-Total-Count', count['count(*)'])
    return response.json(projetos);


},


async delete (request, response){
    const  {id}  = request.params;
    const Responsavel=request.headers.authorization;

    const projetos = await connection ('estagio.projetos').where('id', id ).select ('Responsavel_id').first ();

    if (projetos.Responsavel_id != Responsavel){
        return response.json({error: 'Operacao não foi permitida'});;
    }
        await connection('estagio.projetos').where('id', id).delete();
        return response.status(204).send();
    
  

    ;}



}