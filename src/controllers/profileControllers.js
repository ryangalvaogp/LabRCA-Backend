const connection = require ('../database/conection');

module.exports = {
    async projetos (request, response){
        const Responsavel_id = request.headers.authorization;
    
        const projetos = await connection('projetos')
        .where ('Responsavel_id', Responsavel_id)
        .select ('*');
        
    return response.json(projetos);
    },
    
async eventos (request, response){
    const Responsavel_id = request.headers.authorization;

    const eventos = await connection('eventos')
    .where ('Responsavel_id', Responsavel_id)
    .select ('*');

return response.json(eventos);

}


}
