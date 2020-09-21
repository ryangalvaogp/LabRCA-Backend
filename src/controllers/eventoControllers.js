const connection = require('../database/conection')
const crypto = require ('crypto')
const dataAt = require ('./config/dataAt')

module.exports = {

async create (request, response){

    const {Titulo, Descricao, Local_do_evento, Data_do_evento, Hora_do_evento} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    const Responsavel_id=request.headers.authorization;
   
    await connection('eventos').insert({   
        id,
        Titulo,
        Descricao,
        Local_do_evento,
        Data_do_evento,
        Hora_do_evento,
        Responsavel_id
    });
return response.json({id})
},
async index (request, response ){
    const [count] = await connection ('eventos').count();
    const eventos = await connection('eventos')
    .join('usuario', 'usuario.id', '=', 'eventos.Responsavel_id')
    .select('eventos.*', 'usuario.name', 'usuario.email');
    //.select('*');
   
   
    response.header('X-Total-Count', count['count(*)'])
    return response.json(eventos);


},


async delete (request, response){
    const  {id}  = request.params;
    const Responsavel=request.headers.authorization;

    const eventos = await connection ('eventos').where('id', id ).select ('Responsavel_id').first ();

    if (eventos.Responsavel_id != Responsavel){
        return response.json({error: 'Operacao não foi permitida'});;
    }
        await connection('eventos').where('id', id).delete();
        return response.status(204).send();
    
  

    ;},

    
    async createimg (req, res){
       

    
        const CreatedAt =  dataAt()
        
        const Name = req.file.originalname;
        const Size = req.file.size;
        const Key = req.file.filename;
        const Destino = req.file.path
        const id = crypto.randomBytes(4).toString('HEX');
        const Eventoid = req.body.Eventoid;
        const Projetoid = req.body.Projetoid; 
        
         await connect('imagens').insert({
                id,
                Name,
                Size,
                Key,
                Destino,
                CreatedAt,
                Projetoid,
                Eventoid
        });
        
        return res.json({status: "Enviado com Sucesso"})
    }


}